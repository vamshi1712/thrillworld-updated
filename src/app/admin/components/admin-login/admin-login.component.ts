import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../shared/admin.model';
import { routerTransition } from '../../../router.animations';
import { AdminService } from '../../shared/admin.service';


@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  myForm : FormGroup;
  admin:Admin;

  constructor( private router : Router, private adminservice : AdminService) { }

  ngOnInit(){
    this.myForm = new FormGroup({
        email: new FormControl(null, [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]),
        password: new FormControl(null, Validators.required)
        
    });
}

onSubmit(myForm){
  
    const admin = new Admin(this.myForm.value.email , this.myForm.value.password,true);
    console.log(admin);

    this.adminservice.login(admin)
    .subscribe(data => {
        console.log(data);
        
        // if(data.success == true){
        //     localStorage.setItem('token', data.token);
        //     localStorage.setItem('userId', data.userId);
        //     this.router.navigate(['/layout','body']);
        //   }
        //   else{
        //     this.router.navigate(['/layout','admin-login']);
        //   }
    });
    this.myForm.reset();
    
}

gotosignin(){
    this.router.navigate(['/admin-signup']);
   }

}
