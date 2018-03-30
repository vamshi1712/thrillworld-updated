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

  date5: Date;
  dates: Date[];
  
      rangeDates: Date[];
  
      minDate: Date;
  
      maxDate: Date;
  
      es: any;
  
      invalidDates: Array<Date>


  constructor() { }

  ngOnInit() {

    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

  

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month -1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;
  this.minDate = new Date();
  this.minDate.setMonth(prevMonth);
  this.minDate.setFullYear(prevYear);
  this.maxDate = new Date();
  this.maxDate.setMonth(nextMonth);
  this.maxDate.setFullYear(nextYear);

  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];



    this.myForm = new FormGroup({
      date: new FormControl(null, Validators.required),
      numofadults: new FormControl(null, Validators.required),
      numofchilds: new FormControl(null, Validators.required)
    
  });
  }


onSubmit(myForm){


  const booking = new Booking (this.myForm.value.date,
    this.myForm.value.numofadults,  
    this.myForm.value.numofchilds,
    
     
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
