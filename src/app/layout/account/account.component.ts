import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { FileSelectDirective , FileUploader} from 'ng2-file-upload';
import { Http, Headers, Response } from "@angular/http";


var uri : 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
 

  profileForm : FormGroup;
  countries: string[] = ['USA', 'UK', 'Canada'];
  image : any;


  uploader:FileUploader = new FileUploader({url : uri});

  attachmentList : any = [];





  constructor( private http : Http) {
    this.uploader.onCompleteItem = (item:any , response : any,status:any, headers : any)=>{
      
      this.attachmentList.push(JSON.parse(response));
    }
   }

   selectedFile : any;
   filesToUpload : any;
   uploadedFiles: any[] = [];
   
   
   
   
   onFileSelected(event){
       console.log(event);
      
       this.selectedFile = event.srcElement.files[0];
           
       
   }
   
   onUpload(){
       const formData:FormData = new FormData();
       
   
           formData.append('UserAvatar', this.selectedFile, this.selectedFile.name );
           this.uploadedFiles = this.selectedFile;
           
           this.http.post('http://localhost:3000/api/uploadUserAvatar',formData)
                .map((res:Response)=>res.json())
                   .subscribe(res=>{
                       console.log(res);
                       this.image = res;
                       console.log(this.image.file);
                   });
   
       
   }
   
 


  ngOnInit() {

   
    
  }

}
