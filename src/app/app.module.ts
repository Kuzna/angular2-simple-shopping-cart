import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DonutService } from './shared/donut/service/donut.service';

// used to create fake backend
import { fakeBackendProvider } from './shared/mock/fake-http-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { SliderModule } from 'primeng/primeng';
import { DetailComponent } from './detail/detail.component';
import { CartOverviewComponent } from './cart/overview/cart.overview.component';
import { CartService } from './shared/cart/service/cart.service';
import { CartDetailComponent } from './cart/detail/cart.detail.component';
import { AlertComponent } from './shared/alert/mvc/alert.component';
import { AlertService } from './shared/alert/service/alert.service';
import { AuthenticationService } from './shared/authentication/authentication.service';
import { LoginComponent } from './login/login.component';
import { SecuredComponent } from './secured/secured.component';
import { AuthGuard } from './shared/authentication/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartOverviewComponent,
    CartDetailComponent,
    ContactComponent,
    AlertComponent,
    LoginComponent,
    DetailComponent,
    SecuredComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    SliderModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 200 })
  ],
  providers: [
    DonutService,
    CartService,
    AlertService,
    AuthenticationService,
    AuthGuard,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
