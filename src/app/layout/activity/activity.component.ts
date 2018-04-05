import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services/user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Booking } from '../../shared/models/booking.model';
import { Relation } from '../../shared/models/relation';
import { Review } from '../../host/shared/event.model';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
    packages: any[];
    event: any;
  public sliders: Array<any> = [];
  
  dates: Date[];

      rangeDates: Date[];
      date : Date ;

      minDate: Date;
  
      maxDate: Date;
  
      es: any;
      tr:any;
  
      invalidDates: Array<Date>
  

  constructor ( private _route : ActivatedRoute , private authservice : AuthService) {

    


    

 

   }

   getEvent(id){
       this.authservice.getEvent(id)
            .subscribe(data=>{
                console.log(data);
                data.images=data.images.split(",");
                this.event=data;
                this.packages = data.packages;
                for( let i=0 ; i<this.event.images.length; i++){
                    
                            this.sliders.push(
                                {
                                    imagePath: this.event.images[i],
                                    label: this.event.title
                                }
                               
                            );
                    
                        }
                
            });


            
   }

  ngOnInit() {
    
    const id = this._route.snapshot.params.id;
    this.getEvent(id);

    this.reviewForm = new FormGroup({
        comment : new FormControl(null, Validators.required),
        cleanliness : new FormControl(null, Validators.required),
        comfort : new FormControl(null, Validators.required),
        location : new FormControl(null, Validators.required),
        facilities : new FormControl(null, Validators.required),
        staff : new FormControl(null, Validators.required),
        valueformoney : new FormControl(null, Validators.required)
    });

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

    this.tr = {
        firstDayOfWeek : 1
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

  myForm : FormGroup;
  reviewForm : FormGroup;

  
  
  onSubmit(myForm){
    console.log(this.date);
    const userid = localStorage.getItem('userId');
    const id = this._route.snapshot.params.id;
    const eventid = id;
    
    let date = this.myForm.value.date;
    let dateupdated= date.getDate()+ '/' + (date.getMonth() + 1) + '/' +  date.getFullYear();

    const booking = new Booking (dateupdated,
      this.myForm.value.numofadults,  
      this.myForm.value.numofchilds,
      userid,
      eventid
     ); 
    
      console.log(booking);
  
      this.authservice.makeBooking(booking)
          .subscribe(data=>{
            console.log(data);
            this.relation(data._id);
          });
  
      this.myForm.reset();
      
  }

  relation(id){

    const eventid = this._route.snapshot.params.id;
    const userid = localStorage.getItem('userId');
    const hostid = this.event.hostid;

    const relation = new Relation(
        userid,
        id,
        eventid,
        hostid
    );
    console.log(relation);

    this.authservice.addRelation(relation)
        .subscribe(data=>{
            console.log(data);
        });

  }




















  open(){
    document.getElementById('id01').style.display='block';
  }

  close(){
    document.getElementById('id01').style.display='none';
  }

  submitreview(reviewForm){

    document.getElementById('id01').style.display='none';

    const eventid = this._route.snapshot.params.id;
    const userid = localStorage.getItem('userId');

    const review = new Review (this.reviewForm.value.comment,
      this.reviewForm.value.cleanliness,
      this.reviewForm.value.comfort,
      this.reviewForm.value.location,
      this.reviewForm.value.facilities,
      this.reviewForm.value.staff,
      this.reviewForm.value.valueformoney,
      userid,
      eventid
     ); 

     console.log(review);
     this.reviewForm.reset();
  }
  
















}