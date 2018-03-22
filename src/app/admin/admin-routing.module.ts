import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { MerchantsListComponent } from './merchants/merchants-list/merchants-list.component';
import { AdEventsListComponent } from './merchants/events-list/events-list.component';

const routes: Routes = [
  {path: '',
  component: AdminComponent,
  children: [
      { path: '', redirectTo: 'admin-dashboard',pathMatch: 'full' },
      { path: 'admin-dashboard', loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardModule' },   
      { path: 'admin-merchants-list' , component: MerchantsListComponent},
      { path: 'admin-events-list' , component: AdEventsListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

