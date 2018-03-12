import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Host } from '../../shared/host.model';

@Component({
  selector: 'app-host-login',
  templateUrl: './host-login.component.html',
  styleUrls: ['./host-login.component.scss']
})
export class HostLoginComponent implements OnInit {

  myForm : FormGroup;
  host:Host;

  constructor( private router : Router) { }

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
  
    const host = new Host(this.myForm.value.email , this.myForm.value.password);
    console.log(host);

    // this.authservice.login(host)
    // .subscribe(data => {
    //     console.log(data);
        
    //     if(data.success == true){
    //         localStorage.setItem('token', data.token);
    //         localStorage.setItem('userId', data.userId);
    //         this.router.navigate(['/layout','body']);
    //       }
    //       else{
    //         this.router.navigate(['/layout','login']);
    //       }
    // });
    this.myForm.reset();
    
}

gotosignin(){
    this.router.navigate(['/host-signup']);
   }
}
