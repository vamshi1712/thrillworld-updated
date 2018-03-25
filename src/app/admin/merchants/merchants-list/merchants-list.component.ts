import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { Host } from '../../../host/shared/host.model';

@Component({
  selector: 'admin-merchants-list',
  templateUrl: './merchants-list.component.html',
  styleUrls: ['./merchants-list.component.scss']
})
export class MerchantsListComponent implements OnInit {

  host : Host[] = [];



  constructor(private adminservice : AdminService) { }

  ngOnInit() {
    this.merchants();
    }

    merchants(){
      this.adminservice.getMerchants()
      .subscribe(data => {
        this.host = data;
        console.log(data);
        
    });
  }
}
