import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MerchantsListComponent } from './merchants/merchants-list/merchants-list.component';
import { AdminAddEventComponent } from './pages/admin-add-event/admin-add-event.component';
import { AdminAvailabilityComponent } from './pages/admin-availability/admin-availability.component';
import { AdminBookingsComponent } from './pages/admin-bookings/admin-bookings.component';
import { AdminEventsListComponent } from './pages/admin-events-list/admin-events-list.component';
import { AdminEventsPhotosComponent } from './pages/admin-events-photos/admin-events-photos.component';
import { AdminInvoiceComponent } from './pages/admin-invoice/admin-invoice.component';
import { AdminMessagesComponent } from './pages/admin-messages/admin-messages.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminReviewsComponent } from './pages/admin-reviews/admin-reviews.component';
import { AdminSettingsComponent } from './pages/admin-settings/admin-settings.component';

const routes: Routes = [
  {path: '',
  component: AdminComponent,
  children: [
      { path: '', redirectTo: 'admin-dashboard',pathMatch: 'full' },
      { path: 'admin-dashboard', loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardModule' },   
      { path: 'admin-merchants-list' , component: MerchantsListComponent},
      { path: 'admin-add-event' , component: AdminAddEventComponent},
      { path: 'admin-availability' , component: AdminAvailabilityComponent},
      { path: 'admin-bookings' , component: AdminBookingsComponent},
      { path: 'admin-events-list' , component: AdminEventsListComponent},
      { path: 'admin-events-photos' , component: AdminEventsPhotosComponent},
      { path: 'admin-invoice' , component: AdminInvoiceComponent},
      { path: 'admin-messages' , component: AdminMessagesComponent},
      { path: 'admin-profile' , component: AdminProfileComponent},
      { path: 'admin-reviews' , component: AdminReviewsComponent},
      { path: 'admin-settings' , component: AdminSettingsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

