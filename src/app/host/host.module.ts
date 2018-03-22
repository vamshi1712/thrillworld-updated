import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { AngularMaterialModule } from '../shared/primeng/angular-material.module';
import { HostRoutingModule } from './host-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HostService } from './shared/host.service';


import { HostComponent } from './host.component';
import { HostNavbarComponent } from './components/host-navbar/host-navbar.component';
import { HostSidebarComponent } from './components/host-sidebar/host-sidebar.component';
import { HostSignupComponent } from './components/host-signup/host-signup.component';
import { HostLoginComponent } from './components/host-login/host-login.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { EventsListComponent } from './pages/events-list/events-list.component';
import { HostProfileComponent } from './pages/host-profile/host-profile.component';
import { HostAuthGuard } from './shared/host-auth.guard';
import { AddImageComponent } from './pages/add-event/add-image/add-image.component';

@NgModule({
  imports: [
    CommonModule,
    HostRoutingModule,
    NgbDropdownModule.forRoot(),
    ReactiveFormsModule,
    PrimengModule,
    AngularMaterialModule,
    HttpModule,
    HttpClientModule    
    
  ],
  providers:[HostService, HostAuthGuard],
  declarations: [HostComponent, 
                HostNavbarComponent, 
                HostSidebarComponent, 
                HostSignupComponent, 
                HostLoginComponent,
                 AddEventComponent,
                 EventsListComponent,
                 HostProfileComponent,
                 AddImageComponent
              ]
})
export class HostModule { }
