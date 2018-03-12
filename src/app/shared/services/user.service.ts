import {Injectable} from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { User } from '../models/user.model';

@Injectable()

export class AuthService {
    user : User;

    BaseUrl = 'http://localhost:3000/user';

    constructor(public http : Http ){}

    login(user){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post(`${this.BaseUrl}`+'/login',body,{headers:headers})
                .map((response:Response)=>response.json());
                
                
        }

    signup(user){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post(`${this.BaseUrl}`+'/signup',body,{headers:headers})
                    .map((response:Response)=>response.json());
                    
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

}