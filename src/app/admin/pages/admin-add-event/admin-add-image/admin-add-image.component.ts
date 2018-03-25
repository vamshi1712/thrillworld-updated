import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'admin-add-image',
  templateUrl: './admin-add-image.component.html',
  styleUrls: ['./admin-add-image.component.scss']
})
export class AdminAddImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploader:FileUploader = new FileUploader({url:'http://localhost:3000/api/upload'});
  
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
              // this.http.post('http://localhost:3000/api/upload', formData, {headers:headers})
              //     .map(res => res.json())
              //     .catch(error => Observable.throw(error))
              //     .subscribe(
              //         data => console.log(data),
              //         error => console.log(error)
              //     )
          }
      }

}
