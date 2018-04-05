import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { AdminService } from './shared/admin.service';

import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { MerchantsListComponent } from './merchants/merchants-list/merchants-list.component';
import { AngularMaterialModule } from '../shared/primeng/angular-material.module';
import { AdminAddEventComponent } from './pages/admin-add-event/admin-add-event.component';
import { AdminBookingsComponent } from './pages/admin-bookings/admin-bookings.component';
import { AdminAvailabilityComponent } from './pages/admin-availability/admin-availability.component';
import { AdminAddImageComponent } from './pages/admin-add-event/admin-add-image/admin-add-image.component';
import { AdminEventsListComponent } from './pages/admin-events-list/admin-events-list.component';
import { AdminEventsPhotosComponent } from './pages/admin-events-photos/admin-events-photos.component';
import { AdminInvoiceComponent } from './pages/admin-invoice/admin-invoice.component';
import { AdminMessagesComponent } from './pages/admin-messages/admin-messages.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminReviewsComponent } from './pages/admin-reviews/admin-reviews.component';
import { AdminSettingsComponent } from './pages/admin-settings/admin-settings.component';
import { AdminAddCityComponent } from './pages/admin-add-city/admin-add-city.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbDropdownModule.forRoot(),
    ReactiveFormsModule,
    PrimengModule,
    AngularMaterialModule,
    FormsModule
  ],
  providers:[AdminService],
  declarations: [AdminComponent, 
                AdminLoginComponent, 
                AdminSignupComponent, 
                AdminSidebarComponent, 
                AdminNavbarComponent,
                 MerchantsListComponent,
                 AdminAddEventComponent,
                  AdminBookingsComponent, 
                  AdminAvailabilityComponent,
                   AdminAddImageComponent,
                    AdminEventsListComponent, 
                    AdminEventsPhotosComponent,
                     AdminInvoiceComponent,
                      AdminMessagesComponent,
                       AdminProfileComponent, 
                       AdminReviewsComponent,
                        AdminSettingsComponent,
                         AdminAddCityComponent
              ]
})
export class AdminModule { }
