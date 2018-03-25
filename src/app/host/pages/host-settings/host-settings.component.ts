import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'host-settings',
  templateUrl: './host-settings.component.html',
  styleUrls: ['./host-settings.component.scss']
})
export class HostSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notifications: boolean = false;

}
