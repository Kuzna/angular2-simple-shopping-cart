import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartDetailComponent } from './cart/detail/cart.detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/authentication/auth.guard';
import { SecuredComponent } from './secured/secured.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart-detail', component: CartDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'secured', component: SecuredComponent, canActivate: [AuthGuard] }
];

