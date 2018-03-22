import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Booking } from '../../../shared/models/booking.model';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  
  myForm : FormGroup;


  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      date: new FormControl(null, Validators.required),
      numofadults: new FormControl(null, Validators.required),
      numofchilds: new FormControl(null, Validators.required)
    
  });
  }


onSubmit(myForm){
  const booking = new Booking (this.myForm.value.date,
    this.myForm.value.numofadults,  
    this.myForm.value.numofchilds
     
   ); 
  
    console.log(booking);

    // this.authservice.login(host)
    // .subscribe(data => {
    //     console.log(data);
        
    //     if(data.success == true){
    //         localStorage.setItem('token', data.token);
    //         localStorage.setItem('userId', data.userId);
    //         this.router.navigate(['/layout','body']);
    //       }
    //       else{
    //         this.router.navigate(['/layout','login']);
    //       }
    // });
    this.myForm.reset();
    
}

}
