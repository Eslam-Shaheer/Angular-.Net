import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { IProduct } from '../../Models/iproduct';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { ExchangeRatePipe } from '../../Pipes/exchange-rate.pipe';
import { DraggableDirective } from '../../Directives/draggable.directive';
import { Route, Router } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [
    HighlightDirective,
    DraggableDirective,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    ExchangeRatePipe,
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent {
  @Input() product!: IProduct;
  @Input() isChair!: boolean;
  @Input() searchValue: string = '';
  @Output() handleAddToCart = new EventEmitter<IProduct>();

  currentDate: Date = new Date();

  addProductToCart(event: MouseEvent, product: IProduct) {
    event.stopPropagation();
    this.cartService.addToCart(product);

    // this.handleAddToCart.emit(product);
  }

  constructor(private router: Router, private cartService: CartService) {}

  handleRoute(id: number) {
    this.router.navigate(['/product', id]);
  }
}
