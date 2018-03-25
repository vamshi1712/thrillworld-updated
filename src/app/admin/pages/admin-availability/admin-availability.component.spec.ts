import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAvailabilityComponent } from './admin-availability.component';

describe('AdminAvailabilityComponent', () => {
  let component: AdminAvailabilityComponent;
  let fixture: ComponentFixture<AdminAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
