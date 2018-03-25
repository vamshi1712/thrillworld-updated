import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HostService } from '../../shared/host.service';
import { Events } from '../../shared/event.model';
import { Message } from 'primeng/api';
import { RequestOptions, Http } from '@angular/http';
import {  Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import {FileUpload, FileUploadModule} from 'primeng/primeng';


@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  myForm : FormGroup;
  event : Events; 
  msgs: Message[];
  values: string[];
  value: Date;
  textarea: string;
  uploadedFiles: any[] = [];
  fileToUpload: File = null;

  constructor( private router : Router ,
                private hostservice : HostService) { }

  ngOnInit(){
    this.myForm = new FormGroup({
        title: new FormControl(null, Validators.required),
        phone: new FormControl(null, Validators.required),
        type: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        location: new FormControl(null, Validators.required),
        pkgname: new FormControl(null, Validators.required),
        pkgpriceperadult: new FormControl(null, Validators.required), 
        pkgpriceperchild: new FormControl(null, Validators.required), 
        pkgincludes : new FormControl(null, Validators.required),
        fromdate : new FormControl(null, Validators.required),
        todate : new FormControl(null, Validators.required),
        numofdays : new FormControl(null, Validators.required),
        textarea : new FormControl(null, Validators.required),
        pincode: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required)
    });
}

// filterCity(event) {
//   let query = event.query;
//   this.hostservice.getCities().then(cities => {
//       this.filteredCity = this.filterCity(query, cities);
//   });
// }


// onUpload(event) {
// //   for(let file of event.files) {
// //       this.uploadedFiles.push(file);
// //   }
//   this.msgs = [];
//   this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
// }



onSubmit(myForm){
  
    const event = new Events (this.myForm.value.title,
                            this.myForm.value.phone,  
                            this.myForm.value.type,  
                            this.myForm.value.description, 
                            this.myForm.value.pkgname, 
                            this.myForm.value.pkgincludes,
                            this.myForm.value.pkgpriceperadult,
                            this.myForm.value.pkgpriceperchild,
                            this.myForm.value.fromdate,  
                            this.myForm.value.todate,  
                            this.myForm.value.numofdays,  
                            this.myForm.value.textarea,
                            this.myForm.value.location,  
                            this.myForm.value.address,
                            this.myForm.value.pincode, 
                            true
                        
                           ); 
    console.log(event);

    this.hostservice.addEvent(event)
    .subscribe(data => {
        console.log(data);
        
        
    });
    this.myForm.reset();
    
}



}
