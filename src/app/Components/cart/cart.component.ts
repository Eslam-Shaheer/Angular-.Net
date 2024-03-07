import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  productsCart: IProduct[] = [];

  constructor(private cartService: CartService) {
    this.productsCart = this.cartService.getCartItems();
  }

  ngOnInit(): void {}
}
