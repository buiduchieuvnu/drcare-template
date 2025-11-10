import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Base } from '@onehealth/core';
import { EnvironmentService } from './environment.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ngx-webstorage";
import * as i3 from "./account.service";
const AUTH_TOKEN = 'token-his';
export class AuthService {
    http;
    $localStorage;
    $sessionStorage;
    acountService;
    resourceUrl = EnvironmentService.env.restApiUrl;
    constructor(http, $localStorage, $sessionStorage, acountService) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
        this.acountService = acountService;
    }
    changeResourceUrl(url) {
        this.resourceUrl = url;
    }
    getToken() {
        return (this.$localStorage.retrieve(AUTH_TOKEN) ||
            this.$sessionStorage.retrieve(AUTH_TOKEN) ||
            '');
    }
    isLogin() {
        if (this.$localStorage.retrieve(AUTH_TOKEN)) {
            return true;
        }
        else
            return false;
    }
    loginN(credentials, option) {
        return this.http.post(this.resourceUrl + 'api/common/public' + option, credentials, { observe: 'response' });
    }
    login(credentials) {
        return this.http
            .post(this.resourceUrl + 'api/common/public/login', credentials)
            .pipe(map((response) => this.authenticateSuccess(response, credentials.rememberMe)));
    }
    reloadByLocal(token, isChanged = false) {
        this.$localStorage.store(AUTH_TOKEN, token);
        setTimeout(() => {
            this.getUserInfo(isChanged);
        }, 1000);
    }
    getUserInfo(isChanged) {
        this.acountService.fetchN().subscribe((response) => {
            if (response.body) {
                this.$localStorage.store('info', response.body.data);
                setTimeout(() => {
                    if (!isChanged) {
                        this.backtoDashboard();
                    }
                    else {
                        window.location.reload();
                    }
                }, 500);
            }
        });
    }
    logout() {
        this.$localStorage.clear();
        this.$sessionStorage.clear();
        setTimeout(() => {
            AuthService.backtoLogin();
        }, 100);
        return;
    }
    getCurrentUser() {
        try {
            const currentUserStr = this.$localStorage.retrieve('info');
            if (currentUserStr && typeof currentUserStr === 'string') {
                const currentUser = JSON.parse(currentUserStr);
                return currentUser;
            }
            else if (currentUserStr && typeof currentUserStr === 'object') {
                return currentUserStr;
            }
        }
        catch (e) { }
        return null;
    }
    authenticateSuccess(response, rememberMe) {
        if (response.code !== 0) {
            return;
        }
        const jwt = response.data.token;
        if (rememberMe) {
            this.$localStorage.store(AUTH_TOKEN, jwt);
        }
        else {
            this.$sessionStorage.store(AUTH_TOKEN, jwt);
        }
    }
    errorPage(error_code, data) {
        Base.navigateTo('/errorpage?error_code=' + error_code + "&message='" + data + "'");
    }
    backtoDashboard() {
        Base.navigateTo(EnvironmentService.env.serverURL + '/home');
    }
    static backtoLogin() {
        Base.navigateTo(EnvironmentService.env.serverURL + 'new/dang-nhap');
    }
    static checkLogin() {
        let accessToken = AuthService.prototype.$localStorage.retrieve(AUTH_TOKEN);
        if (!accessToken)
            AuthService.backtoLogin();
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i2.SessionStorageService), i0.ɵɵinject(i3.AccountService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: i2.LocalStorageService }, { type: i2.SessionStorageService }, { type: i3.AccountService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uTGlicmFyeS9zcmMvbGliL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBTzNELE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQztBQUcvQixNQUFNLE9BQU8sV0FBVztJQUlWO0lBQ0Y7SUFDQTtJQUNBO0lBTkgsV0FBVyxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFFdkQsWUFDWSxJQUFnQixFQUNsQixhQUFrQyxFQUNsQyxlQUFzQyxFQUN0QyxhQUE2QjtRQUgzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2xCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFDdEMsa0JBQWEsR0FBYixhQUFhLENBQWdCO0lBQ3BDLENBQUM7SUFFRyxpQkFBaUIsQ0FBQyxHQUFXO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFDTSxRQUFRO1FBQ2IsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDekMsRUFBRSxDQUNILENBQUM7SUFDSixDQUFDO0lBRU0sT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZ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O1FBQ1QsQ0FBQztRQUNELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksVUFBVSxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsQ0FBQztJQUNILENBQUM7SUFFTSxTQUFTLENBQUMsVUFBa0IsRUFBRSxJQUFZO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQ2Isd0JBQXdCLEdBQUcsVUFBVSxHQUFHLFlBQVksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUNsRSxDQUFDO0lBQ0osQ0FBQztJQUVNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVO1FBQ3RCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsV0FBVztZQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5QyxDQUFDO3FHQTNIVSxXQUFXO2dFQUFYLFdBQVcsV0FBWCxXQUFXLG1CQURFLE1BQU07O2lGQUNuQixXQUFXO2NBRHZCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmd4LXdlYnN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy1jb21wYXQnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi9hY2NvdW50LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYXNlIH0gZnJvbSAnQG9uZWhlYWx0aC9jb3JlJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnRTZXJ2aWNlIH0gZnJvbSAnLi9lbnZpcm9ubWVudC5zZXJ2aWNlJztcclxuZXhwb3J0IHR5cGUgbXlSZXNwb25zZSA9IHtcclxuICBjb2RlOiBudW1iZXI7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGRhdGE6IGFueTtcclxufTtcclxuXHJcbmNvbnN0IEFVVEhfVE9LRU4gPSAndG9rZW4taGlzJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgcHVibGljIHJlc291cmNlVXJsID0gRW52aXJvbm1lbnRTZXJ2aWNlLmVudi5yZXN0QXBpVXJsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSAkbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSAkc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZSxcclxuICAgIHByaXZhdGUgYWNvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2VcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VSZXNvdXJjZVVybCh1cmw6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZXNvdXJjZVVybCA9IHVybDtcclxuICB9XHJcbiAgcHVibGljIGdldFRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLiRsb2NhbFN0b3JhZ2UucmV0cmlldmUoQVVUSF9UT0tFTikgfHxcclxuICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUoQVVUSF9UT0tFTikgfHxcclxuICAgICAgJydcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNMb2dpbigpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLiRsb2NhbFN0b3JhZ2UucmV0cmlldmUoQVVUSF9UT0tFTikpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ2luTihcclxuICAgIGNyZWRlbnRpYWxzOiBhbnksXHJcbiAgICBvcHRpb246IGFueVxyXG4gICk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPG15UmVzcG9uc2U+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8bXlSZXNwb25zZT4oXHJcbiAgICAgIHRoaXMucmVzb3VyY2VVcmwgKyAnYXBpL2NvbW1vbi9wdWJsaWMnICsgb3B0aW9uLFxyXG4gICAgICBjcmVkZW50aWFscyxcclxuICAgICAgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9naW4oY3JlZGVudGlhbHM6IGFueSk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdDxteVJlc3BvbnNlPihcclxuICAgICAgICB0aGlzLnJlc291cmNlVXJsICsgJ2FwaS9jb21tb24vcHVibGljL2xvZ2luJyxcclxuICAgICAgICBjcmVkZW50aWFsc1xyXG4gICAgICApXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzcG9uc2UpID0+XHJcbiAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZVN1Y2Nlc3MocmVzcG9uc2UsIGNyZWRlbnRpYWxzLnJlbWVtYmVyTWUpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbG9hZEJ5TG9jYWwodG9rZW46IGFueSwgaXNDaGFuZ2VkID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5zdG9yZShBVVRIX1RPS0VOLCB0b2tlbik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5nZXRVc2VySW5mbyhpc0NoYW5nZWQpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG4gIGdldFVzZXJJbmZvKGlzQ2hhbmdlZCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY291bnRTZXJ2aWNlLmZldGNoTigpLnN1YnNjcmliZSgocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5ib2R5KSB7XHJcbiAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnN0b3JlKCdpbmZvJywgcmVzcG9uc2UuYm9keS5kYXRhKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICghaXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja3RvRGFzaGJvYXJkKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLiRsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgQXV0aFNlcnZpY2UuYmFja3RvTG9naW4oKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q3VycmVudFVzZXIoKTogYW55IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRVc2VyU3RyID0gdGhpcy4kbG9jYWxTdG9yYWdlLnJldHJpZXZlKCdpbmZvJyk7XHJcbiAgICAgIGlmIChjdXJyZW50VXNlclN0ciAmJiB0eXBlb2YgY3VycmVudFVzZXJTdHIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGN1cnJlbnRVc2VyU3RyKTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFVzZXI7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFVzZXJTdHIgJiYgdHlwZW9mIGN1cnJlbnRVc2VyU3RyID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlclN0cjtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhdXRoZW50aWNhdGVTdWNjZXNzKHJlc3BvbnNlOiBteVJlc3BvbnNlLCByZW1lbWJlck1lOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAocmVzcG9uc2UuY29kZSAhPT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBqd3QgPSByZXNwb25zZS5kYXRhLnRva2VuO1xyXG4gICAgaWYgKHJlbWVtYmVyTWUpIHtcclxuICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnN0b3JlKEFVVEhfVE9LRU4sIGp3dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLiRzZXNzaW9uU3RvcmFnZS5zdG9yZShBVVRIX1RPS0VOLCBqd3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGVycm9yUGFnZShlcnJvcl9jb2RlOiBudW1iZXIsIGRhdGE6IHN0cmluZykge1xyXG4gICAgQmFzZS5uYXZpZ2F0ZVRvKFxyXG4gICAgICAnL2Vycm9ycGFnZT9lcnJvcl9jb2RlPScgKyBlcnJvcl9jb2RlICsgXCImbWVzc2FnZT0nXCIgKyBkYXRhICsgXCInXCJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmFja3RvRGFzaGJvYXJkKCkge1xyXG4gICAgQmFzZS5uYXZpZ2F0ZVRvKEVudmlyb25tZW50U2VydmljZS5lbnYuc2VydmVyVVJMICsgJy9ob21lJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJhY2t0b0xvZ2luKCkge1xyXG4gICAgQmFzZS5uYXZpZ2F0ZVRvKEVudmlyb25tZW50U2VydmljZS5lbnYuc2VydmVyVVJMICsgJ25ldy9kYW5nLW5oYXAnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hlY2tMb2dpbigpIHtcclxuICAgIGxldCBhY2Nlc3NUb2tlbiA9IEF1dGhTZXJ2aWNlLnByb3RvdHlwZS4kbG9jYWxTdG9yYWdlLnJldHJpZXZlKEFVVEhfVE9LRU4pO1xyXG4gICAgaWYgKCFhY2Nlc3NUb2tlbikgQXV0aFNlcnZpY2UuYmFja3RvTG9naW4oKTtcclxuICB9XHJcbn1cclxuIl19