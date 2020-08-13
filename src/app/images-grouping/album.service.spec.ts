import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';

import { AlbumService, IAlbum, Album } from './album.service';
import { IMediaItemsGroup, MediaItemsGroup } from './images-grouping.component';
import { MediaItemForGrouping, MediaItem, IMediaItem, IMediaItemForGrouping, YesNo } from './media-item.service';

describe('AlbumService', () => {
  let service: AlbumService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AlbumService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an album', () => {
    const accessToken = '12345';
    const item: IMediaItem = new MediaItem('item', moment(), '', '');
    const itemGrouping: IMediaItemForGrouping = new MediaItemForGrouping(item, 1, 1, YesNo.N);
    const group: IMediaItemsGroup = new MediaItemsGroup(1, moment(), moment(), [ itemGrouping ], 'group');
    const album: IAlbum = new Album('group');

    // 1) should return album
    service.albums(group, accessToken).subscribe(
      data => expect(data).toEqual(album),
      fail
    );
    // 2) should call api once
    const req = httpMock.expectOne(service.albumsUrl);
    // 3) should use POST method
    expect(req.request.method).toEqual('POST');
    // 4) should send required headers
    expect(req.request.headers.get('Authorization')).toEqual('Bearer ' + accessToken);
    expect(req.request.headers.get('Content-type')).toEqual('application/json');
    // 5) should send data in the body of the request
    expect(req.request.body).toEqual({"album": album});
    // mocked HTTP response
    req.flush(album);
    // should not be any outstanding requests
    httpMock.verify();
  });
});
