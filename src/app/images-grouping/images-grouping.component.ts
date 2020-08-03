import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NgxPicaService, NgxPicaErrorInterface } from '@digitalascetic/ngx-pica';
import { NgxPicaResizeOptionsInterface } from '@digitalascetic/ngx-pica/lib/ngx-pica-resize-options.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const token = 'ya29.a0AfH6SMCFfC-sL4MEhJnCyrx2G3-P2iR8RY2HJuI_CvEKh9okArUgb4zWjzv1Jfpwp6OXT7UrdyBqnx4e6-RcBTlNLNcBjwGT_gc32AZNyUMXOe0f30VYlrmBqXeUGm8-ECn6X-sUeghcd4LcxDKo8lSCwuVL8UryJmE';

@Component({
  selector: 'igfu-images-grouping',
  templateUrl: './images-grouping.component.html',
  styleUrls: ['./images-grouping.component.scss']
})
export class ImagesGroupingComponent implements OnInit {

  files: IFile[] = [];
  filesSequence: IFilesSequence[] = [];
  timeDiffDuplicate = 10;
  filesGroups: IFilesGroup[] = [];
  timeDiffGroup = 3600;

  constructor(private ngxPicaService: NgxPicaService, private http: HttpClient) { }

  ngOnInit(): void {

  }

  processFiles(files: FileList): void {
    if(files.length > 0) {
      this.getFiles(files);
    }
  }

  getFiles(filesList) {
    this.files = [];
    this.filesSequence = [];
    this.filesGroups = [];

    const options: NgxPicaResizeOptionsInterface = {
      exifOptions: {
        forceExifOrientation: true
      },
      aspectRatio: {
        keepAspectRatio: true
      }
    };

    let i = 0;
    this.ngxPicaService.resizeImages(filesList, 800, 800, options)
    .subscribe((file) => {
        let reader: FileReader = new FileReader();
        reader.addEventListener('load', (event: any) => {
            this.files.push(new File(file.name, moment(file.name, "YYYYMMDD HHmmss"), reader.result));
            if((i + 1) === filesList.length) {
              this.filesSequence = this.getFilesSequence(this.files);
              // this.filesGroups = this.identifyGroups(this.removeDuplicates(this.filesSequence));
              this.filesGroups = this.identifyGroups(this.filesSequence);
            }
            i++;
        }, false);

        reader.readAsArrayBuffer(file);

    }, (err: NgxPicaErrorInterface) => {
        throw err.err;
    });
  }

