import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostComponent } from './host.component';
import { HostSignupComponent } from './components/host-signup/host-signup.component';
import { HostLoginComponent } from './components/host-login/host-login.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { EventsListComponent } from './pages/events-list/events-list.component';
import { HostProfileComponent } from './pages/host-profile/host-profile.component';
import { HostAuthGuard } from './shared/host-auth.guard';
import { HostChangepassComponent } from './pages/host-profile/host-changepass/host-changepass.component';
import { HostBookingComponent } from './pages/booking/booking.component';
import { HostAvailabilityComponent } from './pages/availability/availability.component';
import { HostSettingsComponent } from './pages/host-settings/host-settings.component';
import { HostReviewsComponent } from './pages/host-reviews/host-reviews.component';
import { HostEventsPhotosComponent } from './pages/host-events-photos/host-events-photos.component';
import { HostInvoiceComponent } from './pages/host-invoice/host-invoice.component';

const routes: Routes = [
  {path: '',
  component: HostComponent,
  children: [
      { path: '', redirectTo: 'host-dashboard',pathMatch: 'full' },
      { path: 'host-dashboard', loadChildren: './host-dashboard/host-dashboard.module#HostDashboardModule',canActivate: [HostAuthGuard] },   
      { path: 'add-event' , component: AddEventComponent },
      { path: 'events-list' , component: EventsListComponent },
      { path: 'host-profile' , component: HostProfileComponent },
      { path: 'host-pass' , component: HostChangepassComponent },
      { path: 'host-bookings' , component: HostBookingComponent },
      { path: 'host-availability' , component: HostAvailabilityComponent },
      { path: 'host-settings' , component: HostSettingsComponent },
      { path: 'host-reviews' , component: HostReviewsComponent },
      { path: 'host-events-photos' , component: HostEventsPhotosComponent },
      { path: 'host-invoice' , component: HostInvoiceComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
