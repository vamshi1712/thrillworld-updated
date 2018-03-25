import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostChangepassComponent } from './host-changepass.component';

describe('HostChangepassComponent', () => {
  let component: HostChangepassComponent;
  let fixture: ComponentFixture<HostChangepassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostChangepassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostChangepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
