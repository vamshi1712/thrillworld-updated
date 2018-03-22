import { Component, OnInit } from '@angular/core';
import { HostService } from '../../shared/host.service';


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor(private hostservice : HostService) { }

  ngOnInit() {
    this.Events();
  }


  Events(){
    this.hostservice.getEvents()
    .subscribe(data => {
      console.log(data);

  });
  }
}
