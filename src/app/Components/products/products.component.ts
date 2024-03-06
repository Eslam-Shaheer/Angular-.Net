import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import productList from '../../../assets/productList';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { DraggableDirective } from '../../Directives/draggable.directive';
import { CurrencyPipe, DatePipe, JsonPipe, NgFor } from '@angular/common';
import { ExchangeRatePipe } from '../../Pipes/exchange-rate.pipe';
import { SingleProductComponent } from '../single-product/single-product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    HighlightDirective,
    DraggableDirective,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    ExchangeRatePipe,
    SingleProductComponent,
    NgFor,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges {
  productsCart: IProduct[] = [];

  addToCart(newCartItem: IProduct) {
    this.productsCart.push(newCartItem);
  }

  products: IProduct[] = productList;
  @Input() filterValue: string = '';

  ngOnChanges(): void {
    if (this.filterValue == '') {
      this.products = productList;
    } else {
      this.products = this.products.filter((product) =>
        product.name.includes(this.filterValue)
      );
    }
  }

  handleBuy(product: IProduct) {
    if (product.quantity) product.quantity--;
  }

  obj = {
    name: 'Eslam',
    value: 'Software Developer',
  };

  handlePrice(price: number) {
    return `$${price}`;
  }
}
