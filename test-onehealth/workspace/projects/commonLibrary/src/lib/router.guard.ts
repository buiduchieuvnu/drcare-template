import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Base } from '@onehealth/core';
import { AuthService } from './auth.service';
import { EnvironmentService } from './environment.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService) {}
  canActivate(): boolean {
    if (!this.auth.isLogin()) {
      setTimeout(() => {
        Base.navigateTo(EnvironmentService.env.serverURL + 'new/dang-nhap');
      }, 100);
      return false;
    }
    return true;
  }
}
