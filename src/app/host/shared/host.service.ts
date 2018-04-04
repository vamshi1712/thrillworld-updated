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

    getEventsofHost(id){
        return this.http.get('/api/event/'+id)
        .map((response:Response)=>response.json());  
    }


    getHost(id){
        return this.http.get('/api/host/'+id)
        .map((response:Response)=>{
            response.json();
            console.log(response);
        });
    }

    

    updateProfile(host){
        const body = JSON.stringify(host);
        const headers = new Headers({'content-type':'application/json'});
        // const token = localStorage.getItem('token');
        const id = localStorage.getItem('hostId');
        return this.http.put(`/api/host-profile/`+id ,body,{headers:headers})
        .map((response:Response)=>response.json());

    }

    updatePass(pass){
        const body = JSON.stringify(pass);
        console.log(body);
        const headers = new Headers({'content-type':'application/json'});
        const id = localStorage.getItem('hostId');
        // const token = localStorage.getItem('token');
        return this.http.put('/api/host-pass/'+id ,body,{headers:headers})
        .map((response:Response)=>response.json());
    }

    getCities(){
        return this.http.get('/api/getCities')
        .map((response:Response)=>response.json());
    }

    

    getBookings(hostid){
        return this.http.get('/api/getbookings/'+hostid)
        .map((response:Response)=>response.json());
    }


    getEvent(id){
        
        return this.http.get('/api/event/'+id)
        .map((response:Response)=>response.json());
    }

    todayBookings(booking){
        const body = JSON.stringify(booking);
        return this.http.get('/api/todaybooking',body)
        .map((response:Response)=>response.json());
    }
    

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

}