import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { Host } from '../../shared/host.model';
import { Router } from '@angular/router';
import { HostService } from '../../shared/host.service';

@Component({
  selector: 'host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.scss']
})
export class HostProfileComponent implements OnInit {

 
  
  profileForm: FormGroup;
  host : Host;
  countries: string[] = ['USA', 'UK', 'Canada'];

  constructor( private router : Router, private authservice : HostService) { }

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
    const host = new Host(
      this.profileForm.value.email,      
      this.profileForm.value.fullname,
      this.profileForm.value.phone,
      );
    console.log(host);
    this.authservice.updateProfile(host)
    .subscribe(data => {
          console.log(data);
  
      });
    this.profileForm.reset();
}
      

}
