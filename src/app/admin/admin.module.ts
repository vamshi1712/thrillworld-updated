import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { AdminService } from './shared/admin.service';

import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { MerchantsListComponent } from './merchants/merchants-list/merchants-list.component';
import { AdEventsListComponent } from './merchants/events-list/events-list.component';
import { AngularMaterialModule } from '../shared/primeng/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbDropdownModule.forRoot(),
    ReactiveFormsModule,
    PrimengModule,
    AngularMaterialModule
  ],
  providers:[AdminService],
  declarations: [AdminComponent, 
                AdminLoginComponent, 
                AdminSignupComponent, 
                AdminSidebarComponent, 
                AdminNavbarComponent, MerchantsListComponent, AdEventsListComponent
              ]
})
export class AdminModule { }
