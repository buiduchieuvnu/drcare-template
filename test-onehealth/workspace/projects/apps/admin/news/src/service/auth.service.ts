import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // 🔒 MOCK ACCOUNT
  private readonly Account = {
    username: 'admin',
    password: '123456',
    name: 'Thắng Nguyễn',
    email: 'thang@example.com'
  };

  login(username: string, password: string): boolean {
    if (
      username === this.Account.username &&
      password === this.Account.password
    ) {
      localStorage.setItem('admin_logged_in', 'true');
      localStorage.setItem('admin_name', this.Account.name);
      localStorage.setItem('admin_email', this.Account.email);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('admin_logged_in');
    localStorage.removeItem('admin_name');
    localStorage.removeItem('admin_email');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('admin_logged_in') === 'true';
  }

  getUser() {
    return {
      name: localStorage.getItem('admin_name'),
      email: localStorage.getItem('admin_email')
    };
  }
}
