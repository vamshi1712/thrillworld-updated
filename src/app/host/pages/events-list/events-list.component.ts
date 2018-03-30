import { Component, OnInit } from '@angular/core';
import { HostService } from '../../shared/host.service';


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {


  events : Event[]=[]

  event : Event;

  


  constructor(private hostservice : HostService  ) { }

  ngOnInit() {
    this.Events();
  }

  display: boolean = false;
  
      showDialog() {
          this.display = true;
      }
  

  Events(){

    
    const hostid = localStorage.getItem('hostId');

    this.hostservice.getEvents()
    .subscribe(data => {
      console.log(data);

      this.events=data;

  });
  }

  getEvent(id){
    
    this.hostservice.getEvent(id)
    .subscribe(data => {
      console.log(data);
  });
  }
}

