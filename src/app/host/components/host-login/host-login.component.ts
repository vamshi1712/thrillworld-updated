import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Host } from '../../shared/host.model';
import { routerTransition } from '../../../router.animations';
import { HostService } from '../../shared/host.service';
import { HostLogin } from '../../shared/host-login.model';


@Component({
  selector: 'app-host-login',
  templateUrl: './host-login.component.html',
  styleUrls: ['./host-login.component.scss']
})
export class HostLoginComponent implements OnInit {

  myForm : FormGroup;
  host:Host;

  constructor( private router : Router , private hostservice : HostService) { }

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
  
    const host = new Host( this.myForm.value.email,null,null,this.myForm.value.password);
    console.log(host);

    this.hostservice.login(host)
    .subscribe(data => {
        console.log(data);
        console.log(data.hostId);
        
        if(data.success == true){
            localStorage.setItem('token', data.token);
            localStorage.setItem('hostId', data.hostId);
            
            this.router.navigate(['/host-dashboard']);
          }
          else{
            this.router.navigate(['/host-login']);
          }
    });
    this.myForm.reset();

    
    
}

gotosignin(){
    this.router.navigate(['/host-signup']);
   }
}
