import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import productList from '../../assets/productList';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: IProduct[];
  constructor() {
    this.products = productList;
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: number | undefined): IProduct | undefined {
    if (!id) return undefined;
    const product = this.products.find((product) => product.id == id);
    if (product) return product;
    return;
  }

  getProductsByCategoryId(categoryId: number): IProduct[] {
    return this.products.filter((product) => product.categoryID == categoryId);
  }

  getFilteredProductsName(searchValue: string): IProduct[] {
    if (!searchValue) return this.products;
    return this.products.filter((product) =>
      product.name.includes(searchValue)
    );
  }
  isLastIndex(id: number | undefined | string) {
    if (!id) return false;

    const findedProduct = this.products[this.products.length - 1];
    return findedProduct.id == id;
  }
  getNextProductId(currentId: number | undefined): number {
    let index = this.products.findIndex((product) => product.id == currentId);

    const findedProduct = this.products[++index];

    return findedProduct.id;
  }
}
