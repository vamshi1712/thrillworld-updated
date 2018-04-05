import { Component, OnInit } from '@angular/core';
import { Booking } from '../../../shared/models/booking.model';
import { FormGroup } from '@angular/forms';
import { AdminService } from '../../shared/admin.service';




@Component({
  selector: 'admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.scss']
})
export class AdminBookingsComponent implements OnInit {
  setDob: string;

  constructor(private adminservice  : AdminService) {
    
    
   }
  
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
      console.log(date);
      const booking = new Booking(date);

      // var datePipe = new DatePipe(date);
      // this.setDob = datePipe.transform(date, 'dd/MM/yyyy');
      
      // this.hostservice.todayBookings(booking)
      // .subscribe(data=>{
      //   console.log(data);
      // });
      
    }
}
