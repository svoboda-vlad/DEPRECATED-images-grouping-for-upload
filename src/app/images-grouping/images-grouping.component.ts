import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NgxPicaService, NgxPicaErrorInterface } from '@digitalascetic/ngx-pica';
import { NgxPicaResizeOptionsInterface } from '@digitalascetic/ngx-pica/lib/ngx-pica-resize-options.interface';

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

  constructor(private ngxPicaService: NgxPicaService) { }

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
    this.totalFilesCount = 0;

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
              this.totalFilesCount = this.getTotalFilesCount(this.filesGroups);
            }
            i++;
        }, false);

        reader.readAsDataURL(file);

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
    sequence.forEach((seq,i) => {
      // if the first file in the sequence, create a new group
      if (i === 0) {
        group = new FilesGroup(seq.file.dateTime, seq.file.dateTime,[seq]);
      // if not the first file
      } else {
        // if a new group is identified, add current group and create a new group
        if (seq.timeDiff > this.timeDiffGroup) {
          groups.push(group);
          group = new FilesGroup(seq.file.dateTime, seq.file.dateTime,[seq]);
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

  getTotalFilesCount(groups: IFilesGroup[]): number {
    let count: number = 0;
    groups.forEach((group) => {
      count += group.sequence.length;
    })
    return count;
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
  startTime: moment.Moment;
  endTime: moment.Moment;
  sequence: IFilesSequence[];

  getCountWithoutDuplicates(): number;
}

export class FilesGroup implements IFilesGroup {
  constructor(public startTime: moment.Moment, public endTime: moment.Moment, public sequence: IFilesSequence[]) {}

  getCountWithoutDuplicates(): number {
    return this.sequence.filter((seq) => seq.isDuplicate === YesNo.N).length;
  }
}
