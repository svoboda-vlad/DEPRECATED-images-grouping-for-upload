import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'igfu-images-grouping',
  templateUrl: './images-grouping.component.html',
  styleUrls: ['./images-grouping.component.scss']
})
export class ImagesGroupingComponent implements OnInit {

  files: IFile[] = [];
  filesSequence: IFilesSequence[] = [];
  timeDiffDuplicate = 10;

  constructor() { }

  ngOnInit(): void {

  }

  processFiles(files: FileList): void {
    if(files.length > 0) {
      this.files = this.getFiles(files);
      this.filesSequence = this.getFilesSequence(this.files);
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

  getFilesSequence(files: IFile[]): IFilesSequence[] {
    let sequence: IFilesSequence[] = [];
    files.sort();
    let i = 1;
    files.forEach((file) => {
      sequence.push(new FilesSequence(file, i++, 0));
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

}

export interface IFile {
  name: string;
  dateTime: moment.Moment;
}

export class File implements IFile {
  constructor(public name: string, public dateTime: moment.Moment) {}
}

export interface IFilesSequence {
  file: IFile;
  seqNo: number;
  timeDiff: number;
  isDuplicate?: YesNo;
}

export class FilesSequence {
  constructor(public file: IFile, public seqNo: number, public timeDiff: number, public isDuplicate: YesNo = YesNo.N) {}
}

export const enum YesNo {
  Y = 'Y',
  N = 'N'
}
