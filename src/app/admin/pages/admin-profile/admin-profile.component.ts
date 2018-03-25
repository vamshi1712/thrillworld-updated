import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Admin } from '../../shared/admin.model';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  profileForm: FormGroup;
  admin : Admin;
  countries: string[] = ['USA', 'UK', 'Canada'];

  constructor( private router : Router, private adminservice : AdminService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      email: new FormControl(null, [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      fullname: new FormControl(null,Validators.required),
      phone: new FormControl(null,Validators.required)
  });
  }

  onSubmit(profileForm){
    const admin = new Admin(
      this.profileForm.value.email,      
      this.profileForm.value.fullname,
      this.profileForm.value.phone,
      );
    console.log(admin);
    this.adminservice.updateProfile(admin)
    .subscribe(data => {
          console.log(data);
  
      });
    this.profileForm.reset();
}
}
