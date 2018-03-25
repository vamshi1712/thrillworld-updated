import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostEventsPhotosComponent } from './host-events-photos.component';

describe('HostEventsPhotosComponent', () => {
  let component: HostEventsPhotosComponent;
  let fixture: ComponentFixture<HostEventsPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostEventsPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostEventsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
