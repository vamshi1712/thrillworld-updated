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


    const hostid = localStorage.getItem('hostId');
    this.hostservice.getBookingsofHost(hostid)
        .subscribe(data=>{
          console.log(data);
         
          let result : any = data;

        });
  }



 
  
      


  dateChange(date){

    let dateupdated=date.getDate()+ '/' + (date.getMonth() + 1) + '/' +  date.getFullYear();

    const booking = new Booking(dateupdated);
    
    this.hostservice.todayBookings(booking)
    .subscribe(data=>{
      console.log(data);
    });
    
  }


}
