import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { accessToken } from './images-grouping.component';

const urlUploads = 'https://photoslibrary.googleapis.com/v1/uploads';
const urlMediaItems = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  createMedia(filesSequence: IFilesSequence[]): void {
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

    filesSequence.forEach((seq) => {
      this.http.post(urlUploads, seq.file.imageContent, httpOptions).subscribe((uploadToken) => {
        this.uploadFile(seq.file, uploadToken);
      });
    });
  }

  private uploadFile(file: IFile, uploadToken: string): void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + accessToken,
        'Content-type': 'application/json'
      })
    };
    const body = {
      "newMediaItems": [
        {
          "description": file.name,
          "simpleMediaItem": {
            "fileName": file.name,
            "uploadToken": uploadToken
          }
        }
      ]
    }

    this.http.post(urlMediaItems, body, httpOptions).subscribe((res) => {
      console.log(res);
    });
  }

}

export interface IFile {
  name: string;
  dateTime: moment.Moment;
  imageContent: string | ArrayBuffer;
  imageContentUrl: string | ArrayBuffer;
}

export class File implements IFile {
  constructor(public name: string, public dateTime: moment.Moment, public imageContent: string | ArrayBuffer, public imageContentUrl: string | ArrayBuffer) {}
}

export interface IFilesSequence {
  file: IFile;
  seqNo: number;
  timeDiff: number;
  isDuplicate?: YesNo;
}

export class FilesSequence implements IFilesSequence {
  constructor(public file: IFile, public seqNo: number, public timeDiff: number, public isDuplicate: YesNo = YesNo.N) {}
}

export const enum YesNo {
  Y = 'Y',
  N = 'N'
}
