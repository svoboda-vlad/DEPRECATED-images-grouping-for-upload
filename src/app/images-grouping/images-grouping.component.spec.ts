import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as moment from 'moment';

import { ImagesGroupingComponent, MediaItemsGroup } from './images-grouping.component';
import { of } from 'rxjs';
import { NgxPicaService } from '@digitalascetic/ngx-pica';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItem, MediaItemForGrouping, YesNo, MediaItemService } from './media-item.service';
import { AlbumService, Album } from './album.service';

describe('ImagesGroupingComponent', () => {
  let component: ImagesGroupingComponent;
  let fixture: ComponentFixture<ImagesGroupingComponent>;
  let resizeImagesSpy: jasmine.Spy;
  let file: File;
  let uploadToken: string;
  let uploadsSpy: jasmine.Spy;
  let batchCreateSpy: jasmine.Spy;
  let albumsSpy: jasmine.Spy;

  beforeEach(async(() => {
    const blob = new Blob(['123'], { type: 'text/html' });
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    file = <File>blob;
    const picaServiceSpy = jasmine.createSpyObj('NgxPicaService', ['resizeImages']);
    resizeImagesSpy = picaServiceSpy.resizeImages.and.returnValue(of(file));
    uploadToken = 'ABC';
    const mediaServiceSpy = jasmine.createSpyObj('MediaItemService', ['uploads', 'batchCreate']);
    uploadsSpy = mediaServiceSpy.uploads.and.returnValue(of(uploadToken).toPromise());
    batchCreateSpy = mediaServiceSpy.batchCreate.and.returnValue(of().toPromise());
    const albumServiceSpy = jasmine.createSpyObj('AlbumService', ['albums']);
    albumsSpy = albumServiceSpy.albums.and.returnValue(of(new Album('')));

    TestBed.configureTestingModule({
      declarations: [ ImagesGroupingComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule ],
      providers: [{ provide: NgxPicaService, useValue: picaServiceSpy },
      { provide: MediaItemService, useValue: mediaServiceSpy },
      { provide: AlbumService, useValue: albumServiceSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call resizeImages with correct arguments', () => {
    const fileList = {
      0: file,
      1: file,
      length: 2,
      item: (index: number) => file
    };

    component.getMediaItems(fileList);
    expect(resizeImagesSpy.calls.count()).toEqual(1);
    expect(resizeImagesSpy.calls.argsFor(0)).toEqual([fileList, component.resizeWidth, component.resizeHeight, component.picaOptions]);

  });

  it('should call readAsArrayBuffer method of FileReader', () => {
    const readAsArrayBufferSpy = spyOn(FileReader.prototype, 'readAsArrayBuffer');
    component.readFileBytes(file);
    expect(readAsArrayBufferSpy).toHaveBeenCalledWith(file);
  });

  it('should call readAsDataURL method of FileReader', () => {
    const readAsDataURLSpy = spyOn(FileReader.prototype, 'readAsDataURL');
    component.readFileUrl(new FileReader(), file);
    expect(readAsDataURLSpy).toHaveBeenCalledWith(file);
  });

  it('should create new media item', () => {
    component.createMediaItem(file, new FileReader(), new FileReader());
    expect(component.mediaItems[0].name).toEqual(file.name);
  });

  it('should create media items for grouping with sequence numbers',() => {
    component.mediaItems = [];
    component.mediaItemsForGrouping = [];
    const mediaItem1 = new MediaItem('name B',moment(),'123','321');
    const mediaItem2 = new MediaItem('name A',moment(),'456','654');
    component.mediaItems.push(mediaItem1);
    component.mediaItems.push(mediaItem2);
    component.createMediaItemsForGrouping();
    expect(component.mediaItemsForGrouping.length).toEqual(2);
    expect(component.mediaItemsForGrouping[0].mediaItem).toEqual(mediaItem2);
    expect(component.mediaItemsForGrouping[1].mediaItem).toEqual(mediaItem1);
  });

  it('should calculate correct time differences between files', () => {
    component.mediaItemsForGrouping = [];
    const dateString = '2020-08-19';
    const timeDiffSec = 5;
    const dateTime1 = moment(dateString);
    const dateTime2 = moment(dateString).add(timeDiffSec,'seconds');
    const mediaItemForGrouping1 = new MediaItemForGrouping(new MediaItem('name A',dateTime1,'123','321'),1,0);
    const mediaItemForGrouping2 = new MediaItemForGrouping(new MediaItem('name B',dateTime2,'456','654'),2,0);
    component.mediaItemsForGrouping.push(mediaItemForGrouping1);
    component.mediaItemsForGrouping.push(mediaItemForGrouping2);
    component.calculateTimeDiff();
    expect(component.mediaItemsForGrouping[0].timeDiff).toEqual(0);
    expect(component.mediaItemsForGrouping[1].timeDiff).toEqual(timeDiffSec);
  });

  it('should correctly identify duplicate', () => {
    component.mediaItemsForGrouping = [];
    const dateString = moment().format('YYYY-MM-DD');
    const dateTime1 = moment(dateString);
    const dateTime2 = moment(dateString).add(component.timeDiffDuplicate,'seconds');
    const mediaItemForGrouping1 = new MediaItemForGrouping(new MediaItem('name A',dateTime1,'123','321'),1,0);
    const mediaItemForGrouping2 = new MediaItemForGrouping(new MediaItem('name B',dateTime2,'456','654'),2,0);
    component.mediaItemsForGrouping.push(mediaItemForGrouping1);
    component.mediaItemsForGrouping.push(mediaItemForGrouping2);
    component.identifyDuplicates();
    expect(component.mediaItemsForGrouping[0].isDuplicate).toEqual(YesNo.N);
    expect(component.mediaItemsForGrouping[1].isDuplicate).toEqual(YesNo.Y);
  });

  it('should correctly identify groups', () => {
    component.mediaItemsForGrouping = [];
    const mediaItemForGrouping1 = new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0);
    const mediaItemForGrouping2 = new MediaItemForGrouping(new MediaItem('name B',moment(),'456','654'),2,component.timeDiffGroup + 1);
    component.mediaItemsForGrouping.push(mediaItemForGrouping1);
    component.mediaItemsForGrouping.push(mediaItemForGrouping2);
    component.identifyGroups();
    expect(component.mediaItemsGroups.length).toEqual(2);
    expect(component.mediaItemsGroups[0].mediaItemsForGrouping.length).toEqual(1);
    expect(component.mediaItemsGroups[1].mediaItemsForGrouping.length).toEqual(1);
    expect(component.mediaItemsGroups[0].mediaItemsForGrouping[0]).toEqual(mediaItemForGrouping1);
    expect(component.mediaItemsGroups[1].mediaItemsForGrouping[0]).toEqual(mediaItemForGrouping2);
  });

  it('should return correct unique items count', () => {
    component.mediaItemsGroups = [];
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(),moment(),[
        new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0,YesNo.N),
        new MediaItemForGrouping(new MediaItem('name B',moment(),'456','654'),2,0,YesNo.Y)
      ],'group name')
    );
    expect(component.getUniqueMediaItemsCount()).toEqual(1);
  });

  it('should return correct day difference', () => {
    const dateString = moment().format('YYYY-MM-DD');
    const daysDiff = -5;
    const groupDate = moment(dateString).add(daysDiff,'days');
    const todayDate = moment(dateString);
    expect(component.getDaysDiffFromToday(groupDate, todayDate)).toEqual(daysDiff);
  });

  it('should update group name', () => {
    component.mediaItemsGroups = [];
    const newGroupName = 'name new';
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(),moment(),[],'group name')
    );
    component.updateGroupName(component.mediaItemsGroups[0],newGroupName);
    expect(component.mediaItemsGroups[0].name).toEqual(newGroupName);
  });

  it('should change duplicate', () => {
    component.mediaItemsGroups = [];
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(),moment(),[
        new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0,YesNo.N)
      ],'group name')
    );
    component.changeIsDuplicate(component.mediaItemsGroups[0],component.mediaItemsGroups[0].mediaItemsForGrouping[0]);
    expect(component.mediaItemsGroups[0].mediaItemsForGrouping[0].isDuplicate).toEqual(YesNo.Y);
  });

  it('should call uploads api', () => {
    component.mediaItemsGroups = [];
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(),moment(),[
        new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0,YesNo.N)
      ],'group name')
    );
    component.accessToken = '123';
    component.createMedia();
    expect(uploadsSpy.calls.count()).toEqual(1);
    expect(uploadsSpy.calls.argsFor(0)).toEqual([component.mediaItemsGroups[0].mediaItemsForGrouping[0].mediaItem, component.accessToken]);
  });

  it('should call batchCreate api', () => {
    component.mediaItemsGroups = [];
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(),moment(),[
        new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0,YesNo.N)
      ],'group name')
    );
    component.accessToken = '123';
    component.callCreateBatch(component.mediaItemsGroups[0].mediaItemsForGrouping[0].mediaItem,uploadToken, '').then(() => {
      expect(batchCreateSpy.calls.count()).toEqual(1);
      expect(batchCreateSpy.calls.argsFor(0)).toEqual([component.mediaItemsGroups[0].mediaItemsForGrouping[0].mediaItem, uploadToken, '']);
    });
  });

  it('should call albums api', () => {
    component.mediaItemsGroups = [];
    const albumId = 'album 123';
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(),moment(),[
        new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0,YesNo.N)
      ],'group name', albumId)
    );
    component.accessToken = '123';
    component.createAlbums();
    expect(albumsSpy.calls.count()).toEqual(1);
    expect(albumsSpy.calls.argsFor(0)).toEqual([component.mediaItemsGroups[0], component.accessToken]);
  });

});
