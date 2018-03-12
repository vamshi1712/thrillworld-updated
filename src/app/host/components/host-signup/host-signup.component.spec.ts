import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSignupComponent } from './host-signup.component';

describe('HostSignupComponent', () => {
  let component: HostSignupComponent;
  let fixture: ComponentFixture<HostSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
