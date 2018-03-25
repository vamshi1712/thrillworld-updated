import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventsPhotosComponent } from './admin-events-photos.component';

describe('AdminEventsPhotosComponent', () => {
  let component: AdminEventsPhotosComponent;
  let fixture: ComponentFixture<AdminEventsPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventsPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
