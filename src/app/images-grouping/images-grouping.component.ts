import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NgxPicaService, NgxPicaErrorInterface } from '@digitalascetic/ngx-pica';
import { NgxPicaResizeOptionsInterface } from '@digitalascetic/ngx-pica/lib/ngx-pica-resize-options.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { MediaItemService, IMediaItemForGrouping, YesNo, MediaItemForGrouping, IMediaItem, MediaItem } from './media-item.service';
import { AlbumService } from './album.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

export const googleLoginOptions = {
  scope: 'https://www.googleapis.com/auth/photoslibrary.appendonly'
}

export const timeDiffDuplicateDefault = 5;
export const timeDiffGroupDefault = 1800;
export const resizeWidthDefault = 1000;
export const resizeHeightDefault = 1000;

@Component({
  selector: 'igfu-images-grouping',
  templateUrl: './images-grouping.component.html',
  styleUrls: ['./images-grouping.component.scss']
})
export class ImagesGroupingComponent implements OnInit {

  mediaItems: IMediaItem[] = [];
  mediaItemsForGrouping: IMediaItemForGrouping[] = [];
  timeDiffDuplicate: number;
  mediaItemsGroups: IMediaItemsGroup[] = [];
  timeDiffGroup: number;
  uploadToken: string;
  inputFilesForm = this.fb.group({
    inputFiles: ''
  });
  filesLoaded: boolean = false;
  filesCount: number;
  groupsCreated: boolean = false;
  uploadingStatus: UploadingStatus = UploadingStatus.None;

  picaOptions: NgxPicaResizeOptionsInterface = {
    exifOptions: {
      forceExifOrientation: true
    },
    aspectRatio: {
      keepAspectRatio: true
    }
  };
  user: SocialUser;
  loggedIn: boolean;
  paramsForm = this.fb.group({
    timeDiffDuplicate: [timeDiffDuplicateDefault, [
      Validators.required,
      Validators.min(1),
      Validators.max(3600)
    ]],
    timeDiffGroup: [timeDiffGroupDefault, [
      Validators.required,
      Validators.min(60),
      Validators.max(86400)
    ]],
    resizeWidth: [resizeWidthDefault, [
      Validators.required,
      Validators.min(1),
      Validators.max(10000)
    ]],
    resizeHeight: [resizeHeightDefault, [
      Validators.required,
      Validators.min(1),
      Validators.max(10000)
    ]]
  });
  resizeWidth: number;
  resizeHeight: number;

