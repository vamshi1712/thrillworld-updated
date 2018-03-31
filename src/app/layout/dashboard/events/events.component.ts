import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any;

  constructor(private authservice  : AuthService , private router : Router) { }
  ngOnInit(){
    this.Events();
  }

  Events(){
    this.authservice.getEvents()
    .subscribe(data => {
      console.log(data);
      this.events=data;

  });
  }

  gotoActivity(id){
    this.router.navigate(['/layout/activity',id])
  }

}
