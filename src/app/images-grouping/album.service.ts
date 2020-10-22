import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IMediaItemsGroup } from './images-grouping.component';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public albumsUrl = 'https://photoslibrary.googleapis.com/v1/albums';

  constructor(private http: HttpClient) { }

  async albums(group: IMediaItemsGroup, accessToken: string): Promise<IAlbum> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-type': 'application/json'
      })
    };
    const album = new Album(group.name);
    const body = {
      "album": album
    }

    return await this.http.post<IAlbum>(this.albumsUrl, body, httpOptions)
    .pipe(catchError(error => this.handleError(error))).toPromise();
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

export interface IAlbum {
  title: string,
  productUrl?: string,
  id?: string,
  isWriteable?: boolean
}

export class Album implements IAlbum {
  constructor(public title: string, public productUrl?: string, public id?: string, public isWriteable?: boolean) {}
}
