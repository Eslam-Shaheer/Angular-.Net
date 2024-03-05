import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import productList from '../../../assets/productList';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { DraggableDirective } from '../../Directives/draggable.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HighlightDirective, DraggableDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: IProduct[] = productList;

  handleBuy(product: IProduct) {
    if (product.quantity) product.quantity--;
  }
}
