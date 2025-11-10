import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';
import { AccountService } from './account.service';
import { Base } from '@onehealth/core';
import { EnvironmentService } from './environment.service';
export type myResponse = {
  code: number;
  message: string;
  data: any;
};

const AUTH_TOKEN = 'token-his';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public resourceUrl = EnvironmentService.env.restApiUrl;

  constructor(
    protected http: HttpClient,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
    private acountService: AccountService
  ) {}

  public changeResourceUrl(url: string) {
    this.resourceUrl = url;
  }
  public getToken(): string {
    return (
      this.$localStorage.retrieve(AUTH_TOKEN) ||
      this.$sessionStorage.retrieve(AUTH_TOKEN) ||
      ''
    );
  }

  public isLogin(): boolean {
    if (this.$localStorage.retrieve(AUTH_TOKEN)) {
      return true;
    } else return false;
  }

  public loginN(
    credentials: any,
    option: any
  ): Observable<HttpResponse<myResponse>> {
    return this.http.post<myResponse>(
      this.resourceUrl + 'api/common/public' + option,
      credentials,
      { observe: 'response' }
    );
  }

  public login(credentials: any): Observable<void> {
    return this.http
      .post<myResponse>(
        this.resourceUrl + 'api/common/public/login',
        credentials
      )
      .pipe(
        map((response) =>
          this.authenticateSuccess(response, credentials.rememberMe)
        )
      );
  }

  public reloadByLocal(token: any, isChanged = false): void {
    this.$localStorage.store(AUTH_TOKEN, token);
    setTimeout(() => {
      this.getUserInfo(isChanged);
    }, 1000);
  }
  getUserInfo(isChanged): void {
    this.acountService.fetchN().subscribe((response: HttpResponse<any>) => {
      if (response.body) {
        this.$localStorage.store('info', response.body.data);
        setTimeout(() => {
          if (!isChanged) {
            this.backtoDashboard();
          } else {
            window.location.reload();
          }
        }, 500);
      }
    });
  }
  public logout(): void {
    this.$localStorage.clear();
    this.$sessionStorage.clear();
    setTimeout(() => {
      AuthService.backtoLogin();
    }, 100);
    return;
  }

  public getCurrentUser(): any {
    try {
      const currentUserStr = this.$localStorage.retrieve('info');
      if (currentUserStr && typeof currentUserStr === 'string') {
        const currentUser = JSON.parse(currentUserStr);
        return currentUser;
      } else if (currentUserStr && typeof currentUserStr === 'object') {
        return currentUserStr;
      }
    } catch (e) {}

    return null;
  }

  public authenticateSuccess(response: myResponse, rememberMe: boolean): void {
    if (response.code !== 0) {
      return;
    }
    const jwt = response.data.token;
    if (rememberMe) {
      this.$localStorage.store(AUTH_TOKEN, jwt);
    } else {
      this.$sessionStorage.store(AUTH_TOKEN, jwt);
    }
  }

  public errorPage(error_code: number, data: string) {
    Base.navigateTo(
      '/errorpage?error_code=' + error_code + "&message='" + data + "'"
    );
  }

  public backtoDashboard() {
    Base.navigateTo(EnvironmentService.env.serverURL + '/home');
  }

  public static backtoLogin() {
    Base.navigateTo(EnvironmentService.env.serverURL + 'new/dang-nhap');
  }

  public static checkLogin() {
    let accessToken = AuthService.prototype.$localStorage.retrieve(AUTH_TOKEN);
    if (!accessToken) AuthService.backtoLogin();
  }
}
