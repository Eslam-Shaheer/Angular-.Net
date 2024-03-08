import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from '../../Models/iuser';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: IUser = { username: '', password: '' };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit(signinForm: any) {
    this.authService.signin(signinForm.value).subscribe({
      next: (data) => {
        this.userService.saveUser(data);

        this._snackBar.open('You have been logged in successfully', 'Okay');
      },
      error: (error) => {
        this._snackBar.open(error, 'Okay');
      },
    });
  }
}
