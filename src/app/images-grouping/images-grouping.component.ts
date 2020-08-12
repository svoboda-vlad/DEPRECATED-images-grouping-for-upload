import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NgxPicaService, NgxPicaErrorInterface } from '@digitalascetic/ngx-pica';
import { NgxPicaResizeOptionsInterface } from '@digitalascetic/ngx-pica/lib/ngx-pica-resize-options.interface';
import { FormBuilder } from '@angular/forms';
import { MediaItemService, IMediaItemForGrouping, YesNo, MediaItemForGrouping, IMediaItem, MediaItem } from './media-item.service';
import { AlbumService } from './album.service';

@Component({
  selector: 'igfu-images-grouping',
  templateUrl: './images-grouping.component.html',
  styleUrls: ['./images-grouping.component.scss']
})
export class ImagesGroupingComponent implements OnInit {

  mediaItems: IMediaItem[] = [];
  mediaItemsForGrouping: IMediaItemForGrouping[] = [];
  timeDiffDuplicate = 10;
  mediaItemsGroups: IMediaItemsGroup[] = [];
  timeDiffGroup = 3600;
  uploadToken: string;
  uploadForm = this.fb.group({
    accessToken: ['']
  });

  constructor(private ngxPicaService: NgxPicaService,
    private fb: FormBuilder,
    private mediaItemService: MediaItemService,
    private albumService: AlbumService) { }

  ngOnInit(): void {

  }

  processFiles(files: FileList): void {
    if(files.length > 0) {
      this.getMediaItems(files);
    }
  }

  getMediaItems(fileList) {
    this.mediaItems = [];
    this.mediaItemsForGrouping = [];
    this.mediaItemsGroups = [];

    const options: NgxPicaResizeOptionsInterface = {
      exifOptions: {
        forceExifOrientation: true
      },
      aspectRatio: {
        keepAspectRatio: true
      }
    };

    let i = 0;
    this.ngxPicaService.resizeImages(fileList, 800, 800, options)
    .subscribe((file) => {
        let readerBytes: FileReader = new FileReader();

        readerBytes.addEventListener('load', (event: any) => {
          let readerUrl: FileReader = new FileReader();

          readerUrl.addEventListener('load', (event: any) => {
            this.mediaItems.push(new MediaItem(file.name, moment(file.name, "YYYYMMDD HHmmss"), readerBytes.result, readerUrl.result));
            if((i + 1) === fileList.length) {
              this.mediaItemsForGrouping = this.getMediaItemsForGrouping(this.mediaItems);
              this.mediaItemsGroups = this.identifyGroups(this.mediaItemsForGrouping);
            }
            i++;
        }, false);
        readerUrl.readAsDataURL(file);
      });

        readerBytes.readAsArrayBuffer(file);

    }, (err: NgxPicaErrorInterface) => {
        throw err.err;
    });
  }

