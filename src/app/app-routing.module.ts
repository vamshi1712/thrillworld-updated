import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { HostSignupComponent } from './host/components/host-signup/host-signup.component';
import { HostLoginComponent } from './host/components/host-login/host-login.component';
import { AdminLoginComponent } from './admin/components/admin-login/admin-login.component';
import { AdminSignupComponent } from './admin/components/admin-signup/admin-signup.component';
import { HostAuthGuard } from './host/shared/host-auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'layout',pathMatch: "full"},
    { path: 'layout', loadChildren: './layout/layout.module#LayoutModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'host', loadChildren: './host/host.module#HostModule',canActivate: [HostAuthGuard] },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'host-signup' , component: HostSignupComponent},
    { path: 'host-login' , component: HostLoginComponent},
    { path: 'admin-login' , component: AdminLoginComponent},
    { path: 'admin-signup' , component: AdminSignupComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {}
