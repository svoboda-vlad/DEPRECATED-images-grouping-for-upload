import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'igfu-images-grouping',
  templateUrl: './images-grouping.component.html',
  styleUrls: ['./images-grouping.component.scss']
})
export class ImagesGroupingComponent implements OnInit {

  fileNames: string[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  processFiles(files: FileList): void {
    if(files.length > 0) {
      this.fileNames = this.getFileNames(files);
    }
  }

  getFileNames(files: FileList): string[] {
    let fileNames: string[] = [];
    for (let i = 0; i < files.length; i++) {
      fileNames[i] = files.item(i).name;
    }
    return fileNames;
  }

}
