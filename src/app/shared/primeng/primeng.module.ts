import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/button';
import {GrowlModule} from 'primeng/growl';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    GrowlModule,
    CardModule,
    RadioButtonModule

  ],
  exports:[
    ButtonModule,
    GrowlModule,
    CardModule,
    RadioButtonModule
  ],
  declarations: []
})
export class PrimengModule { }
