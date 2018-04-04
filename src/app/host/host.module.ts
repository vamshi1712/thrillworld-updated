import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { AngularMaterialModule } from '../shared/primeng/angular-material.module';
import { HostRoutingModule } from './host-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HostService } from './shared/host.service';


import { HostComponent } from './host.component';
import { HostNavbarComponent } from './components/host-navbar/host-navbar.component';
import { HostSidebarComponent } from './components/host-sidebar/host-sidebar.component';
import { HostSignupComponent } from './components/host-signup/host-signup.component';
import { HostLoginComponent } from './components/host-login/host-login.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { EventsListComponent } from './pages/events-list/events-list.component';
import { HostProfileComponent } from './pages/host-profile/host-profile.component';
import { HostAuthGuard } from './shared/host-auth.guard';
import { AddImageComponent } from './pages/add-event/add-image/add-image.component';
import { HostChangepassComponent } from './pages/host-profile/host-changepass/host-changepass.component';
import { MatDialog } from '@angular/material';
import { HostBookingComponent } from './pages/booking/booking.component';
import { HostAvailabilityComponent } from './pages/availability/availability.component';
import { HostSettingsComponent } from './pages/host-settings/host-settings.component';
import { HostReviewsComponent } from './pages/host-reviews/host-reviews.component';
import { HostEventsPhotosComponent } from './pages/host-events-photos/host-events-photos.component';
import { HostInvoiceComponent } from './pages/host-invoice/host-invoice.component';
import { HostMessagesComponent } from './pages/host-messages/host-messages.component';

@NgModule({
  imports: [
    CommonModule,
    HostRoutingModule,
    NgbDropdownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    PrimengModule,
    AngularMaterialModule,
    HttpModule,
    HttpClientModule
    
  ],
  providers:[HostService, HostAuthGuard , MatDialog],
  declarations: [HostComponent, 
                HostNavbarComponent, 
                HostSidebarComponent, 
                HostSignupComponent, 
                HostLoginComponent,
                 AddEventComponent,
                 EventsListComponent,
                 HostProfileComponent,
                 AddImageComponent,
                 HostChangepassComponent,
                 HostBookingComponent,
                 HostAvailabilityComponent,
                 HostSettingsComponent,
                 HostReviewsComponent,
                 HostEventsPhotosComponent,
                 HostInvoiceComponent,
                 HostMessagesComponent
              ]
})
export class HostModule { }
