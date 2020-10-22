import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as moment from 'moment';

import { MediaItemService, IMediaItem, MediaItem } from './media-item.service';
import { HttpErrorResponse } from '@angular/common/http';


describe('MediaService', () => {
  let service: MediaItemService;
  let httpMock: HttpTestingController;
  let accessToken: string;
  let item: IMediaItem;
  let uploadToken: string;
  let albumId: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MediaItemService);
    httpMock = TestBed.inject(HttpTestingController);

    accessToken = '12345';
    item = new MediaItem('item', moment(), 'abc', 'cde');
    uploadToken = 'ut1';
    albumId = 'a1';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an upload token', () => {
    // 1) should return an upload token
    service.uploads(item, accessToken).then(
      data => expect(data).toEqual(uploadToken),
      fail
    );
    // 2) should call api once
    const req = httpMock.expectOne(service.uploadsUrl);
    // 3) should use POST method
    expect(req.request.method).toEqual('POST');
    // 4) should send authorization header with access token
    expect(req.request.headers.get('Authorization')).toEqual('Bearer ' + accessToken);
    // 5) should send data in the body of the request
    expect(req.request.body).toEqual(item.contentBytes);
    // mocked HTTP response
    req.flush(uploadToken);
    // 6) should not be any outstanding requests
    httpMock.verify();
  });


  it('should create media items', () => {
    const requestBody = {
      "albumId": albumId,
      "newMediaItems": [
        {
          "description": "",
          "simpleMediaItem": {
            "fileName": item.name,
            "uploadToken": uploadToken
          }
        }
      ]
    }

    // 1) should return media item
    service.batchCreate(item, uploadToken, accessToken, albumId).then(
      data => expect(data).toEqual(item),
      fail
    );
    // 2) should call api once
    const req = httpMock.expectOne(service.batchCreateUrl);
    // 3) should use POST method
    expect(req.request.method).toEqual('POST');
    // 4) should send required headers
    expect(req.request.headers.get('Authorization')).toEqual('Bearer ' + accessToken);
    expect(req.request.headers.get('Content-type')).toEqual('application/json');
    // 5) should send data in the body of the request
    expect(req.request.body).toEqual(requestBody);
    // mocked HTTP response
    req.flush(item);
    // 6) should not be any outstanding requests
    httpMock.verify();
  });

  it('should return error when HTTP request fails', () => {
    const emsg = 'deliberate 404 error';
    // 1) should return error
    service.batchCreate(item, uploadToken, accessToken, albumId).then(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, 'status');
        expect(error.error).toEqual(emsg, 'message');
      }
    );

    // 2) should call api once
    const req = httpMock.expectOne(service.batchCreateUrl);
    // mocked HTTP response
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
    // should not be any outstanding requests
    httpMock.verify();
  });

});
