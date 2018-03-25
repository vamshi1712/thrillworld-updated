import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { routerTransition } from '../../../router.animations';
import { Host } from '../../shared/host.model';
import { HostService } from '../../shared/host.service';


@Component({
  selector: 'app-host-signup',
  templateUrl: './host-signup.component.html',
  styleUrls: ['./host-signup.component.scss']
})
export class HostSignupComponent implements OnInit {

  registerForm: FormGroup;
  countries: string[] = ['USA', 'UK', 'Canada'];
  
    constructor(
      private router : Router,
      private hostservice : HostService
    ) {}

    ngOnInit(){
      this.registerForm = new FormGroup({
          email: new FormControl(null, [
              Validators.required,
              Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]),
          password: new FormControl(null, [Validators.required,Validators.minLength(10)]),
          confirmpassword: new FormControl(null, [Validators.required,Validators.minLength(10),this.matchOtherValidator('password')]),
          fullname: new FormControl(null,Validators.required),
          location: new FormControl(null,Validators.required),
          pincode: new FormControl(null,Validators.required),
          phone: new FormControl(null,Validators.required)
      });
  }


  onSubmit(registerForm){
      const host = new Host(
                        this.registerForm.value.email, 
                         this.registerForm.value.fullname,
                         this.registerForm.value.phone,
                         this.registerForm.value.password, 
                         this.registerForm.value.location,
                         this.registerForm.value.pincode,
                         false,
                         true
                         );
      console.log(host);
      this.hostservice.signup(host)
      .subscribe(data => {
            console.log(data);
            if(data.success == true){
              localStorage.setItem('token', data.token);
              localStorage.setItem('hostId', data.hostId);
              this.router.navigate(['/host-dashboard']);
            }
            else{
              this.router.navigate(['/host-login']);
            }
            
        })
      this.registerForm.reset();
  }



  //password match funtion

  matchOtherValidator (otherControlName: string) {
    
      let thisControl: FormControl;
      let otherControl: FormControl;
    
      return function matchOtherValidate (control: FormControl) {
    
        if (!control.parent) {
          return null;
        }
    
        // Initializing the validator.
        if (!thisControl) {
          thisControl = control;
          otherControl = control.parent.get(otherControlName) as FormControl;
          if (!otherControl) {
            throw new Error('matchOtherValidator(): other control is not found in parent group');
          }
          otherControl.valueChanges.subscribe(() => {
            thisControl.updateValueAndValidity();
          });
        }
    
        if (!otherControl) {
          return null;
        }
    
        if (otherControl.value !== thisControl.value) {
          return {
            matchOther: true
          };
        }
    
        return null;
    
      }
    
    }

}
