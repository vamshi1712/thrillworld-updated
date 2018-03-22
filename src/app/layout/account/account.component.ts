import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { FileSelectDirective , FileUploader} from 'ng2-file-upload';


var uri : 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  profileForm : FormGroup;
  countries: string[] = ['USA', 'UK', 'Canada'];



  uploader:FileUploader = new FileUploader({url : uri});

  attachmentList : any = [];





  constructor( ) {
    this.uploader.onCompleteItem = (item:any , response : any,status:any, headers : any)=>{
      
      this.attachmentList.push(JSON.parse(response));
    }
   }




  ngOnInit() {

   
    
  }

}
