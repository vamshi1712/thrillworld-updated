import { Component, OnInit } from '@angular/core';
import { HostService } from '../../shared/host.service';


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  visibleSidebar1;
  visibleSidebar2;
  visibleSidebar3;
  visibleSidebar4;
  events : Event[]=[]

  event : Event;

  openNav() {
    document.getElementById("myNav").style.width = "75%";
}

 closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


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
    
        this.hostservice.getEventsofHost(hostid)
            .subscribe(data=>{
              this.events = data;
            });

  }

  getEvent(id){
    
    this.hostservice.getEvent(id)
    .subscribe(data => {
      console.log(data);
  });
  }
}

