import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'host-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class HostAvailabilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  panelOpenState: boolean = false;
  value: Date;

}
