import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { OpsComponent } from './Components/ops/ops.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'contactus', component: ContactusComponent, title: 'Contact us' },
  { path: 'aboutus', component: AboutusComponent, title: 'About us' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: 'ops', component: OpsComponent, title: 'Cart' },
  { path: 'product/:id', component: ProductDetailsComponent, title: 'Product' },
  { path: '**', component: NotfoundComponent },
];
