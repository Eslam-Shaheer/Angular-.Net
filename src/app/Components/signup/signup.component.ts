import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../../Models/iuser';
import { AuthService } from '../../Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  user: IUser = { username: '', password: '' };

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit(signupForm: any) {
    this.authService.signup(signupForm.value).subscribe((data) => {
      console.log(data);
      this._snackBar.open('User has been created successfully', 'Okay');
    });
  }
}
