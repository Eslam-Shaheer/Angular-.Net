import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  username: string = '';
  password: string = '';

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
