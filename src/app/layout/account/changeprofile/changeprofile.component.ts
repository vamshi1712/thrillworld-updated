import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-changeprofile',
  templateUrl: './changeprofile.component.html',
  styleUrls: ['./changeprofile.component.scss']
})
export class ChangeprofileComponent implements OnInit {

  profileForm : FormGroup;
  countries: string[] = ['USA', 'UK', 'Canada'];

  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      email: new FormControl(null, [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      isMarried: new FormControl(null,Validators.required ),
      fullname: new FormControl(null,Validators.required),
      location: new FormControl(null,Validators.required),
      pincode: new FormControl(null,Validators.required),
      phone: new FormControl(null,Validators.required)
  });
  }

}