  constructor(private ngxPicaService: NgxPicaService,
    private fb: FormBuilder,
    private mediaItemService: MediaItemService,
    private albumService: AlbumService,
    private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  processFiles(files: FileList): void {
    if (files.length > 0) {
      this.filesCount = files.length;
      this.emptyArrays();
      this.getParamsResize();
      this.getMediaItems(files);
    }
  }

  private emptyArrays() : void {
    this.mediaItems = [];
    this.mediaItemsForGrouping = [];
    this.mediaItemsGroups = [];
    this.filesLoaded = false;
    this.groupsCreated = false;
    this.uploadingStatus = UploadingStatus.None;
  }

  getMediaItems(fileList): void {
    this.ngxPicaService.resizeImages(fileList, this.resizeWidth, this.resizeHeight, this.picaOptions).subscribe((file) => {
      this.readFileBytes(file);
    }, (err: NgxPicaErrorInterface) => {
        throw err.err;
    }, () => {
      this.filesLoaded = true;
    });
  }

  readFileBytes(file: File): void {
    let readerBytes: FileReader = new FileReader();
    readerBytes.addEventListener('load', (event: any) => {
      this.readFileUrl(readerBytes, file);
    }, false);
    readerBytes.readAsArrayBuffer(file);
  }

  readFileUrl(readerBytes: FileReader, file: File): void {
    let readerUrl: FileReader = new FileReader();
    readerUrl.addEventListener('load', (event: any) => {
      this.createMediaItem(file, readerBytes, readerUrl);
    }, false);
    readerUrl.readAsDataURL(file);
  }

  createMediaItem(file: File, readerBytes: FileReader, readerUrl: FileReader): void {
    this.mediaItems.push(new MediaItem(file.name, moment(file.name, "YYYYMMDD HHmmss"), readerBytes.result, readerUrl.result));
  }

  createGroups(): void {
    this.emptyArraysExceptMediaItems();
    this.createMediaItemsForGrouping();
    this.calculateTimeDiff();
    this.getParamsTimeDiffs();
    this.identifyDuplicates();
    this.identifyGroups();
    this.groupsCreated = true;
  }

  createMediaItemsForGrouping(): void {
    this.mediaItems.sort((a, b) => {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    this.mediaItems.forEach((item, i) => {
      this.mediaItemsForGrouping.push(new MediaItemForGrouping(item, i + 1, 0));
    });
  }

  calculateTimeDiff(): void {
    this.mediaItemsForGrouping.forEach((item) => {
      if (item.seqNo === 1) {
        item.timeDiff = 0;
      } else {
        const prevItem = this.mediaItemsForGrouping.find((s) => s.seqNo === (item.seqNo - 1));
        item.timeDiff = item.mediaItem.dateTime.diff(prevItem.mediaItem.dateTime, 'second');
      }
    });
  }

  identifyDuplicates(): void {
    this.mediaItemsForGrouping.forEach((item) => {
      if (item.seqNo > 1) {
        if (item.timeDiff <= this.timeDiffDuplicate) item.isDuplicate = YesNo.Y;
      }
    });
  }

  identifyGroups(): void {
    let group: IMediaItemsGroup;
    let id = 1;
    this.mediaItemsForGrouping.forEach((item, i) => {
      let groupName: string = "(new) " + item.mediaItem.dateTime.format('YYYY-MM-DD') + " místo (" + item.mediaItem.dateTime.format('dddd H') + 'h)';
      groupName = this.translateWeekdayNamesToCzech(groupName);
      // if the first file in the sequence, create a new group
      if (i === 0) {
        group = new MediaItemsGroup(id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
        id++;
      // if not the first file
      } else {
        // if a new group is identified, add current group and create a new group
        if (item.timeDiff > this.timeDiffGroup) {
          this.mediaItemsGroups.push(group);
          group = new MediaItemsGroup(id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
          id++;
        // if existing group, add the file to the group and update end time
        } else {
          group.mediaItemsForGrouping.push(item);
          group.endTime = item.mediaItem.dateTime;
        }
      }
      // if the last file in the sequence, add current group
      if ((i + 1) === this.mediaItemsForGrouping.length) {
        this.mediaItemsGroups.push(group);
      }
    });
  }

  getUniqueMediaItemsCount(): number {
    let uniqueItemsCount = 0;
    this.mediaItemsGroups.forEach((group) => {
      uniqueItemsCount += group.getCountWithoutDuplicates();
    })
    return uniqueItemsCount;
  }

  getDaysDiffFromToday(groupDate: moment.Moment, todayDay = moment(moment().format('YYYY-MM-DD'))): number {
    const groupDateDay = moment(groupDate.format('YYYY-MM-DD'));
    return groupDateDay.diff(todayDay, 'days');
  }

  updateGroupName(gr: IMediaItemsGroup, newName: string) {
    this.mediaItemsGroups.forEach((group) => {
      if (group.id === gr.id) {
        group.name = newName;
      }
    });
  }

  changeIsDuplicate(gr: IMediaItemsGroup, item: IMediaItemForGrouping) {
    this.mediaItemsGroups.forEach((group) => {
      if (group.id === gr.id) {
        group.mediaItemsForGrouping.forEach((mediaItemForGrouping) => {
          if (mediaItemForGrouping.seqNo === item.seqNo) {
            item.isDuplicate = (item.isDuplicate === YesNo.Y) ? YesNo.N : YesNo.Y;
          }
        });
      }
    });
  }

  private translateWeekdayNamesToCzech(name: string): string {
    return name.replace("Monday", "pondělí")
      .replace("Tuesday", "úterý")
      .replace("Wednesday", "středa")
      .replace("Thursday", "čtvrtek")
      .replace("Friday", "pátek")
      .replace("Saturday", "sobota")
      .replace("Sunday", "neděle");
  }

  // async/await + for...of loop to ensure sequential API calls
  // not working with arrays' forEach() method
  async createAlbumsAndMedia(): Promise<void> {
    this.uploadingStatus = UploadingStatus.InProgress;
    for (const group of this.mediaItemsGroups) {
      if (group.albumId == null) {
        await this.albumService.albums(group, this.user.authToken).toPromise().then(async (album) => {
          group.albumId = album.id;
          await this.createMedia(group);
        })
          .catch(() => this.uploadingStatus = UploadingStatus.Fail);
      } else {
        await this.createMedia(group);
      }
      // when API call error, then brak the loop
      if (this.uploadingStatus != UploadingStatus.InProgress) break;
    }
    this.uploadingStatus = (this.getUniqueMediaItemsCount() == this.getUploadedCount()) ? UploadingStatus.Success : UploadingStatus.Fail;
  }

  async createMedia(group: IMediaItemsGroup): Promise<void> {
    for (const item of group.mediaItemsForGrouping) {
      if (item.isDuplicate === YesNo.N && !item.mediaItem.uploadSuccess) {
        await this.mediaItemService.uploads(item.mediaItem, this.user.authToken).toPromise().then(async (uploadToken: string) => {
          await this.mediaItemService.batchCreate(item.mediaItem, uploadToken, this.user.authToken, group.albumId).toPromise().then(() => item.mediaItem.uploadSuccess = true)
            .catch(() => this.uploadingStatus = UploadingStatus.Fail);
        })
          .catch(() => this.uploadingStatus = UploadingStatus.Fail);
      }
    }
  }

  removeGroup(gr: IMediaItemsGroup): void {
    this.mediaItemsGroups.splice(this.mediaItemsGroups.indexOf(gr), 1);
  }

  changeShowGroup(gr: IMediaItemsGroup): void {
    this.mediaItemsGroups.forEach((group) => {
      if (group.id === gr.id) {
        group.show = !group.show;
      }
    });
  }

  changeLargePreview(gr: IMediaItemsGroup): void {
    this.mediaItemsGroups.forEach((group) => {
      if (group.id === gr.id) {
        group.largePreview = !group.largePreview;
      }
    });
  }

  changeShowOnlyDuplicates(gr: IMediaItemsGroup): void {
    this.mediaItemsGroups.forEach((group) => {
      if (group.id === gr.id) {
        group.showOnlyDuplicates = !group.showOnlyDuplicates;
      }
    });
  }

  getUploadedCount(): number {
    let uploadedCount = 0;
    this.mediaItemsGroups.forEach((group) => {
      uploadedCount += group.getUploadedCount();
    })
    return uploadedCount;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID, googleLoginOptions);
  }

  signOut(): void {
    this.authService.signOut();
  }

  getParamsTimeDiffs(): void {
    this.timeDiffDuplicate = this.paramsForm.get(['timeDiffDuplicate']).value;
    this.timeDiffGroup = this.paramsForm.get(['timeDiffGroup']).value;
  }

  getParamsResize(): void {
    this.resizeWidth = this.paramsForm.get(['resizeWidth']).value;
    this.resizeHeight = this.paramsForm.get(['resizeHeight']).value;
  }

  private emptyArraysExceptMediaItems() : void {
    this.mediaItemsForGrouping = [];
    this.mediaItemsGroups = [];
    this.groupsCreated = false;
    this.uploadingStatus = UploadingStatus.None;
  }

}

export interface IMediaItemsGroup {
  id: number;
  startTime: moment.Moment;
  endTime: moment.Moment;
  mediaItemsForGrouping: IMediaItemForGrouping[];
  name: string;
  albumId?: string;
  show: boolean;
  largePreview: boolean;
  showOnlyDuplicates: boolean;

  getCountWithoutDuplicates(): number;
  getUploadedCount(): number;
}

export class MediaItemsGroup implements IMediaItemsGroup {
  id: number;
  startTime: moment.Moment;
  endTime: moment.Moment;
  mediaItemsForGrouping: IMediaItemForGrouping[];
  name: string;
  albumId?: string;
  show: boolean;
  largePreview: boolean;
  showOnlyDuplicates: boolean;

  constructor(id: number, startTime: moment.Moment, endTime: moment.Moment, mediaItemsForGrouping: IMediaItemForGrouping[], name: string) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.mediaItemsForGrouping = mediaItemsForGrouping;
    this.name = name;
    this.show = false;
    this.largePreview = false;
    this.showOnlyDuplicates = false;
  }

  getCountWithoutDuplicates(): number {
    return this.mediaItemsForGrouping.filter((item) => item.isDuplicate === YesNo.N).length;
  }

  getUploadedCount() : number {
    return this.mediaItemsForGrouping.filter((item) => item.mediaItem.uploadSuccess).length;
  }
}

export enum UploadingStatus {
  None = 'None',
  InProgress = 'InProgress',
  Success = 'Success',
  Fail = 'Fail'
}
