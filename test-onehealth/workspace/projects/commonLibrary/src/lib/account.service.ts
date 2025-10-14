import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable, ReplaySubject, of } from 'rxjs';
import { shareReplay, tap, catchError } from 'rxjs/operators';
import { Account } from './models/user.model';
import { StateStorageService } from './state-storage.service';
import { EnvironmentService } from './environment.service';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userIdentity: Account | null = null;
  private authenticationState = new ReplaySubject<Account | null>(1);
  private accountCache$?: Observable<Account | null>;
  private resourceUrl = EnvironmentService.env.restApiUrl;

  constructor(
    private sessionStorage: SessionStorageService,
    private stateStorageService: StateStorageService,
    private http: HttpClient,
    private router: Router
  ) {}

  save(account: Account): Observable<{}> {
    return this.http.post(this.resourceUrl + 'api/account', account);
  }

  authenticate(identity: Account | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }

  hasAnyAuthority(authorities: string[] | string): boolean {
    if (!this.userIdentity || !this.userIdentity.authorities) {
      return false;
    }
    if (!Array.isArray(authorities)) {
      authorities = [authorities];
    }
    return this.userIdentity.authorities.some((authority: string) =>
      authorities.includes(authority)
    );
  }

  identity(force?: boolean): Observable<Account | null> {
    if (!this.accountCache$ || force || !this.isAuthenticated()) {
      this.accountCache$ = this.fetch().pipe(
        catchError(() => {
          return of(null);
        }),
        tap((account: Account | null) => {
          this.authenticate(account);

          // After retrieve the account info, the language will be changed to
          // the user's preferred language configured in the account setting
          if (account && account.langKey) {
            const langKey =
              this.sessionStorage.retrieve('locale') || account.langKey;
          }

          if (account) {
            this.navigateToStoredUrl();
          }
        }),
        shareReplay()
      );
    }
    return this.accountCache$;
  }

  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getAuthenticationState(): Observable<Account | null> {
    return this.authenticationState.asObservable();
  }

  getImageUrl(): string {
    return this.userIdentity ? this.userIdentity.imageUrl : '';
  }

  private fetch(): Observable<Account> {
    return this.http.get<Account>(this.resourceUrl + 'api/account');
  }

  fetchN(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.resourceUrl + 'api/common/taikhoan/info', {
      observe: 'response',
    });
  }

  getMenu(dichvu: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.resourceUrl + 'api/common/taikhoan/quyen?maNhom=' + dichvu,
      { observe: 'response' }
    );
  }

  private navigateToStoredUrl(): void {
    // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
    // if login is successful, go to stored previousState and clear previousState
    const previousUrl = this.stateStorageService.getUrl();
    if (previousUrl) {
      this.stateStorageService.clearUrl();
      this.router.navigateByUrl(previousUrl);
    }
  }
}
