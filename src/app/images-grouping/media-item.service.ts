import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { accessToken } from './images-grouping.component';
import { Observable } from 'rxjs';

const urlUploads = 'https://photoslibrary.googleapis.com/v1/uploads';
const urlBatchCreate = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  constructor(private http: HttpClient) { }

  uploads(mediaItem: IMediaItem): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-type': 'application/octet-stream',
        'X-Goog-Upload-Content-Type': 'mime-type',
        'X-Goog-Upload-Protocol': 'raw'
      }),
      observe: "body" as const,
      responseType: "text" as const
    };
    return this.http.post(urlUploads, mediaItem.contentBytes, httpOptions);
  }

  batchCreate(mediaItem: IMediaItem, uploadToken: string, albumId?: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-type': 'application/json'
      })
    };
    const body = {
      "newMediaItems": [
        {
          "description": mediaItem.name,
          "simpleMediaItem": {
            "fileName": mediaItem.name,
            "uploadToken": uploadToken
          }
        }
      ]
    }

    const body2 = {
      "albumId": albumId,
      "newMediaItems": [
        {
          "description": "item-description",
          "simpleMediaItem": {
            "fileName": "filename",
            "uploadToken": "upload-token"
          }
        }
      ],
      "albumPosition": {
        "position": "after-media-item",
        "relativeMediaItemId": "media-item-id"
      }
    }

    return this.http.post(urlBatchCreate, body, httpOptions);
  }

}

export interface IMediaItem {
  name: string;
  dateTime: moment.Moment;
  contentBytes: string | ArrayBuffer;
  contentUrl: string | ArrayBuffer;
}

export class MediaItem implements IMediaItem {
  constructor(public name: string, public dateTime: moment.Moment, public contentBytes: string | ArrayBuffer, public contentUrl: string | ArrayBuffer) {}
}

export interface IMediaItemForGrouping {
  mediaItem: IMediaItem;
  seqNo: number;
  timeDiff: number;
  isDuplicate?: YesNo;
}

export class MediaItemForGrouping implements IMediaItemForGrouping {
  constructor(public mediaItem: IMediaItem, public seqNo: number, public timeDiff: number, public isDuplicate: YesNo = YesNo.N) {}
}

export const enum YesNo {
  Y = 'Y',
  N = 'N'
}
