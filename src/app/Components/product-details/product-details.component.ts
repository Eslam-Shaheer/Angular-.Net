import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct | undefined;
  isLastIndex: boolean = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      const paramId = param.get('id');
      const id = paramId ? +paramId : undefined;
      this.product = this.productService.getProductById(id);

      this.isLastIndex = this.productService.isLastIndex(id);
    });

    // const snapshotId = this.activatedRoute.snapshot.paramMap.get('id');
    // const id = snapshotId ? +snapshotId : undefined;
    // this.product = this.productService.getProductById(id);
  }

  goNext(id: number) {
    const nextId = this.productService.getNextProductId(id);
    this.Router.navigate(['/product', nextId]);
  }
}
