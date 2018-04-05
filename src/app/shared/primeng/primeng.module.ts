import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/button';
import {GrowlModule} from 'primeng/growl';
import {CardModule} from 'primeng/card';
import {RadioButtonModule} from 'primeng/radiobutton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {ChartModule} from 'primeng/chart';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {ChipsModule} from 'primeng/chips';
import {CalendarModule} from 'primeng/calendar';
import {EditorModule} from 'primeng/editor';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {SidebarModule} from 'primeng/sidebar';
import {AccordionModule} from 'primeng/accordion';
import {RatingModule} from 'primeng/rating';




@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    GrowlModule,
    CardModule,
    RadioButtonModule,
    AutoCompleteModule,
    InputTextareaModule,
    FileUploadModule,
    ChartModule,
    TabViewModule,
    InputTextModule,
    ChipsModule,
    CalendarModule,
    EditorModule,
    DialogModule,
    CheckboxModule,
    SidebarModule,
    AccordionModule,
    RatingModule

  ],
  exports:[
    ButtonModule,
    GrowlModule,
    CardModule,
    RadioButtonModule,
    AutoCompleteModule,
    InputTextareaModule,
    FileUploadModule,
    ChartModule,
    TabViewModule,
    InputTextModule,
    ChipsModule,
    CalendarModule,
    EditorModule,
    DialogModule,
    CheckboxModule,
    SidebarModule,
    AccordionModule,
    RatingModule
  ],
  declarations: []
})
export class PrimengModule { }
