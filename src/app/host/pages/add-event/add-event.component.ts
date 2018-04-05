import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HostService } from '../../shared/host.service';
import { Events, Package } from '../../shared/event.model';
import { Message } from 'primeng/api';
import {startWith} from 'rxjs/operators/startWith';
import { RequestOptions, Http } from '@angular/http';
import { Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {map} from 'rxjs/operators/map';
import { Observable } from "rxjs";
import { FileUpload, FileUploadModule } from 'primeng/primeng';


@Component({
    selector: 'add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
    reviews: any;
    packages: any=[];
    rangeDates : any;
    myForm: FormGroup;
    pkgForm: FormGroup;
    city : any;
    msgs: Message[];
    values: string[];
    pkgs : Package[];
    value: Date;
    textarea: string;
    dateup : any;

    constructor(private router: Router,private http : Http,
        private hostservice: HostService) { }

    ngOnInit() {
        this.myForm = new FormGroup({
            title: new FormControl(null, Validators.required),
            phone: new FormControl(null, Validators.required),
            type: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            location: new FormControl(null, Validators.required),
            daterange: new FormControl(null, Validators.required),
            mempertent : new FormControl(null, Validators.required),
            pricepernight : new FormControl(null, Validators.required),
            numofdays: new FormControl(null, Validators.required),
            textarea: new FormControl(null, Validators.required),
            pincode: new FormControl(null, Validators.required),
            address: new FormControl(null, Validators.required)
        });

        this.pkgForm = new FormGroup({
            pkgname: new FormControl(null, Validators.required),
            pkgpriceperadult: new FormControl(null, Validators.required),
            pkgpriceperchild: new FormControl(null, Validators.required),
            pkgincludes: new FormControl(null, Validators.required),
        });

        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(val => this.filter(val))
          );
    }
    options = ['One', 'Two', 'Three'];
    myControl: FormControl = new FormControl();

    // filterCity(event) {
    //   let query = event.query;
    //   this.hostservice.getCities().then(cities => {
    //       this.filteredCity = this.filterCity(query, cities);
    //   });
    // }

    

    onAdd(pkgForm){
        const pkg = new Package(
            this.pkgForm.value.pkgname,
            this.pkgForm.value.pkgincludes,
            this.pkgForm.value.pkgpriceperadult,
            this.pkgForm.value.pkgpriceperchild,
        );
        this.packages.push(pkg);
        
        this.pkgForm.reset();
    }

    myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }

    }
   



    onSubmit(myForm) {

        let daterange = this.myForm.value.daterange;

        let datefrom = daterange[0].getDate()+ '/' + (daterange[0].getMonth() + 1) + '/' +  daterange[0].getFullYear();
        let dateto = daterange[1].getDate()+ '/' + (daterange[1].getMonth() + 1) + '/' +  daterange[1].getFullYear();

        const id = localStorage.getItem('hostId');

        const event = new Events(this.myForm.value.title,
            this.myForm.value.phone,
            this.myForm.value.type,
            this.myForm.value.description,
            this.packages,
            this.mainimage,
            this.images,
            datefrom,
            dateto,
            this.myForm.value.mempertent,
            this.myForm.value.pricepernight,
            this.myForm.value.numofdays,
            this.myForm.value.location,
            this.myForm.value.address,
            this.myForm.value.pincode,
            this.reviews,
            true,
            id,
            false
        );
        console.log(event);

        this.hostservice.addEvent(event)
            .subscribe(data => {
                console.log(data);
            });
        this.myForm.reset();

    }

    selectedFile : any;
    filesToUpload : any;
    uploadedFiles: any[] = [];
    images : any=[];
    mainimage : any;



    onFileSelected(event){
        console.log(event);
       
        this.selectedFile = event.srcElement.files[0];
        this.oneUpload();
        
        
                  
        
    }

    onFilesSelected(event){
        console.log(event);
       

        console.log(event.target.files.length);
        
                  for(let i=0 ; i<event.target.files.length;i++){
                    this.selectedFile = event.srcElement.files[i];
                    this.onUpload();
                  }
            
        
    }

    oneUpload(){
        const formData:FormData = new FormData();
        

            formData.append('image', this.selectedFile, this.selectedFile.name );
            this.uploadedFiles = this.selectedFile;
            
            this.http.post('http://localhost:3000/api/upload',formData)
                    .subscribe(res=>{
                        let resul : any = res;
                        let result:any=JSON.parse(resul._body);
                        console.log(res);
                        this.mainimage = result.file;
                        console.log(this.mainimage);
                    });

        
    }
    onUpload(){
        const formData:FormData = new FormData();
        

            formData.append('image', this.selectedFile, this.selectedFile.name );
            this.uploadedFiles = this.selectedFile;
            
            this.http.post('http://localhost:3000/api/upload',formData)
                    .subscribe(res=>{
                        let resul : any = res;
                        let result:any=JSON.parse(resul._body);
                        console.log(res);
                        this.images.push(result.file);
                        console.log(this.images);
                    });

        
    }


    filteredOptions: Observable<string[]>;
    
    
    
    
      filter(val: string): string[] {
        return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
      }
    
    
    
    
    filteredCity: any[];
    
    filterCity(event) {
      let query = event.query;
      this.hostservice.getCities().subscribe(cities => {
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




}
