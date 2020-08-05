import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { accessToken, IMediaItemsGroup } from './images-grouping.component';

const urlAlbums = 'https://photoslibrary.googleapis.com/v1/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  albums(group: IMediaItemsGroup): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-type': 'application/json'
      })
    };
    const body = {
      "album": {
        "title": group.name
      }
    }

    this.http.post(urlAlbums, body, httpOptions).subscribe((res) => console.log(res));
  }

}
