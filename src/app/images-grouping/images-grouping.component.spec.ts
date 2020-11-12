import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as moment from 'moment';

import { googleLoginOptions, ImagesGroupingComponent, MediaItemsGroup, timeDiffDuplicateDefault, timeDiffGroupDefault, UploadingStatus } from './images-grouping.component';
import { of, throwError } from 'rxjs';
import { NgxPicaService } from '@digitalascetic/ngx-pica';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItem, MediaItemForGrouping, YesNo, MediaItemService, IMediaItem } from './media-item.service';
import { AlbumService, Album } from './album.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

describe('ImagesGroupingComponent', () => {
  let component: ImagesGroupingComponent;
  let fixture: ComponentFixture<ImagesGroupingComponent>;
  let uploadToken: string;
  let returnedAlbumId: string;
  let user1: SocialUser;

  beforeEach(() => {
    uploadToken = 'ABC';
    returnedAlbumId = 'abc';
    user1 = new SocialUser();
    user1.id = '123';
    const authServiceMock = { authState: of(user1), signIn() {}, signOut() {} };
    const picaServiceMock = { resizeImages() {} };

    TestBed.configureTestingModule({
      declarations: [ImagesGroupingComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        { provide: NgxPicaService, useValue: picaServiceMock },
        { provide: SocialAuthService, useValue: authServiceMock } ]
    })
      .compileComponents();

      fixture = TestBed.createComponent(ImagesGroupingComponent);
      component = fixture.componentInstance;
      // fixture.detectChanges(); // ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call resizeImages with correct arguments', () => {
    const blob = new Blob(['123'], { type: 'text/html' });
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    const file: File = <File>blob;
    const fileList = {
      0: file,
      1: file,
      length: 2,
      item: (index: number) => file
    };
    const ngxPicaService = TestBed.inject(NgxPicaService);
    spyOn(ngxPicaService, 'resizeImages').and.returnValue(of(file));
    component.getMediaItems(fileList);
    expect(ngxPicaService.resizeImages).toHaveBeenCalledTimes(1);
  });

  it('should call readAsArrayBuffer method of FileReader', () => {
    const blob = new Blob(['123'], { type: 'text/html' });
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    const file: File = <File>blob;
    const readAsArrayBufferSpy = spyOn(FileReader.prototype, 'readAsArrayBuffer');
    component.readFileBytes(file);
    expect(readAsArrayBufferSpy).toHaveBeenCalledWith(file);
  });

  it('should call readAsDataURL method of FileReader', () => {
    const blob = new Blob(['123'], { type: 'text/html' });
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    const file: File = <File>blob;
    const readAsDataURLSpy = spyOn(FileReader.prototype, 'readAsDataURL');
    component.readFileUrl(new FileReader(), file);
    expect(readAsDataURLSpy).toHaveBeenCalledWith(file);
  });

  it('should create new media item', () => {
    const blob = new Blob(['123'], { type: 'text/html' });
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    const file: File = <File>blob;
    component.createMediaItem(file, new FileReader(), new FileReader());
    expect(component.mediaItems[0].name).toEqual(file.name);
  });

  it('should create media items for grouping with sequence numbers', () => {
    component.mediaItems = [];
    component.mediaItemsForGrouping = [];
    const mediaItem1 = new MediaItem('name B', moment(), '123', '321');
    const mediaItem2 = new MediaItem('name A', moment(), '456', '654');
    const mediaItem3 = new MediaItem('name C', moment(), '678', '876');
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
    const dateTime2 = moment(dateString).add(timeDiffSec, 'seconds');
    const mediaItemForGrouping1 = new MediaItemForGrouping(new MediaItem('name A', dateTime1, '123', '321'), 1, 0);
    const mediaItemForGrouping2 = new MediaItemForGrouping(new MediaItem('name B', dateTime2, '456', '654'), 2, 0);
    component.mediaItemsForGrouping.push(mediaItemForGrouping1);
    component.mediaItemsForGrouping.push(mediaItemForGrouping2);
    component.calculateTimeDiff();
    expect(component.mediaItemsForGrouping[0].timeDiff).toEqual(0);
    expect(component.mediaItemsForGrouping[1].timeDiff).toEqual(timeDiffSec);
  });

  it('should correctly identify duplicate', () => {
    component.timeDiffDuplicate = timeDiffDuplicateDefault;
    component.mediaItemsForGrouping = [];
    const dateString = moment().format('YYYY-MM-DD');
    const dateTime1 = moment(dateString);
    const dateTime2 = moment(dateString).add(component.timeDiffDuplicate, 'seconds');
    const mediaItemForGrouping1 = new MediaItemForGrouping(new MediaItem('name A', dateTime1, '123', '321'), 1, 0);
    const mediaItemForGrouping2 = new MediaItemForGrouping(new MediaItem('name B', dateTime2, '456', '654'), 2, 0);
    component.mediaItemsForGrouping.push(mediaItemForGrouping1);
    component.mediaItemsForGrouping.push(mediaItemForGrouping2);
    component.identifyDuplicates();
    expect(component.mediaItemsForGrouping[0].isDuplicate).toEqual(YesNo.N);
    expect(component.mediaItemsForGrouping[1].isDuplicate).toEqual(YesNo.Y);
  });

  it('should correctly identify groups', () => {
    component.timeDiffGroup = timeDiffGroupDefault;
    component.mediaItemsForGrouping = [];
    const mediaItemForGrouping1 = new MediaItemForGrouping(new MediaItem('name A', moment(), '123', '321'), 1, 0);
    const mediaItemForGrouping2 = new MediaItemForGrouping(new MediaItem('name B', moment(), '456', '654'), 2, component.timeDiffGroup + 1);
    const mediaItemForGrouping3 = new MediaItemForGrouping(new MediaItem('name C', moment(), '678', '876'), 3, component.timeDiffGroup - 1);
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
      new MediaItemsGroup(1, moment(), moment(), [
        new MediaItemForGrouping(new MediaItem('name A', moment(), '123', '321'), 1, 0, YesNo.N),
        new MediaItemForGrouping(new MediaItem('name B', moment(), '456', '654'), 2, 0, YesNo.Y)
      ], 'group name')
    );
    expect(component.getUniqueMediaItemsCount()).toEqual(1);
  });

  it('should return correct day difference', () => {
    const dateString = moment().format('YYYY-MM-DD');
    const daysDiff = -5;
    const groupDate = moment(dateString).add(daysDiff, 'days');
    const todayDate = moment(dateString);
    expect(component.getDaysDiffFromToday(groupDate, todayDate)).toEqual(daysDiff);
  });

  it('should update group name', () => {
    component.mediaItemsGroups = [];
    const newGroupName = 'name new';
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(), moment(), [], 'group name')
    );
    component.updateGroupName(component.mediaItemsGroups[0], newGroupName);
    expect(component.mediaItemsGroups[0].name).toEqual(newGroupName);
  });

  it('should change duplicate', () => {
    component.mediaItemsGroups = [];
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(), moment(), [
        new MediaItemForGrouping(new MediaItem('name A', moment(), '123', '321'), 1, 0, YesNo.N)
      ], 'group name')
    );
    component.changeIsDuplicate(component.mediaItemsGroups[0], component.mediaItemsGroups[0].mediaItemsForGrouping[0]);
    expect(component.mediaItemsGroups[0].mediaItemsForGrouping[0].isDuplicate).toEqual(YesNo.Y);
  });

  it('should call APIs - albums, uploads, batchCreate - with success and update uploading status and album id', () => {
    component.mediaItemsGroups = [];
    const item1 = new MediaItem('name A', moment(), '123', '321');
    item1.uploadSuccess = true;
    const item2 = new MediaItem('name B', moment(), '456', '654');
    const item3 = new MediaItem('name C', moment(), '789', '987');
    const albumId = 'album 123';
    const group1 = new MediaItemsGroup(1, moment(), moment(), [
      new MediaItemForGrouping(item1, 1, 0, YesNo.N)
    ], 'group name1');
    const group2 = new MediaItemsGroup(2, moment(), moment(), [
      new MediaItemForGrouping(item2, 1, 0, YesNo.N)
    ], 'group name2');
    group2.albumId = albumId;
    const group3 = new MediaItemsGroup(3, moment(), moment(), [
      new MediaItemForGrouping(item3, 1, 0, YesNo.N)
    ], 'group name3');
    component.mediaItemsGroups.push(group1, group2, group3);
    const user1 = new SocialUser();
    user1.authToken = '123';
    component.user = user1;
    const albumService = TestBed.inject(AlbumService);
    const mediaItemService = TestBed.inject(MediaItemService);
    spyOn(albumService,'albums').and.returnValue(of(new Album('', '', returnedAlbumId)));
    spyOn(mediaItemService,'uploads').and.returnValue(of(uploadToken));
    spyOn(mediaItemService,'batchCreate').and.returnValue(of({}));
    component.createAlbumsAndMedia().then(() => {
      expect(albumService.albums).toHaveBeenCalledTimes(2);
      expect(albumService.albums).toHaveBeenCalledWith(component.mediaItemsGroups[0], component.user.authToken);
      expect(component.uploadingStatus).toEqual(UploadingStatus.Success);
      expect(component.mediaItemsGroups[0].albumId).toEqual(returnedAlbumId);
      expect(mediaItemService.uploads).toHaveBeenCalledTimes(2);
      expect(mediaItemService.uploads).toHaveBeenCalledWith(component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem, component.user.authToken);
      expect(mediaItemService.batchCreate).toHaveBeenCalledTimes(2);
      expect(mediaItemService.batchCreate).toHaveBeenCalledWith(component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem, uploadToken, component.user.authToken, component.mediaItemsGroups[1].albumId);
      expect(component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem.uploadSuccess).toBeTrue();
      expect(component.mediaItemsGroups[2].mediaItemsForGrouping[0].mediaItem.uploadSuccess).toBeTrue();
    });
  });


  it('should call albums API with error, not call uploads and batchCreate APIs and update uploading status', () => {
    component.mediaItemsGroups = [];
    const item1 = new MediaItem('name A', moment(), '123', '321');
    item1.uploadSuccess = true;
    const item2 = new MediaItem('name B', moment(), '456', '654');
    const item3 = new MediaItem('name C', moment(), '789', '987');
    const albumId = 'album 123';
    const group1 = new MediaItemsGroup(1, moment(), moment(), [
      new MediaItemForGrouping(item1, 1, 0, YesNo.N)
    ], 'group name1');
    const group2 = new MediaItemsGroup(2, moment(), moment(), [
      new MediaItemForGrouping(item2, 1, 0, YesNo.N)
    ], 'group name2');
    group2.albumId = albumId;
    const group3 = new MediaItemsGroup(3, moment(), moment(), [
      new MediaItemForGrouping(item3, 1, 0, YesNo.N)
    ], 'group name3');
    component.mediaItemsGroups.push(group1, group2, group3);
    const user1 = new SocialUser();
    user1.authToken = '123';
    component.user = user1;
    const albumService = TestBed.inject(AlbumService);
    const mediaItemService = TestBed.inject(MediaItemService);
    spyOn(albumService,'albums').and.returnValue(throwError('error'));
    spyOn(mediaItemService,'uploads').and.returnValue(of(uploadToken));
    spyOn(mediaItemService,'batchCreate').and.returnValue(of({}));
    component.createAlbumsAndMedia().then(() => {
      expect(albumService.albums).toHaveBeenCalledTimes(1);
      expect(albumService.albums).toHaveBeenCalledWith(component.mediaItemsGroups[0], component.user.authToken);
      expect(component.uploadingStatus).toEqual(UploadingStatus.Fail);
      expect(component.mediaItemsGroups[0].albumId).toBeUndefined();
      expect(mediaItemService.uploads).not.toHaveBeenCalled();
      expect(mediaItemService.batchCreate).not.toHaveBeenCalled();
      expect(component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem.uploadSuccess).toBeFalse();
      expect(component.mediaItemsGroups[2].mediaItemsForGrouping[0].mediaItem.uploadSuccess).toBeFalse();
    });
  });


  it('should call albums API with success, uploads API with error, not call batchCreate API and update uploading status', () => {
    component.mediaItemsGroups = [];
    const item1 = new MediaItem('name A', moment(), '123', '321');
    item1.uploadSuccess = true;
    const item2 = new MediaItem('name B', moment(), '456', '654');
    const item3 = new MediaItem('name C', moment(), '789', '987');
    const albumId = 'album 123';
    const group1 = new MediaItemsGroup(1, moment(), moment(), [
      new MediaItemForGrouping(item1, 1, 0, YesNo.N)
    ], 'group name1');
    const group2 = new MediaItemsGroup(2, moment(), moment(), [
      new MediaItemForGrouping(item2, 1, 0, YesNo.N)
    ], 'group name2');
    group2.albumId = albumId;
    const group3 = new MediaItemsGroup(3, moment(), moment(), [
      new MediaItemForGrouping(item3, 1, 0, YesNo.N)
    ], 'group name3');
    component.mediaItemsGroups.push(group1, group2, group3);
    const user1 = new SocialUser();
    user1.authToken = '123';
    component.user = user1;
    const albumService = TestBed.inject(AlbumService);
    const mediaItemService = TestBed.inject(MediaItemService);
    spyOn(albumService,'albums').and.returnValue(of(new Album('', '', returnedAlbumId)));
    spyOn(mediaItemService,'uploads').and.returnValue(throwError('error'));
    spyOn(mediaItemService,'batchCreate').and.returnValue(of({}));
    component.createAlbumsAndMedia().then(() => {
      expect(albumService.albums).toHaveBeenCalledTimes(1);
      expect(albumService.albums).toHaveBeenCalledWith(component.mediaItemsGroups[0], component.user.authToken);
      expect(component.uploadingStatus).toEqual(UploadingStatus.Fail);
      expect(component.mediaItemsGroups[0].albumId).toEqual(returnedAlbumId);
      expect(mediaItemService.uploads).toHaveBeenCalledTimes(1);
      expect(mediaItemService.uploads).toHaveBeenCalledWith(component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem, component.user.authToken);
      expect(mediaItemService.batchCreate).not.toHaveBeenCalled();
      expect(component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem.uploadSuccess).toBeFalse();
      expect(component.mediaItemsGroups[2].mediaItemsForGrouping[0].mediaItem.uploadSuccess).toBeFalse();
    });
  });

  it('should call albums, uploads API with success, batchCreate API with error and update uploading status', () => {
    component.mediaItemsGroups = [];
    const item1 = new MediaItem('name A', moment(), '123', '321');
    item1.uploadSuccess = true;
    const item2 = new MediaItem('name B', moment(), '456', '654');
    const item3 = new MediaItem('name C', moment(), '789', '987');
    const albumId = 'album 123';
    const group1 = new MediaItemsGroup(1, moment(), moment(), [
      new MediaItemForGrouping(item1, 1, 0, YesNo.N)
    ], 'group name1');
    const group2 = new MediaItemsGroup(2, moment(), moment(), [
      new MediaItemForGrouping(item2, 1, 0, YesNo.N)
    ], 'group name2');
    group2.albumId = albumId;
    const group3 = new MediaItemsGroup(3, moment(), moment(), [
      new MediaItemForGrouping(item3, 1, 0, YesNo.N)
    ], 'group name3');
    component.mediaItemsGroups.push(group1, group2, group3);
    const user1 = new SocialUser();
    user1.authToken = '123';
    component.user = user1;
    const albumService = TestBed.inject(AlbumService);
    const mediaItemService = TestBed.inject(MediaItemService);
    spyOn(albumService,'albums').and.returnValue(of(new Album('', '', returnedAlbumId)));
    spyOn(mediaItemService,'uploads').and.returnValue(of(uploadToken));
    spyOn(mediaItemService,'batchCreate').and.returnValue(throwError('error'));
    component.createAlbumsAndMedia().then(() => {
      expect(albumService.albums).toHaveBeenCalledTimes(1);
      expect(albumService.albums).toHaveBeenCalledWith(component.mediaItemsGroups[0], component.user.authToken);
      expect(component.uploadingStatus).toEqual(UploadingStatus.Fail);
      expect(component.mediaItemsGroups[0].albumId).toEqual(returnedAlbumId);
      expect(mediaItemService.uploads).toHaveBeenCalledTimes(1);
      expect(mediaItemService.uploads).toHaveBeenCalledWith(component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem, component.user.authToken);
      expect(mediaItemService.batchCreate).toHaveBeenCalledTimes(1);
      expect(component.mediaItemsGroups[1].mediaItemsForGrouping[0].mediaItem.uploadSuccess).toBeFalse();
      expect(component.mediaItemsGroups[2].mediaItemsForGrouping[0].mediaItem.uploadSuccess).toBeFalse();
    });
  });

  it('should return correct uploaded count', () => {
    const uploadedCount = 2;
    let mediaItem1: IMediaItem = new MediaItem('name A', moment(), '123', '321');
    mediaItem1.uploadSuccess = true;
    let mediaItem2: IMediaItem = new MediaItem('name B', moment(), '456', '654');
    mediaItem2.uploadSuccess = true;
    const group = new MediaItemsGroup(1, moment(), moment(), [
      new MediaItemForGrouping(mediaItem1, 1, 0, YesNo.N),
      new MediaItemForGrouping(mediaItem2, 1, 0, YesNo.N)
    ], 'group name');
    expect(group.getUploadedCount()).toEqual(uploadedCount);
  });

  it('should remove group', () => {
    component.mediaItemsGroups = [];
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(), moment(), [
        new MediaItemForGrouping(new MediaItem('name A', moment(), '123', '321'), 1, 0, YesNo.N)
      ], 'group name 1'),
      new MediaItemsGroup(2, moment(), moment(), [
        new MediaItemForGrouping(new MediaItem('name B', moment(), '456', '654'), 1, 0, YesNo.N)
      ], 'group name 2')
    );
    const originalLength = component.mediaItemsGroups.length;
    component.removeGroup(component.mediaItemsGroups[0]);
    expect(component.mediaItemsGroups.length).toEqual(originalLength - 1);
  });

  it('should change group show value', () => {
    component.mediaItemsGroups = [];
    const group = new MediaItemsGroup(1, moment(), moment(), [
      new MediaItemForGrouping(new MediaItem('name A', moment(), '123', '321'), 1, 0, YesNo.N)
    ], 'group name');
    group.show = false;
    component.mediaItemsGroups.push(group);
    component.changeShowGroup(component.mediaItemsGroups[0]);
    expect(component.mediaItemsGroups[0].show).toEqual(true);
  });

  it('should change group large preview value', () => {
    component.mediaItemsGroups = [];
    const group = new MediaItemsGroup(1, moment(), moment(), [
      new MediaItemForGrouping(new MediaItem('name A', moment(), '123', '321'), 1, 0, YesNo.N)
    ], 'group name');
    group.largePreview = false;
    component.mediaItemsGroups.push(group);
    component.changeLargePreview(component.mediaItemsGroups[0]);
    expect(component.mediaItemsGroups[0].largePreview).toEqual(true);
  });

  it('should change group show only duplicates value', () => {
    component.mediaItemsGroups = [];
    const group = new MediaItemsGroup(1, moment(), moment(), [
      new MediaItemForGrouping(new MediaItem('name A', moment(), '123', '321'), 1, 0, YesNo.N)
    ], 'group name');
    group.showOnlyDuplicates = false;
    component.mediaItemsGroups.push(group);
    component.changeShowOnlyDuplicates(component.mediaItemsGroups[0]);
    expect(component.mediaItemsGroups[0].showOnlyDuplicates).toEqual(true);
  });

  it('should return correct uploaded items count', () => {
    component.mediaItemsGroups = [];
    const mediaItem1 = new MediaItem('name A', moment(), '123', '321');
    const mediaItem2 = new MediaItem('name B', moment(), '456', '654');
    mediaItem2.uploadSuccess = true;
    component.mediaItemsGroups.push(
      new MediaItemsGroup(1, moment(), moment(), [
        new MediaItemForGrouping(mediaItem1, 1, 0, YesNo.N),
        new MediaItemForGrouping(mediaItem2, 2, 0, YesNo.Y)
      ], 'group name')
    );
    expect(component.getUploadedCount()).toEqual(1);
  });

  it('should update user and logged in status', () => {
      fixture.detectChanges();
      expect(component.user).toEqual(user1);
      expect(component.loggedIn).toEqual(true);
  });

  it('should call auth service sign in method with correct parameters', () => {
    const authService = TestBed.inject(SocialAuthService);
    spyOn(authService, 'signIn');
    component.signInWithGoogle();
    expect(authService.signIn).toHaveBeenCalledTimes(1);
    expect(authService.signIn).toHaveBeenCalledWith(GoogleLoginProvider.PROVIDER_ID, googleLoginOptions);
  });

  it('should call auth service sign out method', () => {
    const authService = TestBed.inject(SocialAuthService);
    spyOn(authService, 'signOut');
    component.signOut();
    expect(authService.signOut).toHaveBeenCalledTimes(1);
  });

  it('should get correct time diffs from parameters form', () => {
    const diffDuplicate = 3;
    const diffGroup = 40;
    component.paramsForm.get(['timeDiffDuplicate']).setValue(diffDuplicate);
    component.paramsForm.get(['timeDiffGroup']).setValue(diffGroup);
    component.getParamsTimeDiffs();
    expect(component.timeDiffDuplicate).toEqual(diffDuplicate);
    expect(component.timeDiffGroup).toEqual(diffGroup);
  });

});
