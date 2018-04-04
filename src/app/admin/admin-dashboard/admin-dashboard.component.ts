import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminservice : AdminService) { }

  events : any;

  ngOnInit() {

    
      this.adminservice.getnonpermittedEvents()
          .subscribe(data=>{
            this.events = data;
            console.log(data);
          })
    

  }

  getbylocation(){
    const locate = 'jhgh'
    this.adminservice.getbyLocation(locate)
      .subscribe(data=>{
        console.log(data);
      });
  }

  getbyType(){
    const type = 'dkjs'
    this.adminservice.getbyType(type)
      .subscribe(data=>{
        console.log(data);
      });
  }

  getbyTitle(){
    const title = 'hdzh'
    this.adminservice.getbyTitle(title)
      .subscribe(data=>{
        console.log(data);
      });
  }

  display: boolean = false;
  
      showDialog() {
          this.display = true;
      }


      permitEvent(id){
       
        this.adminservice.permit(id)
            .subscribe(data=>{
              console.log(data);
            });
      }

      


}
