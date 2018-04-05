import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  imgs: any[];

  constructor(private adminservice : AdminService) { }

  events : any;

  visibleSidebar1
  
  
  openSearch(){
    document.getElementById('myOverlay').style.display = 'none'
  }
  closeSearch(){
    document.getElementById('myOverlay').style.display = 'block'
  }
     
  
      

  ngOnInit() {

    
      this.adminservice.getnonpermittedEvents()
          .subscribe(data=>{
            data.forEach(element => {
              element.images=element.images.split(",");
            });
this.events=data;
            
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
