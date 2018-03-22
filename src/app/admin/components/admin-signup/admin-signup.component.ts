import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../shared/admin.model';
import { routerTransition } from '../../../router.animations';
import { AdminService } from '../../shared/admin.service';


@Component({
  selector: 'admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {

  registerForm: FormGroup;
  
    constructor(
      private router : Router, private adminservice : AdminService
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
          phone: new FormControl(null,Validators.required)
      });
  }


  onSubmit(registerForm){
      const admin = new Admin(this.registerForm.value.email ,
                         this.registerForm.value.password,
                         true,
                         this.registerForm.value.fullname,
                         this.registerForm.value.phone
                         );
      console.log(admin);
      this.adminservice.signup(admin)
      .subscribe(data => {
            console.log(data);
            // if(data.success == true){
            //   localStorage.setItem('token', data.token);
            //   localStorage.setItem('userId', data.userId);
            //   this.router.navigate(['/layout','body']);
            // }
            // else{
            //   this.router.navigate(['/layout','admin-login']);
            // }
            
        });
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
