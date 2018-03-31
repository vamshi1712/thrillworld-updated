import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DISABLED } from '@angular/forms/src/model';
import { Host } from '../../shared/host.model';
import { Router } from '@angular/router';
import { HostService } from '../../shared/host.service';
import { RequestOptions, Http ,Headers,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.scss']
})
export class HostProfileComponent implements OnInit {

 
  
  profileForm: FormGroup;
  photoForm: FormGroup;
  host : Host;
  countries: string[] = ['USA', 'UK', 'Canada'];

  constructor( private router : Router,
               private authservice : HostService,
              private http : Http) { }

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
    const host = new Host(
      this.profileForm.value.email,      
      this.profileForm.value.fullname,
      this.profileForm.value.phone,
      );
    console.log(host);
    this.authservice.updateProfile(host)
    .subscribe(data => {
          console.log(data);
  
      });
    this.profileForm.reset();
}

selectedFile : any;
filesToUpload : any;
uploadedFiles: any[] = [];
propic : any;




onFileSelected(event){
    console.log(event);
   
    this.selectedFile = event.srcElement.files[0];
        
    
}

onUpload(){
    const formData:FormData = new FormData();
    

        formData.append('HostAvatar', this.selectedFile, this.selectedFile.name );
        this.uploadedFiles = this.selectedFile;
        
        this.http.post('http://localhost:3000/api/uploadHostAvatar',formData)
                .subscribe(res=>{
                    this.propic = res;
                });

    
}

      

}
