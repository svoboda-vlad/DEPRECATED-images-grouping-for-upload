import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  public uploadsUrl = 'https://photoslibrary.googleapis.com/v1/uploads';
  public batchCreateUrl = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';

  constructor(private http: HttpClient) { }

  async uploads(mediaItem: IMediaItem, accessToken: string): Promise<string> {
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
    return await this.http.post(this.uploadsUrl, mediaItem.contentBytes, httpOptions).toPromise();
  }

  async batchCreate(mediaItem: IMediaItem, uploadToken: string, accessToken: string, albumId?: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-type': 'application/json'
      })
    };

    const body = {
      "albumId": albumId,
      "newMediaItems": [
        {
          "description": "",
          "simpleMediaItem": {
            "fileName": mediaItem.name,
            "uploadToken": uploadToken
          }
        }
      ]
    }

    return await this.http.post(this.batchCreateUrl, body, httpOptions).pipe(catchError(error => this.handleError(error))).toPromise();
  }

  /** Error handler */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side error.
      console.error('An client-side error occurred:', error.error.message);
    } else {
      // The backend error.
      console.error('An backend error occurred:', error.error.message);
      return throwError(error);
    }
    // return a custom error message
    return throwError('Something bad happened; please try again later.');
  }


}

export interface IMediaItem {
  name: string;
  dateTime: moment.Moment;
  contentBytes: string | ArrayBuffer;
  contentUrl: string | ArrayBuffer;
  uploadSuccess?: boolean;
}

export class MediaItem implements IMediaItem {
  uploadSuccess: boolean = false;
  constructor(public name: string, public dateTime: moment.Moment, public contentBytes: string | ArrayBuffer, public contentUrl: string | ArrayBuffer) { }
}

export interface IMediaItemForGrouping {
  mediaItem: IMediaItem;
  seqNo: number;
  timeDiff: number;
  isDuplicate?: YesNo;
}

export class MediaItemForGrouping implements IMediaItemForGrouping {
  constructor(public mediaItem: IMediaItem, public seqNo: number, public timeDiff: number, public isDuplicate: YesNo = YesNo.N) { }
}

export const enum YesNo {
  Y = 'Y',
  N = 'N'
}
