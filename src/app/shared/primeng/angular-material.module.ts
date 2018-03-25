import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule,
    MatDatepickerModule
  ],
  exports:[
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule,
    MatDatepickerModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
