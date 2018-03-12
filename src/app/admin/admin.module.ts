import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoutingModule } from './admin-routing.module';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { AdminService } from './shared/admin.service';

import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbDropdownModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  providers:[AdminService],
  declarations: [AdminComponent, 
                AdminLoginComponent, 
                AdminSignupComponent, 
                AdminSidebarComponent, 
                AdminNavbarComponent
              ]
})
export class AdminModule { }
