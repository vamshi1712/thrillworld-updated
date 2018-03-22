import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  public sliders: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.sliders.push(
      {
          imagePath: 'assets/o-NEW-YORK.jpg',
          label: 'Title of the activity',
          text:
              'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      }
  );
  }

}
