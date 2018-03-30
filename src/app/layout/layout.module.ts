import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularMaterialModule } from '../shared/primeng/angular-material.module';
import { ActivityComponent } from './activity/activity.component';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { BookingComponent } from './activity/booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CityComponent } from './city/city.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbCarouselModule.forRoot(),
        NgbDropdownModule.forRoot(),
        AngularMaterialModule,
        PrimengModule,
        ReactiveFormsModule
    ],
    declarations: [LayoutComponent, 
                HeaderComponent, 
                FooterComponent, 
                SidebarComponent, ActivityComponent, BookingComponent, CityComponent
            ],
    
})
export class LayoutModule {}
