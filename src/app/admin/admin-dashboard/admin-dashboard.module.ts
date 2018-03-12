import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ],
  declarations: [AdminDashboardComponent]
})
export class AdminDashboardModule { }
