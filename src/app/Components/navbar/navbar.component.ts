import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';
import { Uservm } from '../../ViewModel/uservm';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  user!: Uservm | null;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUserSubject().subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.userService.removeUser();
  }

  routes = [
    { path: 'home', title: 'Home' },
    { path: 'products/add', title: 'Add Product' },
    { path: 'cart', title: 'Shopping Cart' },
    { path: 'aboutus', title: 'About us' },
    { path: 'contactus', title: 'Contact us' },
    { path: 'profile', title: 'Profile' },
    { path: 'login', title: 'Login' },
    { path: 'ops', title: 'Ops' },
    { path: 'signup', title: 'Sign Up' },
    { path: 'subjects', title: 'Subjects' },
  ];
}
