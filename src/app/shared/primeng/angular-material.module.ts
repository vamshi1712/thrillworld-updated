import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule

  ],
  exports:[
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatChipsModule,
    MatExpansionModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
