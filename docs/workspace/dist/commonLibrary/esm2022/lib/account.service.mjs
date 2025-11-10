import { Injectable } from '@angular/core';
import { ReplaySubject, of } from 'rxjs';
import { shareReplay, tap, catchError } from 'rxjs/operators';
import { EnvironmentService } from './environment.service';
import * as i0 from "@angular/core";
import * as i1 from "ngx-webstorage";
import * as i2 from "./state-storage.service";
import * as i3 from "@angular/common/http";
import * as i4 from "@angular/router";
export class AccountService {
    sessionStorage;
    stateStorageService;
    http;
    router;
    userIdentity = null;
    authenticationState = new ReplaySubject(1);
    accountCache$;
    resourceUrl = EnvironmentService.env.restApiUrl;
    constructor(sessionStorage, stateStorageService, http, router) {
        this.sessionStorage = sessionStorage;
        this.stateStorageService = stateStorageService;
        this.http = http;
        this.router = router;
    }
    save(account) {
        return this.http.post(this.resourceUrl + 'api/account', account);
    }
    authenticate(identity) {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
    }
    hasAnyAuthority(authorities) {
        if (!this.userIdentity || !this.userIdentity.authorities) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        return this.userIdentity.authorities.some((authority) => authorities.includes(authority));
    }
    identity(force) {
        if (!this.accountCache$ || force || !this.isAuthenticated()) {
            this.accountCache$ = this.fetch().pipe(catchError(() => {
                return of(null);
            }), tap((account) => {
                this.authenticate(account);
                // After retrieve the account info, the language will be changed to
                // the user's preferred language configured in the account setting
                if (account && account.langKey) {
                    const langKey = this.sessionStorage.retrieve('locale') || account.langKey;
                }
                if (account) {
                    this.navigateToStoredUrl();
                }
            }), shareReplay());
        }
        return this.accountCache$;
    }
    isAuthenticated() {
        return this.userIdentity !== null;
    }
    getAuthenticationState() {
        return this.authenticationState.asObservable();
    }
    getImageUrl() {
        return this.userIdentity ? this.userIdentity.imageUrl : '';
    }
    fetch() {
        return this.http.get(this.resourceUrl + 'api/account');
    }
    fetchN() {
        return this.http.get(this.resourceUrl + 'api/common/taikhoan/info', {
            observe: 'response',
        });
    }
    getMenu(dichvu) {
        return this.http.get(this.resourceUrl + 'api/common/taikhoan/quyen?maNhom=' + dichvu, { observe: 'response' });
    }
    navigateToStoredUrl() {
        // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
        // if login is successful, go to stored previousState and clear previousState
        const previousUrl = this.stateStorageService.getUrl();
        if (previousUrl) {
            this.stateStorageService.clearUrl();
            this.router.navigateByUrl(previousUrl);
        }
    }
    static ɵfac = function AccountService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccountService)(i0.ɵɵinject(i1.SessionStorageService), i0.ɵɵinject(i2.StateStorageService), i0.ɵɵinject(i3.HttpClient), i0.ɵɵinject(i4.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.SessionStorageService }, { type: i2.StateStorageService }, { type: i3.HttpClient }, { type: i4.Router }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uTGlicmFyeS9zcmMvbGliL2FjY291bnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBSXRELE9BQU8sRUFBYyxhQUFhLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFHM0QsTUFBTSxPQUFPLGNBQWM7SUFPZjtJQUNBO0lBQ0E7SUFDQTtJQVRGLFlBQVksR0FBbUIsSUFBSSxDQUFDO0lBQ3BDLG1CQUFtQixHQUFHLElBQUksYUFBYSxDQUFpQixDQUFDLENBQUMsQ0FBQztJQUMzRCxhQUFhLENBQThCO0lBQzNDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBRXhELFlBQ1UsY0FBcUMsRUFDckMsbUJBQXdDLEVBQ3hDLElBQWdCLEVBQ2hCLE1BQWM7UUFIZCxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVKLElBQUksQ0FBQyxPQUFnQjtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBd0I7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7UUFDN0IsSUFB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QVcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQzt3R0FqR1UsY0FBYztnRUFBZCxjQUFjLFdBQWQsY0FBYyxtQkFERCxNQUFNOztpRkFDbkIsY0FBYztjQUQxQixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmd4LXdlYnN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZVJlcGxheSwgdGFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBY2NvdW50IH0gZnJvbSAnLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50U2VydmljZSB9IGZyb20gJy4vZW52aXJvbm1lbnQuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQWNjb3VudFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgdXNlcklkZW50aXR5OiBBY2NvdW50IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvblN0YXRlID0gbmV3IFJlcGxheVN1YmplY3Q8QWNjb3VudCB8IG51bGw+KDEpO1xyXG4gIHByaXZhdGUgYWNjb3VudENhY2hlJD86IE9ic2VydmFibGU8QWNjb3VudCB8IG51bGw+O1xyXG4gIHByaXZhdGUgcmVzb3VyY2VVcmwgPSBFbnZpcm9ubWVudFNlcnZpY2UuZW52LnJlc3RBcGlVcmw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTogU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzdGF0ZVN0b3JhZ2VTZXJ2aWNlOiBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge31cclxuXHJcbiAgc2F2ZShhY2NvdW50OiBBY2NvdW50KTogT2JzZXJ2YWJsZTx7fT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMucmVzb3VyY2VVcmwgKyAnYXBpL2FjY291bnQnLCBhY2NvdW50KTtcclxuICB9XHJcblxyXG4gIGF1dGhlbnRpY2F0ZShpZGVudGl0eTogQWNjb3VudCB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMudXNlcklkZW50aXR5ID0gaWRlbnRpdHk7XHJcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUubmV4dCh0aGlzLnVzZXJJZGVudGl0eSk7XHJcbiAgfVxyXG5cclxuICBoYXNBbnlBdXRob3JpdHkoYXV0aG9yaXRpZXM6IHN0cmluZ1tdIHwgc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMudXNlcklkZW50aXR5IHx8ICF0aGlzLnVzZXJJZGVudGl0eS5hdXRob3JpdGllcykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXV0aG9yaXRpZXMpKSB7XHJcbiAgICAgIGF1dGhvcml0aWVzID0gW2F1dGhvcml0aWVzXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnVzZXJJZGVudGl0eS5hdXRob3JpdGllcy5zb21lKChhdXRob3JpdHk6IHN0cmluZykgPT5cclxuICAgICAgYXV0aG9yaXRpZXMuaW5jbHVkZXMoYXV0aG9yaXR5KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlkZW50aXR5KGZvcmNlPzogYm9vbGVhbik6IE9ic2VydmFibGU8QWNjb3VudCB8IG51bGw+IHtcclxuICAgIGlmICghdGhpcy5hY2NvdW50Q2FjaGUkIHx8IGZvcmNlIHx8ICF0aGlzLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcbiAgICAgIHRoaXMuYWNjb3VudENhY2hlJCA9IHRoaXMuZmV0Y2goKS5waXBlKFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRhcCgoYWNjb3VudDogQWNjb3VudCB8IG51bGwpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlKGFjY291bnQpO1xyXG5cclxuICAgICAgICAgIC8vIEFmdGVyIHJldHJpZXZlIHRoZSBhY2NvdW50IGluZm8sIHRoZSBsYW5ndWFnZSB3aWxsIGJlIGNoYW5nZWQgdG9cclxuICAgICAgICAgIC8vIHRoZSB1c2VyJ3MgcHJlZmVycmVkIGxhbmd1YWdlIGNvbmZpZ3VyZWQgaW4gdGhlIGFjY291bnQgc2V0dGluZ1xyXG4gICAgICAgICAgaWYgKGFjY291bnQgJiYgYWNjb3VudC5sYW5nS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhbmdLZXkgPVxyXG4gICAgICAgICAgICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUoJ2xvY2FsZScpIHx8IGFjY291bnQubGFuZ0tleTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9TdG9yZWRVcmwoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBzaGFyZVJlcGxheSgpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hY2NvdW50Q2FjaGUkO1xyXG4gIH1cclxuXHJcbiAgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlcklkZW50aXR5ICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXV0aGVudGljYXRpb25TdGF0ZSgpOiBPYnNlcnZhYmxlPEFjY291bnQgfCBudWxsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2VVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnVzZXJJZGVudGl0eSA/IHRoaXMudXNlcklkZW50aXR5LmltYWdlVXJsIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZldGNoKCk6IE9ic2VydmFibGU8QWNjb3VudD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8QWNjb3VudD4odGhpcy5yZXNvdXJjZVVybCArICdhcGkvYWNjb3VudCcpO1xyXG4gIH1cclxuXHJcbiAgZmV0Y2hOKCk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4odGhpcy5yZXNvdXJjZVVybCArICdhcGkvY29tbW9uL3RhaWtob2FuL2luZm8nLCB7XHJcbiAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldE1lbnUoZGljaHZ1OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KFxyXG4gICAgICB0aGlzLnJlc291cmNlVXJsICsgJ2FwaS9jb21tb24vdGFpa2hvYW4vcXV5ZW4/bWFOaG9tPScgKyBkaWNodnUsXHJcbiAgICAgIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuYXZpZ2F0ZVRvU3RvcmVkVXJsKCk6IHZvaWQge1xyXG4gICAgLy8gcHJldmlvdXNTdGF0ZSBjYW4gYmUgc2V0IGluIHRoZSBhdXRoRXhwaXJlZEludGVyY2VwdG9yIGFuZCBpbiB0aGUgdXNlclJvdXRlQWNjZXNzU2VydmljZVxyXG4gICAgLy8gaWYgbG9naW4gaXMgc3VjY2Vzc2Z1bCwgZ28gdG8gc3RvcmVkIHByZXZpb3VzU3RhdGUgYW5kIGNsZWFyIHByZXZpb3VzU3RhdGVcclxuICAgIGNvbnN0IHByZXZpb3VzVXJsID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFVybCgpO1xyXG4gICAgaWYgKHByZXZpb3VzVXJsKSB7XHJcbiAgICAgIHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5jbGVhclVybCgpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHByZXZpb3VzVXJsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19