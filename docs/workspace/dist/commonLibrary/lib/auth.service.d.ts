import { HttpClient, HttpResponse } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs-compat';
import { AccountService } from './account.service';
import * as i0 from "@angular/core";
export type myResponse = {
    code: number;
    message: string;
    data: any;
};
export declare class AuthService {
    protected http: HttpClient;
    private $localStorage;
    private $sessionStorage;
    private acountService;
    resourceUrl: string;
    constructor(http: HttpClient, $localStorage: LocalStorageService, $sessionStorage: SessionStorageService, acountService: AccountService);
    changeResourceUrl(url: string): void;
    getToken(): string;
    isLogin(): boolean;
    loginN(credentials: any, option: any): Observable<HttpResponse<myResponse>>;
    login(credentials: any): Observable<void>;
    reloadByLocal(token: any, isChanged?: boolean): void;
    getUserInfo(isChanged: any): void;
    logout(): void;
    getCurrentUser(): any;
    authenticateSuccess(response: myResponse, rememberMe: boolean): void;
    errorPage(error_code: number, data: string): void;
    backtoDashboard(): void;
    static backtoLogin(): void;
    static checkLogin(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthService>;
}
//# sourceMappingURL=auth.service.d.ts.map