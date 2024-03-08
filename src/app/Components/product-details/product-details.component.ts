import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { HttpProductsService } from '../../Services/http-products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product!: IProduct | undefined;
  isLastIndex: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    private httpProductsService: HttpProductsService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.paramMap.subscribe((param) => {
        const paramId = param.get('id');
        const id = paramId ? paramId : undefined;

        this.subscriptions.push(
          this.httpProductsService.getProductById(id).subscribe((product) => {
            this.product = product;
          })
        );

        this.isLastIndex = this.productService.isLastIndex(id);
      })
    );

    // const snapshotId = this.activatedRoute.snapshot.paramMap.get('id');
    // const id = snapshotId ? +snapshotId : undefined;
    // this.product = this.productService.getProductById(id);
  }

  goNext(id: number) {
    const nextId = this.productService.getNextProductId(id);
    this.Router.navigate(['/product', nextId]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
