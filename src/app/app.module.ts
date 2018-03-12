import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { ReactiveFormsModule } from '@angular/forms';
import { HostModule } from './host/host.module';
import { AuthService } from './shared/services/user.service';
import { AdminModule } from './admin/admin.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        HostModule,
        AdminModule,
        NgbDropdownModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard , AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}
