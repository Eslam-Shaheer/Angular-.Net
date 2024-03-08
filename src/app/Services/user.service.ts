import { Injectable } from '@angular/core';
import { Uservm } from '../ViewModel/uservm';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject: BehaviorSubject<Uservm | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<Uservm | null>(
      this.getUser()
    );
  }

  getUserSubject() {
    return this.currentUserSubject;
  }

  getCurrentUserFromSubject() {
    return this.currentUserSubject.value;
  }

  getUser(): Uservm | null {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

  saveUser(user: Uservm) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  removeUser() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }
}
