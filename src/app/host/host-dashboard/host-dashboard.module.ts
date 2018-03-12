import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostDashboardComponent } from './host-dashboard.component';
import { HostDashboardRoutingModule } from './host-dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HostDashboardRoutingModule
  ],
  declarations: [HostDashboardComponent]
})
export class HostDashboardModule { }
