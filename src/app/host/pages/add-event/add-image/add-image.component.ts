import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {FileUpload, FileUploadModule} from 'primeng/primeng';
import { FileUploader } from 'ng2-file-upload';
import { RequestOptions, Http ,Headers,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'add-image',
  templateUrl: './add-image.component.html'
})
export class AddImageComponent implements OnInit {


  

    ngOnInit(){

    }

    constructor(private http:Http){
       
    }

    public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/api/upload'});

    selectedFile : any;
    filesToUpload : any;
    uploadedFiles: any[] = [];




    onFileSelected(event){
        console.log(event);
       

        console.log(event.target.files.length);
        
                  for(let i=0 ; i<event.target.files.length;i++){
                    this.selectedFile = event.srcElement.files[i];
                    this.onUpload();
                  }
            
        
    }

    onUpload(){
        const formData:FormData = new FormData();
        

            formData.append('image', this.selectedFile, this.selectedFile.name );
            this.uploadedFiles = this.selectedFile;
            
            this.http.post('http://localhost:3000/api/upload',formData)
                    .subscribe(res=>{
                        console.log(res);
                    });

        
    }


    
    



















  

     
}