import {Injectable} from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { User } from '../models/user.model';

@Injectable()

export class AuthService {
    user : User;

    

    constructor(public http : Http ){}

    login(user){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('/api/login',body,{headers:headers})
                .map((response:Response)=>response.json());
                
                
        }

    signup(user){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('/api/user',body,{headers:headers})
                    .map((response:Response)=>response.json());
                    
    }

    updateProfile(user){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type':'application/json'});
        // const token = localStorage.getItem('token');
        return this.http.patch('/api/profile-update/${userid}',body,{headers:headers})
        .map((response:Response)=>response.json());

    }

    updatePass(user){
        const body = JSON.stringify(user);
        const headers = new Headers({'content-type':'application/json'});
        // const token = localStorage.getItem('token');
        return this.http.patch('/api/password-update/{user._id}',body,{headers:headers})
        .map((response:Response)=>response.json());
    }

    getEvents(){
        return this.http.get('/api/getEvents')
        .map((response:Response)=>response.json());
    }
    
    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

}