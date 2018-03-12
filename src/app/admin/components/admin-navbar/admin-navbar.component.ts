import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  pushRightClass: string = 'push-right';
  
      constructor( public router: Router) {
  
          
  
          this.router.events.subscribe(val => {
              if (
                  val instanceof NavigationEnd &&
                  window.innerWidth <= 992 &&
                  this.isToggled()
              ) {
                  this.toggleSidebar();
              }
          });
      }
  
      ngOnInit() {}
  
      isToggled(): boolean {
          const dom: Element = document.querySelector('body');
          return dom.classList.contains(this.pushRightClass);
      }
  
      toggleSidebar() {
          const dom: any = document.querySelector('body');
          dom.classList.toggle(this.pushRightClass);
      }
  
      rltAndLtr() {
          const dom: any = document.querySelector('body');
          dom.classList.toggle('rtl');
      }
  
      onLoggedout() {
          localStorage.removeItem('isLoggedin');
      }

}
