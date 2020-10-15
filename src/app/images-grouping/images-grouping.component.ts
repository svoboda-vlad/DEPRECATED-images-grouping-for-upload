import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NgxPicaService, NgxPicaErrorInterface } from '@digitalascetic/ngx-pica';
import { NgxPicaResizeOptionsInterface } from '@digitalascetic/ngx-pica/lib/ngx-pica-resize-options.interface';
import { FormBuilder } from '@angular/forms';
import { MediaItemService, IMediaItemForGrouping, YesNo, MediaItemForGrouping, IMediaItem, MediaItem } from './media-item.service';
import { AlbumService } from './album.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'igfu-images-grouping',
  templateUrl: './images-grouping.component.html',
  styleUrls: ['./images-grouping.component.scss']
})
export class ImagesGroupingComponent implements OnInit {

  mediaItems: IMediaItem[] = [];
  mediaItemsForGrouping: IMediaItemForGrouping[] = [];
  timeDiffDuplicate = 5;
  mediaItemsGroups: IMediaItemsGroup[] = [];
  timeDiffGroup = 1800;
  uploadToken: string;
  uploadForm = this.fb.group({
    accessToken: ''
  });
  inputFilesForm = this.fb.group({
    inputFiles: ''
  });
  accessToken: string;
  filesLoaded: boolean = false;
  filesCount: number;
  groupsCreated: boolean = false;

  picaOptions: NgxPicaResizeOptionsInterface = {
    exifOptions: {
      forceExifOrientation: true
    },
    aspectRatio: {
      keepAspectRatio: true
    }
  };
  resizeWidth = 1000;
  resizeHeight = 1000;

  constructor(private ngxPicaService: NgxPicaService,
    private fb: FormBuilder,
    private mediaItemService: MediaItemService,
    private albumService: AlbumService) { }

  ngOnInit(): void {
  }

  processFiles(files: FileList): void {
    if(files.length > 0) {
      this.filesCount = files.length;
      this.emptyArrays();
      this.getMediaItems(files);
    }
  }

  private emptyArrays() : void {
    this.mediaItems = [];
    this.mediaItemsForGrouping = [];
    this.mediaItemsGroups = [];
    this.filesLoaded = false;
    this.groupsCreated = false;
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
    this.createMediaItemsForGrouping();
    this.calculateTimeDiff();
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
      if(item.seqNo === 1) {
        item.timeDiff = 0;
      } else {
        const prevItem = this.mediaItemsForGrouping.find((s) => s.seqNo === (item.seqNo - 1));
        item.timeDiff = item.mediaItem.dateTime.diff(prevItem.mediaItem.dateTime, 'second');
      }
    });
  }

  identifyDuplicates(): void {
    this.mediaItemsForGrouping.forEach((item) => {
      if(item.seqNo > 1) {
        if(item.timeDiff <= this.timeDiffDuplicate) item.isDuplicate = YesNo.Y;
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
          group = new MediaItemsGroup(id,item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
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
      if(group.id === gr.id) {
        group.name = newName;
      }
    });
  }

  changeIsDuplicate(gr: IMediaItemsGroup, item: IMediaItemForGrouping) {
    this.mediaItemsGroups.forEach((group) => {
      if(group.id === gr.id) {
        group.mediaItemsForGrouping.forEach((mediaItemForGrouping) => {
          if(mediaItemForGrouping.seqNo === item.seqNo) {
            item.isDuplicate = (item.isDuplicate === YesNo.Y) ? YesNo.N : YesNo.Y;
          }
        });
      }
    });
  }

  private translateWeekdayNamesToCzech(name: string) : string {
    return name.replace("Monday","pondělí")
    .replace("Tuesday","úterý")
    .replace("Wednesday","středa")
    .replace("Thursday","čtvrtek")
    .replace("Friday","pátek")
    .replace("Saturday","sobota")
    .replace("Sunday","neděle");
  }

  createAlbumsAndMedia(): void {
    this.mediaItemsGroups.forEach((group) => {
      if (group.albumId == null) {
        this.albumService.albums(group, this.accessToken).subscribe((album) => {
          group.albumId = album.id;
          this.createMedia(group);
        });
      } else {
        this.createMedia(group);
      }
    });
  }


  createMedia(group: IMediaItemsGroup): void {
    // converted to async/await promises to ensure sequential upload
      group.mediaItemsForGrouping.forEach((item) => {
        if (item.isDuplicate === YesNo.N && !item.mediaItem.uploadSuccess) {
          this.mediaItemService.uploads(item.mediaItem, this.accessToken).pipe(
            switchMap((uploadToken: string) => this.mediaItemService.batchCreate(item.mediaItem, uploadToken, this.accessToken, group.albumId))
            ).subscribe(() => item.mediaItem.uploadSuccess = true);
        }
      });
  }

  saveAccessToken(): any {
    this.accessToken = this.uploadForm.get(['accessToken']).value;
  }

  removeGroup(gr: IMediaItemsGroup): void {
    this.mediaItemsGroups.splice(this.mediaItemsGroups.indexOf(gr),1);
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
  getUploadedCount() : number;
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
