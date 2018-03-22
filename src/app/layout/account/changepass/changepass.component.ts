import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit {

  profileForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.profileForm = new FormGroup({ 
      currentpassword : new FormControl(null, [Validators.required,Validators.minLength(10)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(10)]),
      confirmpassword: new FormControl(null, [Validators.required,Validators.minLength(10),this.matchOtherValidator('password')])
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
