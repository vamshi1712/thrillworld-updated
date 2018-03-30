import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private authservice  : AuthService , private router : Router) { }
  ngOnInit(){
    this.Events();
  }

  Events(){
    this.authservice.getEvents()
    .subscribe(data => {
      console.log(data);

  });
  }

  gotoActivity(){
    this.router.navigate(['/layout','activity'])
  }

}
