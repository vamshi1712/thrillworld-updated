import {Injectable} from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";

import { Admin } from './admin.model';

@Injectable()

export class AdminService {
    admin : Admin;

    BaseUrl = 'http://localhost:3000/admin';

    constructor(public http : Http ){}

    login(admin){
        const body = JSON.stringify(admin);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('/api/admin-login',body,{headers:headers})
                .map((response:Response)=>response.json())
                .catch((error: Response) => {
                    return Observable.throw(error.json());
                });
                
        }

    signup(admin){
        const body = JSON.stringify(admin);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('/api/admin',body,{headers:headers})
                    .map((response:Response)=>response.json());
    }

    getEvents(){
        return this.http.get('/api/getEvents')
        .map((response:Response)=>response.json());
    }

    getMerchants(){
        return this.http.get('/api/getMerchants')
        .map((response:Response)=>response.json());
    }

    addEvent(event){
        const body = JSON.stringify(event);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('/api/addEvent',body,{headers:headers})
                    .map((response:Response)=>response.json());
    }

    updateProfile(admin){
        const body = JSON.stringify(admin);
        const headers = new Headers({'content-type':'application/json'});
        // const token = localStorage.getItem('token');
        const id = localStorage.getItem('hostId');
        return this.http.put(`/api/host-profile/`+id ,body,{headers:headers})
        .map((response:Response)=>response.json());

    }

    updatePass(admin){
        const body = JSON.stringify(admin);
        const headers = new Headers({'content-type':'application/json'});
        const id = localStorage.getItem('hostId');
        // const token = localStorage.getItem('token');
        return this.http.put('/api/host-pass/'+id ,body,{headers:headers})
        .map((response:Response)=>response.json());
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

}