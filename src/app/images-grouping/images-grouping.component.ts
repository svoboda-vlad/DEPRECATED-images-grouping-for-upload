import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'igfu-images-grouping',
  templateUrl: './images-grouping.component.html',
  styleUrls: ['./images-grouping.component.scss']
})
export class ImagesGroupingComponent implements OnInit {

  files: File[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  processFiles(files: FileList): void {
    if(files.length > 0) {
      this.files = this.getFiles(files);
    }
  }

  getFiles(files: FileList): File[] {
    let filesArray: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      filesArray.push(
        new File(file.name, moment(file.name, "YYYYMMDD HHmmss"))
      );
    }
    return filesArray;
  }

}

export interface IFile {
  name: string;
  dateTime: moment.Moment;
}

export class File implements IFile {
  constructor(public name: string, public dateTime: moment.Moment) {}
}
