import { Component } from '@angular/core';
import productList from '../../../assets/productList';
import { IProduct } from '../../Models/iproduct';
import { SingleProductComponent } from '../single-product/single-product.component';

@Component({
  selector: 'app-table-products',
  standalone: true,
  imports: [SingleProductComponent],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css',
})
export class TableProductsComponent {
  products: IProduct[] = productList;
}
