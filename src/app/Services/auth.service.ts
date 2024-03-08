import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable, map, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: IUser): Observable<IUser> {
    return this.http.post<User>(`${environment.baseURL}/users`, user);
  }
  signin(user: IUser): Observable<IUser> {
    return this.http
      .get<IUser[]>(
        `${environment.baseURL}/users?username=${user.username}&password=${user.password}`
      )
      .pipe(
        map((response) => {
          if (response.length) {
            return response[0];
          }
          throw new Error('Invalid username or password');
        })
      );
  }
}
