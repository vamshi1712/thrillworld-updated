import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    animations: [routerTransition()]
})
export class LayoutComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
