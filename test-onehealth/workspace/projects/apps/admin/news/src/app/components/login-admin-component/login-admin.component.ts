import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'login-admin-component',
  standalone: false,
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  showPassword = false;

  username = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  onLogin() {
    const success = this.auth.login(this.username, this.password);

    if (success) {
      this.router.navigate(['/news/news-list']);
    } else {
      this.error = 'Sai tên đăng nhập hoặc mật khẩu';
    }
  }

}
