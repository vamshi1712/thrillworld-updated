import { Component, OnInit } from '@angular/core';
import { HostService } from '../../shared/host.service';

@Component({
  selector: 'host-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class HostAvailabilityComponent implements OnInit {

  constructor(private hostservice : HostService) { }

  ngOnInit() {

    const hostid = localStorage.getItem('hostId');

    this.hostservice.getEventsofHost(hostid)
        .subscribe(data=>{
          console.log(data);
        });
  }
  panelOpenState: boolean = false;
  value: Date;
  date : any;
  text: string;
  
      disabled: boolean = true;
  
      toggleDisabled() {
          this.disabled = !this.disabled;
      }

      dateChange(){
        
      }

}
