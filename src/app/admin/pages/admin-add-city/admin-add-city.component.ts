import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { City } from '../../shared/city.model';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'app-admin-add-city',
  templateUrl: './admin-add-city.component.html',
  styleUrls: ['./admin-add-city.component.scss']
})
export class AdminAddCityComponent implements OnInit {

  profileForm : FormGroup;

  constructor(private adminservice : AdminService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl(null,Validators.required)
  });
  }

  onSubmit(profileForm){
    const city = new City(
      this.profileForm.value.name
      );
    console.log(city);
    this.adminservice.addcity(city)
    .subscribe(data => {
          console.log(data);
  
      });
    this.profileForm.reset();
}

}
