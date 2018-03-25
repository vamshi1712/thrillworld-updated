import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostMessagesComponent } from './host-messages.component';

describe('HostMessagesComponent', () => {
  let component: HostMessagesComponent;
  let fixture: ComponentFixture<HostMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
