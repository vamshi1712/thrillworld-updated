import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';

    constructor( public router: Router) {

       
       
    }




    ngOnInit() {}

    
    

    // onLoggedout() {
    //     localStorage.removeItem('isLoggedin');
    // }

    
}
