import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'login-admin-component',
  standalone: false,
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  constructor(
    private fb: NonNullableFormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
    validateForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    remember: [true]
  });

  submitForm(): void {
    if (this.validateForm.invalid) {
      Object.values(this.validateForm.controls).forEach(c => {
        c.markAsDirty();
        c.updateValueAndValidity();
      });
      return;
    }

    const { username, password } = this.validateForm.getRawValue();

    const success = this.auth.login(username, password);

    if (success) {
      this.router.navigate(['/news/news-list']);
    } else {
      alert('Sai tài khoản hoặc mật khẩu');
    }
  }
}
