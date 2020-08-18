import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ImagesGroupingComponent } from './images-grouping.component';
import { of } from 'rxjs';
import { NgxPicaService } from '@digitalascetic/ngx-pica';
import { ReactiveFormsModule } from '@angular/forms';

describe('ImagesGroupingComponent', () => {
  let component: ImagesGroupingComponent;
  let fixture: ComponentFixture<ImagesGroupingComponent>;
  let resizeImagesSpy: jasmine.Spy;
  let readAsArrayBufferSpy: jasmine.Spy;
  let file: File;

  beforeEach(async(() => {
    const blob = new Blob(['123'], { type: 'text/html' });
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    file = <File>blob;
    const serviceSpy = jasmine.createSpyObj('NgxPicaService', ['resizeImages']);
    resizeImagesSpy = serviceSpy.resizeImages.and.returnValue(of(file));

    TestBed.configureTestingModule({
      declarations: [ ImagesGroupingComponent ],
      imports: [ HttpClientTestingModule, ReactiveFormsModule ],
      providers: [{ provide: NgxPicaService, useValue: serviceSpy }]
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

    component.processFiles(fileList);
    expect(resizeImagesSpy.calls.count()).toEqual(1);
    expect(resizeImagesSpy.calls.argsFor(0)).toEqual([fileList, component.resizeWidth, component.resizeHeight, component.picaOptions]);

  });

  it('should call readAsArrayBuffer method of FileReader', () => {
    const readAsArrayBufferSpy = spyOn(FileReader.prototype, 'readAsArrayBuffer');
    component.readFileBytes(file);
    expect(readAsArrayBufferSpy.calls.count()).toEqual(1);
  });

  it('should call readAsDataURL method of FileReader', () => {
    const readAsDataURLSpy = spyOn(FileReader.prototype, 'readAsDataURL');
    component.readFileUrl(new FileReader(), file);
    expect(readAsDataURLSpy.calls.count()).toEqual(1);
  });

});
