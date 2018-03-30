import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  gotoCity(){
    this.router.navigateByUrl('/layout/city');
  }

}
