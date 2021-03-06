import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AngularMaterialModule } from '../../shared/primeng/angular-material.module';
import { PrimengModule } from '../../shared/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangepassComponent } from './changepass/changepass.component';
import { ChangeprofileComponent } from './changeprofile/changeprofile.component';
import { FileUploadModule } from 'ng2-file-upload';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';



@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    AngularMaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  declarations: [AccountComponent, 
                ChangepassComponent, 
                ChangeprofileComponent, 
                WishlistComponent, 
                BookingsListComponent]
})
export class AccountModule { }
