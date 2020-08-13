import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMediaItemsGroup } from './images-grouping.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public albumsUrl = 'https://photoslibrary.googleapis.com/v1/albums';

  constructor(private http: HttpClient) { }

  albums(group: IMediaItemsGroup, accessToken: string): Observable<IAlbum> {
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

    return this.http.post<IAlbum>(this.albumsUrl, body, httpOptions);
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
