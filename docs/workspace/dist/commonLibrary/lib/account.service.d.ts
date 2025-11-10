import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { Account } from './models/user.model';
import { StateStorageService } from './state-storage.service';
import * as i0 from "@angular/core";
export declare class AccountService {
    private sessionStorage;
    private stateStorageService;
    private http;
    private router;
    private userIdentity;
    private authenticationState;
    private accountCache$?;
    private resourceUrl;
    constructor(sessionStorage: SessionStorageService, stateStorageService: StateStorageService, http: HttpClient, router: Router);
    save(account: Account): Observable<{}>;
    authenticate(identity: Account | null): void;
    hasAnyAuthority(authorities: string[] | string): boolean;
    identity(force?: boolean): Observable<Account | null>;
    isAuthenticated(): boolean;
    getAuthenticationState(): Observable<Account | null>;
    getImageUrl(): string;
    private fetch;
    fetchN(): Observable<HttpResponse<any>>;
    getMenu(dichvu: string): Observable<HttpResponse<any>>;
    private navigateToStoredUrl;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccountService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AccountService>;
}
//# sourceMappingURL=account.service.d.ts.map