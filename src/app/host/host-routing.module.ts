import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostComponent } from './host.component';
import { HostSignupComponent } from './components/host-signup/host-signup.component';
import { HostLoginComponent } from './components/host-login/host-login.component';

const routes: Routes = [
  {path: '',
  component: HostComponent,
  children: [
      { path: '', redirectTo: 'host-dashboard',pathMatch: 'full' },
      { path: 'host-dashboard', loadChildren: './host-dashboard/host-dashboard.module#HostDashboardModule' }   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
