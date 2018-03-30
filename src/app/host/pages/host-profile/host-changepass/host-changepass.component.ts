import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HostService } from '../../../shared/host.service';
import { Host } from '../../../shared/host.model';
import { Pass } from '../../../shared/pass.model';

@Component({
  selector: 'app-host-changepass',
  templateUrl: './host-changepass.component.html',
  styleUrls: ['./host-changepass.component.scss']
})
export class HostChangepassComponent implements OnInit {

  profileForm : FormGroup;
  
    constructor(private hostservice : HostService) { }
  
    ngOnInit() {
      this.profileForm = new FormGroup({ 
        password: new FormControl(null, [Validators.required,Validators.minLength(10)]),
        confirmpassword: new FormControl(null, [Validators.required,Validators.minLength(10),this.matchOtherValidator('password')])
    });
    }
  
    onSubmit(profileForm){
      const pass = new Pass(
        this.profileForm.value.password
        
        );
        console.log(pass);
      this.hostservice.updatePass(pass)
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
