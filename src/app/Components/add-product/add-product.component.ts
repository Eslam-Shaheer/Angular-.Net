import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpProductsService } from '../../Services/http-products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpProductsService: HttpProductsService
  ) {}
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [
        null,
        [Validators.required, Validators.min(100), Validators.max(1000000)],
      ],
      imgURL: ['', [Validators.required]],
      categoryID: [1, [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      matrial: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1)]],
    });
  }

  getIsError(controlName: string, errorname: string) {
    // this.productForm.patchValue()
    return (
      this.productForm.controls[controlName].dirty &&
      this.productForm.controls[controlName].touched &&
      this.productForm.controls[controlName].errors?.[errorname]
    );
  }
  onSubmit() {
    this.httpProductsService
      .addProduct(this.productForm.value)
      .subscribe((data) => {
        alert('Added successfully!');
      });
  }
}
