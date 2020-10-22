import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';

import { AlbumService, IAlbum, Album } from './album.service';
import { IMediaItemsGroup, MediaItemsGroup } from './images-grouping.component';
import { MediaItemForGrouping, MediaItem, IMediaItem, IMediaItemForGrouping, YesNo } from './media-item.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('AlbumService', () => {
  let service: AlbumService;
  let httpMock: HttpTestingController;
  let accessToken: string;
  let item: IMediaItem;
  let itemGrouping: IMediaItemForGrouping;
  let group: IMediaItemsGroup;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(AlbumService);
    httpMock = TestBed.inject(HttpTestingController);

    accessToken = '12345';
    item = new MediaItem('item', moment(), '', '');
    itemGrouping = new MediaItemForGrouping(item, 1, 1, YesNo.N);
    group = new MediaItemsGroup(1, moment(), moment(), [ itemGrouping ], 'group');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an album', () => {
    const album: IAlbum = new Album('group');

    // 1) should return album
    service.albums(group, accessToken).then(
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

  it('should return error when HTTP request fails', () => {
    const emsg = 'deliberate 404 error';
    // 1) should return an error
    service.albums(group, accessToken).then(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );
    // 2) should call api once
    const req = httpMock.expectOne(service.albumsUrl);
    // mocked HTTP response
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
    // should not be any outstanding requests
    httpMock.verify();
  });

});
