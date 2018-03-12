import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostDashboardComponent } from './host-dashboard.component';

const routes: Routes = [
    {
        path: '', component: HostDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HostDashboardRoutingModule {
}
