import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostComponent } from './host.component';
import { HostSignupComponent } from './components/host-signup/host-signup.component';
import { HostLoginComponent } from './components/host-login/host-login.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { EventsListComponent } from './pages/events-list/events-list.component';
import { HostProfileComponent } from './pages/host-profile/host-profile.component';
import { HostAuthGuard } from './shared/host-auth.guard';

const routes: Routes = [
  {path: '',
  component: HostComponent,
  children: [
      { path: '', redirectTo: 'host-dashboard',pathMatch: 'full' },
      { path: 'host-dashboard', loadChildren: './host-dashboard/host-dashboard.module#HostDashboardModule' },   
      { path: 'add-event' , component: AddEventComponent},
      { path: 'events-list' , component: EventsListComponent },
      { path: 'host-profile' , component: HostProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
