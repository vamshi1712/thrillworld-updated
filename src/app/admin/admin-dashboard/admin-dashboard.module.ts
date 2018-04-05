import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { PrimengModule } from '../../shared/primeng/primeng.module';
import { AngularMaterialModule } from '../../shared/primeng/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    PrimengModule,
    AngularMaterialModule
  ],
  declarations: [AdminDashboardComponent]
})
export class AdminDashboardModule { }
