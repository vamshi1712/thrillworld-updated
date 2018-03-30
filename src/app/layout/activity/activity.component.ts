import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public sliders: Array<any> = [];
  date5: Date;
  dates: Date[];
  
      rangeDates: Date[];
  
      minDate: Date;
  
      maxDate: Date;
  
      es: any;
  
      invalidDates: Array<Date>
  

  constructor() {
    this.sliders.push(
      {
          imagePath: 'assets/gallery/Kamshet/Paragliding at Kamshet/Paragliding in kamshet profile.jpg',
          label: 'ParaGliding',
          text:
              'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      },
      {
          imagePath: 'assets/gallery/Kamshet/Paragliding at Kamshet/Paragliding-in-Kamshet--Thrillworld.jpg',
          label: 'Paragliding',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
          imagePath: 'assets/images/slider3.jpg',
          label: 'Third slide label',
          text:
              'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
      }
  );


   }

  ngOnInit() {

    
    
  }


}