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

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

}