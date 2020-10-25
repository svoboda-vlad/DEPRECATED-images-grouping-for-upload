import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as moment from 'moment';

import { ImagesGroupingComponent, MediaItemsGroup, UploadingStatus } from './images-grouping.component';
import { of, throwError } from 'rxjs';
import { NgxPicaService } from '@digitalascetic/ngx-pica';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItem, MediaItemForGrouping, YesNo, MediaItemService, IMediaItem } from './media-item.service';
import { AlbumService, Album } from './album.service';

describe('ImagesGroupingComponent', () => {
  let component: ImagesGroupingComponent;
  let fixture: ComponentFixture<ImagesGroupingComponent>;
  let resizeImagesSpy: jasmine.Spy;
  let file: File;
  let uploadToken: string;
  let picaServiceSpy: jasmine.SpyObj<any>;
  let mediaServiceSpy: jasmine.SpyObj<any>;
  let albumServiceSpy: jasmine.SpyObj<any>;
  let returnedAlbumId: string;

  beforeEach(async(() => {
    const blob = new Blob(['123'], { type: 'text/html' });
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    file = <File>blob;
    picaServiceSpy = jasmine.createSpyObj('NgxPicaService', ['resizeImages']);
    resizeImagesSpy = picaServiceSpy.resizeImages.and.returnValue(of(file));
    uploadToken = 'ABC';
    mediaServiceSpy = jasmine.createSpyObj('MediaItemService', ['uploads', 'batchCreate']);
    albumServiceSpy = jasmine.createSpyObj('AlbumService', ['albums']);
    returnedAlbumId = 'abc';

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
    const mediaItem3 = new MediaItem('name C',moment(),'678','876');
    component.mediaItems.push(mediaItem1);
    component.mediaItems.push(mediaItem2);
    component.mediaItems.push(mediaItem3);
    component.createMediaItemsForGrouping();
    expect(component.mediaItemsForGrouping.length).toEqual(3);
    expect(component.mediaItemsForGrouping[0].mediaItem).toEqual(mediaItem2);
    expect(component.mediaItemsForGrouping[1].mediaItem).toEqual(mediaItem1);
    expect(component.mediaItemsForGrouping[2].mediaItem).toEqual(mediaItem3);
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
    const mediaItemForGrouping3 = new MediaItemForGrouping(new MediaItem('name C',moment(),'678','876'),3,component.timeDiffGroup - 1);
    component.mediaItemsForGrouping.push(mediaItemForGrouping1);
    component.mediaItemsForGrouping.push(mediaItemForGrouping2);
    component.mediaItemsForGrouping.push(mediaItemForGrouping3);
    component.identifyGroups();
    expect(component.mediaItemsGroups.length).toEqual(2);
    expect(component.mediaItemsGroups[0].mediaItemsForGrouping.length).toEqual(1);
    expect(component.mediaItemsGroups[1].mediaItemsForGrouping.length).toEqual(2);
    expect(component.mediaItemsGroups[0].mediaItemsForGrouping[0]).toEqual(mediaItemForGrouping1);
    expect(component.mediaItemsGroups[1].mediaItemsForGrouping[0]).toEqual(mediaItemForGrouping2);
    expect(component.mediaItemsGroups[1].mediaItemsForGrouping[1]).toEqual(mediaItemForGrouping3);
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

  it('should call APIs - albums, uploads, batchCreate - with success and update uploading status and album id', () => {
    component.mediaItemsGroups = [];
    const item1 = new MediaItem('name A', moment(),'123','321');
    item1.uploadSuccess = true;
    const item2 = new MediaItem('name B', moment(),'456','654');
    const item3 = new MediaItem('name C', moment(),'789','987');
    const albumId = 'album 123';
    const group1 = new MediaItemsGroup(1, moment(),moment(),[
      new MediaItemForGrouping(item1,1,0,YesNo.N)
    ],'group name1');
    const group2 = new MediaItemsGroup(2, moment(),moment(),[
      new MediaItemForGrouping(item2,1,0,YesNo.N)
    ],'group name2');
    group2.albumId = albumId;
    const group3 = new MediaItemsGroup(3, moment(),moment(),[
      new MediaItemForGrouping(item3,1,0,YesNo.N)
    ],'group name3');
    component.mediaItemsGroups.push(group1, group2, group3);
    const albumsSpy = albumServiceSpy.albums.and.returnValue(of(new Album('','', returnedAlbumId)));
    const uploadsSpy = mediaServiceSpy.uploads.and.returnValue(of(uploadToken));
    const batchCreateSpy = mediaServiceSpy.batchCreate.and.returnValue(of(''));
    component.createAlbumsAndMedia().then(() => {
      expect(albumsSpy.calls.count()).toEqual(2);
      expect(albumsSpy.calls.argsFor(0)).toEqual([component.mediaItemsGroups[0], component.accessToken]);
      expect(component.uploadingStatus).toEqual(UploadingStatus.Success);
      expect(component.mediaItemsGroups[0].albumId).toEqual(returnedAlbumId);
      expect(uploadsSpy.calls.count()).toEqual(2);
      expect(uploadsSpy.calls.argsFor(0)).toEqual([component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem, component.accessToken]);
      expect(batchCreateSpy.calls.count()).toEqual(2);
      expect(batchCreateSpy.calls.argsFor(0)).toEqual([component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem, uploadToken, component.accessToken, component.mediaItemsGroups[1].albumId]);
    });
  });


  it('should call album API with error, not call uploads and batchCreate APIs and update uploading status', () => {
    component.mediaItemsGroups = [];
    const item1 = new MediaItem('name A', moment(),'123','321');
    item1.uploadSuccess = true;
    const item2 = new MediaItem('name B', moment(),'456','654');
    const item3 = new MediaItem('name C', moment(),'789','987');
    const albumId = 'album 123';
    const group1 = new MediaItemsGroup(1, moment(),moment(),[
      new MediaItemForGrouping(item1,1,0,YesNo.N)
    ],'group name1');
    const group2 = new MediaItemsGroup(2, moment(),moment(),[
      new MediaItemForGrouping(item2,1,0,YesNo.N)
    ],'group name2');
    group2.albumId = albumId;
    const group3 = new MediaItemsGroup(3, moment(),moment(),[
      new MediaItemForGrouping(item3,1,0,YesNo.N)
    ],'group name3');
    component.mediaItemsGroups.push(group1, group2, group3);
    component.accessToken = '123';
    const albumsSpy = albumServiceSpy.albums.and.returnValue(throwError('error'));
    const uploadsSpy = mediaServiceSpy.uploads.and.returnValue(of(uploadToken));
    const batchCreateSpy = mediaServiceSpy.batchCreate.and.returnValue(of(''));
    component.createAlbumsAndMedia().then(() => {
      expect(albumsSpy.calls.count()).toEqual(1);
      expect(albumsSpy.calls.argsFor(0)).toEqual([component.mediaItemsGroups[0], component.accessToken]);
      expect(component.uploadingStatus).toEqual(UploadingStatus.Fail);
      expect(component.mediaItemsGroups[0].albumId).toBeUndefined();
      expect(uploadsSpy.calls.count()).toEqual(0);
      expect(batchCreateSpy.calls.count()).toEqual(0);
    });
  });

  it('should save access token', () => {
    const accessToken = 'abc';
    component.uploadForm.controls['accessToken'].setValue(accessToken);
    component.saveAccessToken();
    expect(component.accessToken).toEqual(accessToken);
  });

  it('should return correct uploaded count', () => {
    const uploadedCount = 2;
    let mediaItem1: IMediaItem = new MediaItem('name A', moment(),'123','321');
    mediaItem1.uploadSuccess = true;
    let mediaItem2: IMediaItem = new MediaItem('name B', moment(),'456','654');
    mediaItem2.uploadSuccess = true;
    const group = new MediaItemsGroup(1, moment(),moment(),[
      new MediaItemForGrouping(mediaItem1,1,0,YesNo.N),
      new MediaItemForGrouping(mediaItem2,1,0,YesNo.N)
    ],'group name');
    expect(group.getUploadedCount()).toEqual(uploadedCount);
  });

  it('should remove group', () => {
    component.mediaItemsGroups = [];
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(),moment(),[
        new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0,YesNo.N)
      ],'group name 1'),
      new MediaItemsGroup(2, moment(),moment(),[
        new MediaItemForGrouping(new MediaItem('name B', moment(),'456','654'),1,0,YesNo.N)
      ],'group name 2')
    );
    const originalLength = component.mediaItemsGroups.length;
    component.removeGroup(component.mediaItemsGroups[0]);
    expect(component.mediaItemsGroups.length).toEqual(originalLength - 1);
  });

  it('should change group show value', () => {
    component.mediaItemsGroups = [];
    const group = new MediaItemsGroup(1, moment(),moment(),[
      new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0,YesNo.N)
    ],'group name');
    group.show = false;
    component.mediaItemsGroups.push(group);
    component.changeShowGroup(component.mediaItemsGroups[0]);
    expect(component.mediaItemsGroups[0].show).toEqual(true);
  });

  it('should change group large preview value', () => {
    component.mediaItemsGroups = [];
    const group = new MediaItemsGroup(1, moment(),moment(),[
      new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0,YesNo.N)
    ],'group name');
    group.largePreview = false;
    component.mediaItemsGroups.push(group);
    component.changeLargePreview(component.mediaItemsGroups[0]);
    expect(component.mediaItemsGroups[0].largePreview).toEqual(true);
  });

  it('should change group show only duplicates value', () => {
    component.mediaItemsGroups = [];
    const group = new MediaItemsGroup(1, moment(),moment(),[
      new MediaItemForGrouping(new MediaItem('name A', moment(),'123','321'),1,0,YesNo.N)
    ],'group name');
    group.showOnlyDuplicates = false;
    component.mediaItemsGroups.push(group);
    component.changeShowOnlyDuplicates(component.mediaItemsGroups[0]);
    expect(component.mediaItemsGroups[0].showOnlyDuplicates).toEqual(true);
  });

  it('should return correct uploaded items count', () => {
    component.mediaItemsGroups = [];
    const mediaItem1 = new MediaItem('name A', moment(),'123','321');
    const mediaItem2 = new MediaItem('name B',moment(),'456','654');
    mediaItem2.uploadSuccess = true;
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(),moment(),[
        new MediaItemForGrouping(mediaItem1,1,0,YesNo.N),
        new MediaItemForGrouping(mediaItem2,2,0,YesNo.Y)
      ],'group name')
    );
    expect(component.getUploadedCount()).toEqual(1);
  });

});
