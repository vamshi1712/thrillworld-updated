import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'host-dashboard',
  templateUrl: './host-dashboard.component.html',
  styleUrls: ['./host-dashboard.component.scss']
})
export class HostDashboardComponent implements OnInit {

  visibleSidebar1



    ngOnInit() {}

    openSearch(){
      document.getElementById('myOverlay').style.display = 'none'
    }
    closeSearch(){
      document.getElementById('myOverlay').style.display = 'block'
    }


}
