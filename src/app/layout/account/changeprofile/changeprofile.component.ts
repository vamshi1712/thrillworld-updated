import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-changeprofile',
  templateUrl: './changeprofile.component.html',
  styleUrls: ['./changeprofile.component.scss']
})
export class ChangeprofileComponent implements OnInit {

  profileForm : FormGroup;
  countries: string[] = ['USA', 'UK', 'Canada'];

  constructor(private authservice : AuthService) { }

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
    const user = new User(this.profileForm.value.email,      
      this.profileForm.value.fullname,
      this.profileForm.value.phone,
      );
    console.log(user);
    this.authservice.updateProfile(user)
    .subscribe(data => {
          console.log(data);
  
      });
    this.profileForm.reset();
}

}