  getMediaItemsForGrouping(items: IMediaItem[]): IMediaItemForGrouping[] {
    let itemsGrouping: IMediaItemForGrouping[] = [];
    items.sort((a, b) => {
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
    items.forEach((item, i) => {
      itemsGrouping.push(new MediaItemForGrouping(item, i + 1, 0));
    });
    itemsGrouping = this.calculateTimeDiff(itemsGrouping);
    itemsGrouping = this.identifyDuplicates(itemsGrouping);
    return itemsGrouping;
  }

  calculateTimeDiff(itemsGrouping: IMediaItemForGrouping[]): IMediaItemForGrouping[] {
    itemsGrouping.forEach((item) => {
      if(item.seqNo === 1) {
        item.timeDiff = 0;
      } else {
        const prevItem = itemsGrouping.find((s) => s.seqNo === (item.seqNo - 1));
        item.timeDiff = item.mediaItem.dateTime.diff(prevItem.mediaItem.dateTime, 'second');
      }
    });
    return itemsGrouping;
  }

  identifyDuplicates(itemsGrouping: IMediaItemForGrouping[]): IMediaItemForGrouping[] {
    itemsGrouping.forEach((item) => {
      if(item.seqNo > 1) {
        if(item.timeDiff <= this.timeDiffDuplicate) item.isDuplicate = YesNo.Y;
      }
    });
    return itemsGrouping;
  }

  identifyGroups(itemsGrouping: IMediaItemForGrouping[]): IMediaItemsGroup[] {
    const groups: IMediaItemsGroup[] = [];
    let group: IMediaItemsGroup;
    let id = 1;
    itemsGrouping.forEach((item, i) => {
      let groupName: string = "(nenasdíleno) " + item.mediaItem.dateTime.format('YYYY-MM-DD') + " místo (" + item.mediaItem.dateTime.format('dddd H') + 'h)';
      groupName = this.translateWeekdayNamesToCzech(groupName);
      // if the first file in the sequence, create a new group
      if (i === 0) {
        group = new MediaItemsGroup(id, item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
        id++;
      // if not the first file
      } else {
        // if a new group is identified, add current group and create a new group
        if (item.timeDiff > this.timeDiffGroup) {
          groups.push(group);
          group = new MediaItemsGroup(id,item.mediaItem.dateTime, item.mediaItem.dateTime, [item], groupName);
          id++;
        // if existing group, add the file to the group and update end time
        } else {
          group.mediaItemsForGrouping.push(item);
          group.endTime = item.mediaItem.dateTime;
        }
      }
      // if the last file in the sequence, add current group
      if ((i + 1) === itemsGrouping.length) {
        groups.push(group);
      }
    });
    return groups;
  }

  getUniqueMediaItemsCount(): number {
    let uniqueItemsCount = 0;
    this.mediaItemsGroups.forEach((group) => {
      uniqueItemsCount += group.getCountWithoutDuplicates();
    })
    return uniqueItemsCount;
  }

  getDaysDiffFromToday(groupDate: moment.Moment): number {
    const todayDay = moment(moment().format('YYYY-MM-DD'));
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

  translateWeekdayNamesToCzech(name: string) : string {
    return name.replace("Monday","pondělí")
    .replace("Tuesday","úterý")
    .replace("Wednesday","středa")
    .replace("Thursday","čtvrtek")
    .replace("Friday","pátek")
    .replace("Saturday","sobota")
    .replace("Sunday","neděle");
  }

  createMedia(): void {
    // converted to async/await promises to ensure sequential upload
    this.mediaItemsGroups.forEach((group) => {
      group.mediaItemsForGrouping.forEach((item) => {
        if (item.isDuplicate === YesNo.N) {
          this.mediaItemService.uploads(item.mediaItem, this.getAccessToken()).then((uploadToken) => {
            this.mediaItemService.batchCreate(item.mediaItem, uploadToken, this.getAccessToken(), group.albumId).then(() => item.mediaItem.uploadSuccess = true);
          });
        }
      })
    });
  }

  createAlbums(): void {
    this.mediaItemsGroups.forEach((group) => {
      this.albumService.albums(group, this.getAccessToken()).subscribe((album) => {
        group.albumId = album.id;
      });
    });
  }

  getAccessToken(): any {
    return this.uploadForm.get(['accessToken']).value;
  }

}

export interface IMediaItemsGroup {
  id: number;
  startTime: moment.Moment;
  endTime: moment.Moment;
  mediaItemsForGrouping: IMediaItemForGrouping[];
  name: string;
  albumId?: string;

  getCountWithoutDuplicates(): number;
  getUploadedCount() : number;
}

export class MediaItemsGroup implements IMediaItemsGroup {
  constructor(public id: number, public startTime: moment.Moment, public endTime: moment.Moment, public mediaItemsForGrouping: IMediaItemForGrouping[], public name: string, public albumId?: string) {}

  getCountWithoutDuplicates(): number {
    return this.mediaItemsForGrouping.filter((item) => item.isDuplicate === YesNo.N).length;
  }

  getUploadedCount() : number {
    return this.mediaItemsForGrouping.filter((item) => item.mediaItem.uploadSuccess).length;
  }
}
