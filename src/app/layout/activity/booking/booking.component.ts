import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Booking } from '../../../shared/models/booking.model';
import { AuthService } from '../../../shared/services/user.service';
import { Review } from '../../../host/shared/event.model';

@Component({
  selector: 'reviews',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  
  reviewForm : FormGroup;

  ngOnInit(){

    

  }

  


}
