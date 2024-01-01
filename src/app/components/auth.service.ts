import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  login() {
    // Implement your login logic here
    // For simplicity, just set isLoggedIn to true
    this.isLoggedIn = true;
  }

  logout() {
    // Implement your logout logic here
    // For simplicity, just set isLoggedIn to false
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
