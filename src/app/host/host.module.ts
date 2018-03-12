import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { HostRoutingModule } from './host-routing.module';
import { HostService } from './shared/host.service';


import { HostComponent } from './host.component';
import { HostNavbarComponent } from './components/host-navbar/host-navbar.component';
import { HostSidebarComponent } from './components/host-sidebar/host-sidebar.component';
import { HostSignupComponent } from './components/host-signup/host-signup.component';
import { HostLoginComponent } from './components/host-login/host-login.component';

@NgModule({
  imports: [
    CommonModule,
    HostRoutingModule,
    NgbDropdownModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PrimengModule
    
  ],
  providers:[HostService],
  declarations: [HostComponent, 
                HostNavbarComponent, 
                HostSidebarComponent, 
                HostSignupComponent, 
                HostLoginComponent
              ]
})
export class HostModule { }
