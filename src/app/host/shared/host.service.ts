import {Injectable} from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs";
import { Host } from './host.model';

@Injectable()

export class HostService {
    host : Host;

    

    constructor(public http : Http ){}

    login(host){
        const body = JSON.stringify(host);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('/api/host-login',body,{headers:headers})
                .map((response:Response)=>response.json())
                .catch((error: Response) => {
                    return Observable.throw(error.json());
                });
                
        }

    signup(host){
        const body = JSON.stringify(host);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('/api/host',body,{headers:headers})
                    .map((response:Response)=>response.json());
    }


    addEvent(event){
        const body = JSON.stringify(event);
        const headers = new Headers({'content-type':'application/json'});
        return this.http.post('/api/addEvent',body,{headers:headers})
                    .map((response:Response)=>response.json());
    }

    getEvents(){
        return this.http.get('/api/getEvents')
        .map((response:Response)=>response.json());
    }

    updateProfile(host){
        const body = JSON.stringify(host);
        const headers = new Headers({'content-type':'application/json'});
        const token = localStorage.getItem('token');
        return this.http.patch('/update'+token,body,{headers:headers})
        .map((response:Response)=>response.json());

    }

    // getCities() {
    //     return this.http.get('showcase/resources/data/countries.json')
    //                 .toPromise()
    //                 .then(res => <any[]> res.json().data)
    //                 .then(data => { return data; });
    // }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

}