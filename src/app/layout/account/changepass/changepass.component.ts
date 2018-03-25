import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../shared/services/user.service';
import { UserPass } from '../../../shared/models/user-pass.model';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {

  profileForm : FormGroup;

  constructor(private authservice : AuthService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({ 
      password: new FormControl(null, [Validators.required,Validators.minLength(10)]),
      confirmpassword: new FormControl(null, [Validators.required,Validators.minLength(10),this.matchOtherValidator('password')])
  });
  }


  onSubmit(profileForm){
    const user = new UserPass(
      this.profileForm.value.password
      );
    this.authservice.updatePass(user)
                    .subscribe(data=>{
                      console.log(data);
                    });
  }



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
