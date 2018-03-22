import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public sliders: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.sliders.push(
      {
          imagePath: 'assets/gallery/p051v6vn.jpg',
          label: 'Title of the activity',
          text:
              'Nulla vitae elit libero, a pharetra augue mollis interdum.'
      }
  );
  }

}
