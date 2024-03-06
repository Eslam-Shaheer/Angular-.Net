import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { IProduct } from '../../Models/iproduct';
import { CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { ExchangeRatePipe } from '../../Pipes/exchange-rate.pipe';
import { DraggableDirective } from '../../Directives/draggable.directive';

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

  addProductToCart(product: IProduct) {
    this.handleAddToCart.emit(product);
  }
}
