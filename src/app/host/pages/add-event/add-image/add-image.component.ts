import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {FileUpload, FileUploadModule} from 'primeng/primeng';
import { FileUploader } from 'ng2-file-upload';
import { RequestOptions, Http ,Headers,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'add-image',
  templateUrl: './add-image.component.html'
})
export class AddImageComponent implements OnInit {

    ngOnInit(){

    }

    constructor(private http:Http){}

     uploader:FileUploader = new FileUploader({url:'http://localhost:3000/api/upload'});


     uploadedFiles: any[] = [];

     onUpload(event) {
         this.fileChange(event);
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
    
        
    }


     fileChange(event) {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            
            /** No need to include Content-Type in Angular 4 */
            // headers.append('Content-Type', 'multipart/form-data');
            // headers.append('Accept', 'application/json');
            const headers = new Headers({'content-type':'multipart/form-data'});
            this.http.post('http://localhost:3000/api/upload', formData, {headers:headers})
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log(data),
                    error => console.log(error)
                );
        }
    }
}