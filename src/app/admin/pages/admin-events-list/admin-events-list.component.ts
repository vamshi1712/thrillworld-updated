import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'admin-events-list',
  templateUrl: './admin-events-list.component.html',
  styleUrls: ['./admin-events-list.component.scss']
})
export class AdminEventsListComponent implements OnInit {
  
  events : Event[]=[];
  visibleSidebar1;
  visibleSidebar2;
  visibleSidebar3;
  visibleSidebar4;


  event : Event;

  openNav() {
    document.getElementById("myNav").style.width = "75%";
}

 closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

  constructor(private adminservice : AdminService) { }

  ngOnInit() {
    this.Events();
  }

  display: boolean = false;
  
      showDialog() {
          this.display = true;
      }
  

  Events(){
    this.adminservice.getEvents()
    .subscribe(data => {
      console.log(data);
      this.events = data;

  });
  }
}
