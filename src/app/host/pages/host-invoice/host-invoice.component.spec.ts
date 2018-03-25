import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostInvoiceComponent } from './host-invoice.component';

describe('HostInvoiceComponent', () => {
  let component: HostInvoiceComponent;
  let fixture: ComponentFixture<HostInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
