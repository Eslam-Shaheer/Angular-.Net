import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { TableProductsComponent } from '../table-products/table-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ProductsComponent, TableProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  username: string = '';
  password: string = '';
  searchText: string = '';
  // handleChangeInputValue(event: Event): void {
  //   const input = <HTMLInputElement>event.target;
  //   this.inputText = input.value;
  // }

  handleUsernameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.username = input.value;
  }
  handlePasswordChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
  }
}
