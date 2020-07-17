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
  filesGroups: IFilesGroup[] = [];
  timeDiffGroup = 3600;
  totalFilesCount = 0;

  constructor() { }

  ngOnInit(): void {

  }

  processFiles(files: FileList): void {
    if(files.length > 0) {
      this.files = this.getFiles(files);
      this.filesSequence = this.getFilesSequence(this.files);
      this.filesGroups = this.identifyGroups(this.removeDuplicates(this.filesSequence));
      this.totalFilesCount = this.getTotalFilesCount(this.filesGroups);
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

  removeDuplicates(sequence: IFilesSequence[]): IFilesSequence[] {
    return sequence.filter((seq) => seq.isDuplicate === YesNo.N);
  }

  identifyGroups(sequence: IFilesSequence[]): IFilesGroup[] {
    const groups: IFilesGroup[] = [];
    let group: IFilesGroup;
    sequence.forEach((seq,i) => {
      // if the first file in the sequence, create a new group
      if (i === 0) {
        group = new FilesGroup(seq.file.dateTime, seq.file.dateTime,[seq.file]);
      // if not the first file
      } else {
        // if a new group is identified, add current group and create a new group
        if (seq.timeDiff > this.timeDiffGroup) {
          groups.push(group);
          group = new FilesGroup(seq.file.dateTime, seq.file.dateTime,[seq.file]);
        // if existing group, add the file to the group and update end time
        } else {
          group.files.push(seq.file);
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

  getTotalFilesCount(groups: IFilesGroup[]): number {
    let count: number = 0;
    groups.forEach((group) => {
      count += group.files.length;
    })
    return count;
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

export class FilesSequence implements IFilesSequence {
  constructor(public file: IFile, public seqNo: number, public timeDiff: number, public isDuplicate: YesNo = YesNo.N) {}
}

export const enum YesNo {
  Y = 'Y',
  N = 'N'
}

export interface IFilesGroup {
  startTime: moment.Moment;
  endTime: moment.Moment;
  files: IFile[];
}

export class FilesGroup implements IFilesGroup {
  constructor(public startTime: moment.Moment, public endTime: moment.Moment, public files: IFile[]) {}
}
