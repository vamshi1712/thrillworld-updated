import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { HostRoutingModule } from './host-routing.module';
import { HostComponent } from './host.component';
import { HostNavbarComponent } from './components/host-navbar/host-navbar.component';
import { HostSidebarComponent } from './components/host-sidebar/host-sidebar.component';
import { HostSignupComponent } from './components/host-signup/host-signup.component';
import { HostLoginComponent } from './components/host-login/host-login.component';
import { HostService } from './shared/host.service';

@NgModule({
  imports: [
    CommonModule,
    HostRoutingModule,
    NgbDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers:[HostService],
  declarations: [HostComponent, HostNavbarComponent, HostSidebarComponent, HostSignupComponent, HostLoginComponent]
})
export class HostModule { }
