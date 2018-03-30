import { Component, OnInit } from '@angular/core';
import { Events } from '../../../host/shared/event.model';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/admin.service';
import {startWith} from 'rxjs/operators/startWith';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-admin-add-event',
  templateUrl: './admin-add-event.component.html',
  styleUrls: ['./admin-add-event.component.scss']
})
export class AdminAddEventComponent implements OnInit {

  myForm : FormGroup;
  event : Events; 
  values: string[];
  value: Date;
  textarea: string;
  uploadedFiles: any[] = [];    
  fileToUpload: File = null;

  constructor( private router : Router ,
                private adminservice : AdminService) { }

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

    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(val => this.filter(val))
      );
}

myControl: FormControl = new FormControl();
options = ['One', 'Two', 'Three'];
filteredOptions: Observable<string[]>;




  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }




filteredCity: any[];

filterCity(event) {
  let query = event.query;
  this.adminservice.getCities().subscribe(cities => {
      console.log(cities);
      this.filteredCity = this.filterCities(query, cities);
  });
}


filterCities(query, cities: any[]):any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    for(let i = 0; i < cities.length; i++) {
        let city = cities[i];
        if(city.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(city.name);
        }
    }
    return filtered;
}


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

    this.adminservice.addEvent(event)
    .subscribe(data => {
        console.log(data);
        
        // if(data.success == true){
        //     localStorage.setItem('token', data.token);
        //     localStorage.setItem('userId', data.userId);
        //     this.router.navigate(['/layout','body']);
        //   }
        //   else{
        //     this.router.navigate(['/layout','login']);
        //   }
    });
    this.myForm.reset();
    
}



}
