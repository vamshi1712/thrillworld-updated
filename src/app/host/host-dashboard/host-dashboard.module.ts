import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostDashboardComponent } from './host-dashboard.component';
import { HostDashboardRoutingModule } from './host-dashboard-routing.module';
import { PrimengModule } from '../../shared/primeng/primeng.module';


@NgModule({
  imports: [
    CommonModule,
    HostDashboardRoutingModule,
    PrimengModule
  ],
  declarations: [HostDashboardComponent]
})
export class HostDashboardModule { }
