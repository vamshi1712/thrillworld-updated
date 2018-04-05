import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'admin-availability',
  templateUrl: './admin-availability.component.html',
  styleUrls: ['./admin-availability.component.scss']
})
export class AdminAvailabilityComponent implements OnInit {

  constructor(private adminservice : AdminService) { }

  date : any;
  ngOnInit() {
    
        const hostid = localStorage.getItem('hostId');
    
        // this.adminservice.getEventsofHost(hostid)
        //     .subscribe(data=>{
        //       console.log(data);
        //     });
      }
      panelOpenState: boolean = false;
      value: Date;
    
      text: string;
      
          disabled: boolean = true;
      
          toggleDisabled() {
              this.disabled = !this.disabled;
          }

          dateChange(){
            
          }
}
