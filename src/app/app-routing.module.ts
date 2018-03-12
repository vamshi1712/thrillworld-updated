import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { HostSignupComponent } from './host/components/host-signup/host-signup.component';
import { HostLoginComponent } from './host/components/host-login/host-login.component';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule'},
    { path: 'layout', loadChildren: './layout/layout.module#LayoutModule'},
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'host', loadChildren: './host/host.module#HostModule' },
    { path: 'host-signup' , component: HostSignupComponent},     
    { path: 'host-login' , component: HostLoginComponent}  
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
