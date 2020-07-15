import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesGroupingComponent } from './images-grouping.component';

describe('ImagesGroupingComponent', () => {
  let component: ImagesGroupingComponent;
  let fixture: ComponentFixture<ImagesGroupingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesGroupingComponent ]
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
});
