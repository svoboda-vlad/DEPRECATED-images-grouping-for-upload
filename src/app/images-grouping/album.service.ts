import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { accessToken, IMediaItemsGroup } from './images-grouping.component';
import { Observable } from 'rxjs';

const urlAlbums = 'https://photoslibrary.googleapis.com/v1/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  albums(group: IMediaItemsGroup): Observable<IAlbum> {
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

    return this.http.post<IAlbum>(urlAlbums, body, httpOptions);
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
