import { Component, OnInit } from '@angular/core';
import { HostService } from '../../shared/host.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodayBookings } from '../../shared/event.model';
import { Booking } from '../../../shared/models/booking.model';

@Component({
  selector: 'host-bookings',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})



 
export class HostBookingComponent implements OnInit {

  constructor(private hostservice  : HostService) { }

  date : any;
  myForm : FormGroup;

  ngOnInit() {


    // this.hostservice.getBookings(eventid)
    //     .subscribe(data=>{
    //       console.log(data);
    //       console.log(data[0].date);
    //       let result : any = data;

    //     });
  }

 
  
      


  dateChange(date){

    const booking = new Booking(date)
    
    this.hostservice.todayBookings(booking)
    .subscribe(data=>{
      console.log(data);
    });
    
  }


}
