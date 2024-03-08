import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import productList from '../../../assets/productList';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { DraggableDirective } from '../../Directives/draggable.directive';
import { CurrencyPipe, DatePipe, JsonPipe, NgFor } from '@angular/common';
import { ExchangeRatePipe } from '../../Pipes/exchange-rate.pipe';
import { SingleProductComponent } from '../single-product/single-product.component';
import { ProductService } from '../../Services/product.service';
import { HttpProductsService } from '../../Services/http-products.service';

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
export class ProductsComponent implements OnChanges, OnInit {
  productsCart: IProduct[] = [];
  products: IProduct[] = [];
  @Input() filterValue: string = '';

  constructor(
    private productService: ProductService,
    private httpProductService: HttpProductsService
  ) {}

  ngOnInit(): void {
    this.httpProductService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }

  ngOnChanges(): void {
    this.httpProductService
      .searchProducts(this.filterValue)
      .subscribe((data) => {
        this.products = data;
      });
  }

  handleBuy(product: IProduct) {
    if (product.quantity) product.quantity--;
  }

  addToCart(newCartItem: IProduct) {
    this.productsCart.push(newCartItem);
  }

  handlePrice(price: number) {
    return `$${price}`;
  }
}
