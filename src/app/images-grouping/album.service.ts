import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMediaItemsGroup } from './images-grouping.component';
import { Observable, of } from 'rxjs';
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
    .pipe(
      catchError(this.handleError<IAlbum>('albums', null))
      ).toPromise();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
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
