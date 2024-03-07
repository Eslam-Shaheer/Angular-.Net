import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  routes = [
    { path: 'home', title: 'Home' },
    { path: 'cart', title: 'Shopping Cart' },
    { path: 'aboutus', title: 'About us' },
    { path: 'contactus', title: 'Contact us' },
    { path: 'profile', title: 'Profile' },
    { path: 'login', title: 'Login' },
    { path: 'ops', title: 'Ops' },
  ];
}
