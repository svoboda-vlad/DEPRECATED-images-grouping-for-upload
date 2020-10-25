import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  public uploadsUrl = 'https://photoslibrary.googleapis.com/v1/uploads';
  public batchCreateUrl = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';

  constructor(private http: HttpClient) { }

  uploads(mediaItem: IMediaItem, accessToken: string): Observable<string> {
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
    return this.http.post(this.uploadsUrl, mediaItem.contentBytes, httpOptions).pipe(catchError(error => this.handleError(error)));
  }

  batchCreate(mediaItem: IMediaItem, uploadToken: string, accessToken: string, albumId?: string): Observable<any> {
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

    return this.http.post(this.batchCreateUrl, body, httpOptions).pipe(catchError(error => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(error);
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
