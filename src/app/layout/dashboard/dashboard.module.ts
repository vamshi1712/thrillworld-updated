import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


import { StatModule } from '../../shared';
import { PrimengModule } from '../../shared/primeng/primeng.module';
import { PlacesComponent } from './places/places.component';
import { EventsComponent } from './events/events.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        PrimengModule
    ],
    declarations: [
        DashboardComponent,
        PlacesComponent,
        EventsComponent
    ]
})
export class DashboardModule {}
