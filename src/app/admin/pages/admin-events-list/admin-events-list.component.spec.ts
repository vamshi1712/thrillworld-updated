import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventsListComponent } from './admin-events-list.component';

describe('AdminEventsListComponent', () => {
  let component: AdminEventsListComponent;
  let fixture: ComponentFixture<AdminEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