  getFilesSequence(files: IFile[]): IFilesSequence[] {
    let sequence: IFilesSequence[] = [];
    files.sort((a, b) => {
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
    files.forEach((file, i) => {
      sequence.push(new FilesSequence(file, i + 1, 0));
    });
    sequence = this.calculateTimeDiff(sequence);
    sequence = this.identifyDuplicates(sequence);
    return sequence;
  }

  calculateTimeDiff(sequence: IFilesSequence[]): IFilesSequence[] {
    sequence.forEach((seq) => {
      if(seq.seqNo === 1) {
        seq.timeDiff = 0;
      } else {
        const prevSeq = sequence.find((s) => s.seqNo === (seq.seqNo - 1));
        seq.timeDiff = seq.file.dateTime.diff(prevSeq.file.dateTime, 'second');
      }
    });
    return sequence;
  }

  identifyDuplicates(sequence: IFilesSequence[]): IFilesSequence[] {
    sequence.forEach((seq) => {
      if(seq.seqNo > 1) {
        if(seq.timeDiff <= this.timeDiffDuplicate) seq.isDuplicate = YesNo.Y;
      }
    });
    return sequence;
  }

  removeDuplicates(sequence: IFilesSequence[]): IFilesSequence[] {
    return sequence.filter((seq) => seq.isDuplicate === YesNo.N);
  }

  identifyGroups(sequence: IFilesSequence[]): IFilesGroup[] {
    const groups: IFilesGroup[] = [];
    let group: IFilesGroup;
    let id = 1;
    sequence.forEach((seq, i) => {
      let groupName: string = seq.file.dateTime.format('YYYY-MM-DD dddd HH').concat('h');
      groupName = this.translateWeekdayNamesToCzech(groupName);
      // if the first file in the sequence, create a new group
      if (i === 0) {
        group = new FilesGroup(id, seq.file.dateTime, seq.file.dateTime,[seq], groupName);
        id++;
      // if not the first file
      } else {
        // if a new group is identified, add current group and create a new group
        if (seq.timeDiff > this.timeDiffGroup) {
          groups.push(group);
          group = new FilesGroup(id,seq.file.dateTime, seq.file.dateTime,[seq], groupName);
          id++;
        // if existing group, add the file to the group and update end time
        } else {
          group.sequence.push(seq);
          group.endTime = seq.file.dateTime;
        }
      }
      // if the last file in the sequence, add current group
      if ((i + 1) === sequence.length) {
        groups.push(group);
      }
    });
    return groups;
  }

  getUniqueFilesCount(): number {
    let uniqueFilesCount = 0;
    this.filesGroups.forEach((group) => {
      uniqueFilesCount += group.getCountWithoutDuplicates();
    })
    return uniqueFilesCount;
  }

  getDaysDiffFromToday(groupDate: moment.Moment): number {
    const todayDay = moment(moment().format('YYYY-MM-DD'));
    const groupDateDay = moment(groupDate.format('YYYY-MM-DD'));
    return groupDateDay.diff(todayDay, 'days');
  }

  updateGroupName(gr: IFilesGroup, newName: string) {
    this.filesGroups.forEach((group) => {
      if(group.id === gr.id) {
        group.name = newName;
      }
    });
  }

  changeIsDuplicate(gr: IFilesGroup, seq: IFilesSequence) {
    this.filesGroups.forEach((group) => {
      if(group.id === gr.id) {
        group.sequence.forEach((sequence) => {
          if(sequence.seqNo === seq.seqNo) {
            seq.isDuplicate = (seq.isDuplicate === YesNo.Y) ? YesNo.N : YesNo.Y;
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

  getUploadToken(): void {
    const url = 'https://photoslibrary.googleapis.com/v1/uploads';
    const img = this.files[0];
    console.log(img.name);
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-type': 'application/octet-stream',
        'X-Goog-Upload-Content-Type': 'mime-type',
        'X-Goog-Upload-Protocol': 'raw'
      }),
      observe: "body" as const,
      responseType: "text" as const
    };

    this.http.post(url, img.imageContent, httpOptions).subscribe((res) => {
      console.log(res);
    });
  }

  uploadFile(): void {
    const url = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchCreate';
    const uploadToken = 'CAIS+QIAqD4uLesDxAtNPVZFiYdhLv4xJqdEi9Fiw6bKEGgXs3B/r2RfKSJC0F5TKxNvnQcBTf9DaYFC1V2utrtNxoQjYUVVNR/5JVJvIbXj/PhXnVge+z+IWqYMnuokOiiCmnGXeg3fhKf38B+TAthiz5rsQjoIkovekjwlyYRkMRc/KQ6en/Y4MCIllHs9URP0hT0xpXORFF081a9E0XrTXjUu5S7Hm1KXGyisgQfOEEtLdn6Yh3nwku3crAPcEv+mrvUl7F3yodMkj+qkWtrNOmsOv0W66ewsp8L2cmETHOPj5eweYISo5KUBTc4bTkKZ6q+ufTfo+M7GpCiB8P5Eg/JDrrEi/zNt7Mu/9YVcKlHlqOxOaNTcaqUw28eoLtNUD0nIpsdto+yceAWHUwXz8oeEnc/zeFTqKJUSG/C48Psd8mnCKxo2ectk89b/fJd/9G6VKCWbj4mEQFIZtyOc9gx6sSEaIbKdjbl7CEeU12xHQ2hC0yaDpJ0yvg';
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-type': 'application/json'
      })
    };
    const body = {
      "newMediaItems": [
        {
          "description": "Moje fotka",
          "simpleMediaItem": {
            "fileName": "IMG_20200712_180329.jpg",
            "uploadToken": uploadToken
          }
        }
      ]
    }

    this.http.post(url, body, httpOptions).subscribe((res) => {
      console.log(res);
    });
  }

}

export interface IFile {
  name: string;
  dateTime: moment.Moment;
  imageContent: string | ArrayBuffer;
}

export class File implements IFile {
  constructor(public name: string, public dateTime: moment.Moment, public imageContent: string | ArrayBuffer) {}
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

export interface IFilesGroup {
  id: number;
  startTime: moment.Moment;
  endTime: moment.Moment;
  sequence: IFilesSequence[];
  name: string;

  getCountWithoutDuplicates(): number;
}

export class FilesGroup implements IFilesGroup {
  constructor(public id: number, public startTime: moment.Moment, public endTime: moment.Moment, public sequence: IFilesSequence[], public name: string) {}

  getCountWithoutDuplicates(): number {
    return this.sequence.filter((seq) => seq.isDuplicate === YesNo.N).length;
  }
}
