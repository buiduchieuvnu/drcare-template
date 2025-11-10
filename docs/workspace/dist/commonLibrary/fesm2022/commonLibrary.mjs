import * as i1 from '@angular/common/http';
import { HttpParams, HttpResponse, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as i0 from '@angular/core';
import { Component, Input, isDevMode, Injectable, Pipe, EventEmitter, Output, HostListener, ViewChild, NgModule } from '@angular/core';
import { catchError, tap, shareReplay, map } from 'rxjs/operators';
import * as i6 from '@onehealth/core';
import { Base, md5, Cache, OnehealthCoreModule } from '@onehealth/core';
import * as i2 from 'ngx-webstorage';
import { provideNgxWebstorage, withNgxWebstorageConfig, withLocalStorage, withSessionStorage } from 'ngx-webstorage';
import { ReplaySubject, of, Observable, BehaviorSubject } from 'rxjs';
import * as i1$1 from '@angular/router';
import { NavigationEnd, RouterModule } from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import * as i1$2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2$1 from '@onehealth/ui/affix';
import { OHAffixModule } from '@onehealth/ui/affix';
import * as i3 from '@onehealth/ui/grid';
import { OHGridModule } from '@onehealth/ui/grid';
import * as i2$2 from '@onehealth/ui/button';
import { OHButtonModule } from '@onehealth/ui/button';
import * as i3$1 from '@onehealth/ui/core/transition-patch';
import * as i4 from '@onehealth/ui/icon';
import { OH_ICONS, OHIconModule } from '@onehealth/ui/icon';
import * as i5 from '@onehealth/ui/tooltip';
import { OHToolTipModule } from '@onehealth/ui/tooltip';
import * as i2$3 from '@onehealth/ui/typography';
import { OHTypographyModule } from '@onehealth/ui/typography';
import * as i4$1 from '@onehealth/ui/menu';
import { OHMenuModule } from '@onehealth/ui/menu';
import * as i4$2 from '@onehealth/ui/divider';
import { OHDividerModule } from '@onehealth/ui/divider';
import * as i6$1 from '@onehealth/ui/dropdown';
import { OHDropDownModule } from '@onehealth/ui/dropdown';
import { OHAlertModule } from '@onehealth/ui/alert';
import { OHAnchorModule } from '@onehealth/ui/anchor';
import { OHAutocompleteModule } from '@onehealth/ui/auto-complete';
import { OHAvatarModule } from '@onehealth/ui/avatar';
import { OHBackTopModule } from '@onehealth/ui/back-top';
import { OHBadgeModule } from '@onehealth/ui/badge';
import { OHBreadCrumbModule } from '@onehealth/ui/breadcrumb';
import { OHCalendarModule } from '@onehealth/ui/calendar';
import { OHCardModule } from '@onehealth/ui/card';
import { OHCarouselModule } from '@onehealth/ui/carousel';
import { OHCascaderModule } from '@onehealth/ui/cascader';
import { OHCheckboxModule } from '@onehealth/ui/checkbox';
import { OHCollapseModule } from '@onehealth/ui/collapse';
import { OHCommentModule } from '@onehealth/ui/comment';
import { OHNoAnimationModule } from '@onehealth/ui/core/no-animation';
import { OHTransButtonModule } from '@onehealth/ui/core/trans-button';
import { OHWaveModule } from '@onehealth/ui/core/wave';
import { OHDatePickerModule } from '@onehealth/ui/date-picker';
import { OHDescriptionsModule } from '@onehealth/ui/descriptions';
import { OHDrawerModule } from '@onehealth/ui/drawer';
import { OHEmptyModule } from '@onehealth/ui/empty';
import { OHFormModule } from '@onehealth/ui/form';
import { OHI18nModule } from '@onehealth/ui/i18n';
import { OHImageModule } from '@onehealth/ui/image';
import { OHInputModule } from '@onehealth/ui/input';
import { OHInputNumberModule } from '@onehealth/ui/input-number';
import { OHLayoutModule } from '@onehealth/ui/layout';
import { OHListModule } from '@onehealth/ui/list';
import { OHMentionModule } from '@onehealth/ui/mention';
import { OHMessageModule } from '@onehealth/ui/message';
import * as i1$3 from '@onehealth/ui/modal';
import { OHModalModule } from '@onehealth/ui/modal';
import { OHNotificationModule } from '@onehealth/ui/notification';
import { OHPageHeaderModule } from '@onehealth/ui/page-header';
import { OHPaginationModule } from '@onehealth/ui/pagination';
import { OHPopconfirmModule } from '@onehealth/ui/popconfirm';
import { OHPopoverModule } from '@onehealth/ui/popover';
import { OHProgressModule } from '@onehealth/ui/progress';
import { OHRadioModule } from '@onehealth/ui/radio';
import { OHRateModule } from '@onehealth/ui/rate';
import { OHResultModule } from '@onehealth/ui/result';
import { OHSelectModule } from '@onehealth/ui/select';
import { OHSkeletonModule } from '@onehealth/ui/skeleton';
import { OHSliderModule } from '@onehealth/ui/slider';
import { OHSpaceModule } from '@onehealth/ui/space';
import { OHSpinModule } from '@onehealth/ui/spin';
import { OHStatisticModule } from '@onehealth/ui/statistic';
import { OHStepsModule } from '@onehealth/ui/steps';
import { OHSwitchModule } from '@onehealth/ui/switch';
import { OHTableModule } from '@onehealth/ui/table';
import { OHTabsModule } from '@onehealth/ui/tabs';
import { OHTagModule } from '@onehealth/ui/tag';
import { OHTimePickerModule } from '@onehealth/ui/time-picker';
import { OHTimelineModule } from '@onehealth/ui/timeline';
import { OHTransferModule } from '@onehealth/ui/transfer';
import { OHTreeModule } from '@onehealth/ui/tree';
import { OHTreeViewModule } from '@onehealth/ui/tree-view';
import { OHTreeSelectModule } from '@onehealth/ui/tree-select';
import { OHUploadModule } from '@onehealth/ui/upload';
import { OHResizableModule } from '@onehealth/ui/resizable';
import { OHPipesModule } from '@onehealth/ui/pipes';
import { OHCodeEditorModule } from '@onehealth/ui/code-editor';
import { IconModule } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { OH_CONFIG } from '@onehealth/ui/core/config';
import { OHLogoModule } from '@onehealth/ui/logo';
import { OHFlexModule } from '@onehealth/ui/flex';
import { OHHashCodeModule } from '@onehealth/ui/hash-code';

const _c0$4 = ["*"];
class BlankPageComponent {
    close = true;
    title = 'emptypage';
    ngOnInit() { }
    onCloseClick() {
        window.history.back();
    }
    static ɵfac = function BlankPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BlankPageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BlankPageComponent, selectors: [["oh-page"]], inputs: { close: "close" }, ngContentSelectors: _c0$4, decls: 2, vars: 0, consts: [[1, "page-area"]], template: function BlankPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, styles: [".close-btn[_ngcontent-%COMP%]{border:none;background:#f5f5f5;position:fixed;right:30px;padding:0;font-size:12px;text-align:center;line-height:36px;width:36px;height:36px;cursor:pointer;z-index:98;color:#666;top:100px}.close-btn[_ngcontent-%COMP%]   .ms-Icon[_ngcontent-%COMP%]{font-size:14px}.close-btn[_ngcontent-%COMP%]:hover{background-color:#fafafa}@media only screen and (max-width: 992px){.close-btn[_ngcontent-%COMP%]{position:fixed;right:10px;top:0;margin-top:0;background:#fff}}.page-area[_ngcontent-%COMP%]{position:relative}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlankPageComponent, [{
        type: Component,
        args: [{ selector: 'oh-page', template: "\r\n\r\n<div class=\"page-area\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".close-btn{border:none;background:#f5f5f5;position:fixed;right:30px;padding:0;font-size:12px;text-align:center;line-height:36px;width:36px;height:36px;cursor:pointer;z-index:98;color:#666;top:100px}.close-btn .ms-Icon{font-size:14px}.close-btn:hover{background-color:#fafafa}@media only screen and (max-width: 992px){.close-btn{position:fixed;right:10px;top:0;margin-top:0;background:#fff}}.page-area{position:relative}\n"] }]
    }], null, { close: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BlankPageComponent, { className: "BlankPageComponent", filePath: "lib\\blank.page.component\\blank.page.component.ts", lineNumber: 8 }); })();

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment$1 = {
    production: false,
    serverURL: '/',
    restApiUrl: 'https://his-dev.vncare.vn/',
    dreportApiUrl: 'https://test-onehealth.vncare.vn/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

const environment = {
    production: true,
    serverURL: '',
    restApiUrl: window.location.origin + '/',
    dreportApiUrl: 'https://test-onehealth.vncare.vn/',
};

class EnvironmentService {
    static env = isDevMode() ? environment$1 : environment;
    static ɵfac = function EnvironmentService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EnvironmentService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EnvironmentService, factory: EnvironmentService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnvironmentService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

class StateStorageService {
    $sessionStorage;
    previousUrlKey = 'previousUrl';
    constructor($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    storeUrl(url) {
        this.$sessionStorage.store(this.previousUrlKey, url);
    }
    getUrl() {
        return this.$sessionStorage.retrieve(this.previousUrlKey);
    }
    clearUrl() {
        this.$sessionStorage.clear(this.previousUrlKey);
    }
    static ɵfac = function StateStorageService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StateStorageService)(i0.ɵɵinject(i2.SessionStorageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StateStorageService, factory: StateStorageService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StateStorageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i2.SessionStorageService }], null); })();

class AccountService {
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
    static ɵfac = function AccountService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccountService)(i0.ɵɵinject(i2.SessionStorageService), i0.ɵɵinject(StateStorageService), i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i1$1.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i2.SessionStorageService }, { type: StateStorageService }, { type: i1.HttpClient }, { type: i1$1.Router }], null); })();

const AUTH_TOKEN = 'token-his';
class AuthService {
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
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LocalStorageService), i0.ɵɵinject(i2.SessionStorageService), i0.ɵɵinject(AccountService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: i2.LocalStorageService }, { type: i2.SessionStorageService }, { type: AccountService }], null); })();

class Constants {
    static DEVICE_MOBILE = 1;
    static DEVICE_TABLET = 2;
    static DEVICE_DESKTOP = 3;
    static CACHE_ALL_API = 'list:api:all';
    static CACHE_ALL_GROUP = 'list:group:all';
    static CACHE_ALL_REGION = 'list:region:all';
    static CACHE_ALL_SERVICE_TYPE = 'list:service_type:all';
    static CACHE_USER_DETAIL = 'user:detail';
    static CACHE_TOKEN = 'user:token';
    static CACHE_FEATURED_APPS = 'list:featured:apps';
    static CACHE_NOTIFICATION_LIST = 'list:notifications';
    static CACHE_REQUESTS_LIST = 'list:cached-requests';
    static CACHE_REQUESTS_TTL = 600000; // in milisec, 600 000 ms = 10 minutes
}

class RequestOptions extends HttpParams {
    cache;
    ttl;
    errorPassing;
    noToken;
    constructor(cache = false, ttl = Constants.CACHE_REQUESTS_TTL, errorPassing = false, noToken = false) {
        super();
        this.cache = cache;
        this.ttl = ttl;
        this.errorPassing = errorPassing;
        this.noToken = noToken;
    }
}

// import {ConnectionBackend, RequestOptions, Request, HttpRequest, Response, Http, Headers} from '@angular/http';
class InterceptedHttp {
    auth;
    static SKIP_AUTHOR = 'Skip-Authorization';
    constructor(auth) {
        this.auth = auth;
    }
    intercept(req, next) {
        if (!/^(http|https):/i.test(req.url)) {
            req = req.clone({ url: EnvironmentService.env.restApiUrl + req.url });
        }
        return this.sendRequest(req, next);
    }
    sendRequest(req, next) {
        if (!this.isNoToken(req)) {
            if (!req.headers.has(InterceptedHttp.SKIP_AUTHOR)) {
                let accessToken = this.auth.getToken();
                if (accessToken) {
                    req = req.clone({
                        setHeaders: {
                            'Content-Type': 'application/json; charset=utf-8',
                            Authorization: 'Bearer ' + accessToken,
                        },
                    });
                }
            }
        }
        return next
            .handle(req)
            .pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                if (this.isCacheEnabled(req)) {
                    this.putCache(req, event);
                }
            }
        }))
            .catch((error) => {
            Base.hideLoading();
            if (error.status || (error.error && error.error?.code)) {
                if (error.status === 401 || error.error?.code === 401) {
                    Base.showNotification('Bạn chưa đăng nhập, vui lòng đăng nhập', Base.NOTI_ERROR, 'Lỗi đăng nhập');
                    this.auth.logout();
                    return Observable.throw(error);
                }
                else if (error.status === 403 || error.error?.code === 403) {
                    Base.showNotification('Bạn không có quyền truy cập vào chức năng này', Base.NOTI_ERROR, 'Lỗi truy nhập');
                    this.auth.backtoDashboard();
                    return Observable.throw(error);
                }
                else if (error.status === 463 || error.error?.code === 463) {
                    Base.showNotification('Token đã hết hạn', Base.NOTI_ERROR, 'Lỗi truy nhập');
                    this.auth.logout();
                    return Observable.throw(error);
                }
                else {
                    if (error.error && error.error?.code) {
                        Base.showNotification('Lỗi: ' + error.error?.code + ': ' + error.error.message + '', Base.NOTI_ERROR, 'Lỗi kết nối');
                    }
                    else {
                        if (error.status && !this.isErrorPassing(req)) {
                            this.auth.errorPage(error.status, req.url + ' Response: ' + error.message);
                        }
                    }
                    return Observable.throw(error);
                }
            }
            else {
                if (!this.isErrorPassing(req)) {
                    if (error.message)
                        this.auth.errorPage(0, req.url + ' Response: ' + error.message);
                    else
                        this.auth.errorPage(0, 'Lỗi không xác định');
                }
                return Observable.throw(error);
            }
        });
    }
    isCacheEnabled(req) {
        return req.params instanceof RequestOptions && req.params.cache;
    }
    isErrorPassing(req) {
        return req.params instanceof RequestOptions && req.params.errorPassing;
    }
    isNoToken(req) {
        return req.params instanceof RequestOptions && req.params.noToken;
    }
    generateCacheKey(url) {
        let str = [];
        str.push(url.urlWithParams);
        if (!!url.body) {
            str.push(JSON.stringify(url.body));
        }
        return md5(str.join(':'));
    }
    getCache(req) {
        let cacheData = Cache.getCache(this.generateCacheKey(req));
        if (cacheData) {
            let cachedResponse = new HttpResponse();
            Object.assign(cachedResponse, JSON.parse(cacheData));
            return cachedResponse;
        }
        return undefined;
    }
    putCache(req, response) {
        let cacheTtl = 10 * 60 * 1000;
        if (req.params instanceof RequestOptions && req.params.ttl > 0) {
            cacheTtl = req.params.ttl;
        }
        Cache.addCache(this.generateCacheKey(req), JSON.stringify(response), Cache.STORAGE, new Date().getTime() + cacheTtl);
    }
    static ɵfac = function InterceptedHttp_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InterceptedHttp)(i0.ɵɵinject(AuthService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InterceptedHttp, factory: InterceptedHttp.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InterceptedHttp, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: AuthService }], null); })();

const _c0$3 = a0 => ({ "background-color": a0 });
function ContexualActionBarComponent_oh_affix_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_oh_affix_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_oh_affix_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "oh-affix", 3)(1, "div", 4)(2, "div", 5);
    i0.ɵɵtemplate(3, ContexualActionBarComponent_oh_affix_0_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵtemplate(5, ContexualActionBarComponent_oh_affix_0_ng_container_5_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ohOffsetTop", ctx_r0.fixAtTop);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0$3, ctx_r0.bgColor ? ctx_r0.bgColor : ""));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.left);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.right);
} }
function ContexualActionBarComponent_ng_template_1_oh_affix_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_ng_template_1_oh_affix_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_ng_template_1_oh_affix_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "oh-affix", 9)(1, "div", 10)(2, "div", 5);
    i0.ɵɵtemplate(3, ContexualActionBarComponent_ng_template_1_oh_affix_0_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵtemplate(5, ContexualActionBarComponent_ng_template_1_oh_affix_0_ng_container_5_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ohOffsetBottom", ctx_r0.fixAtBottom);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.left);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.right);
} }
function ContexualActionBarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ContexualActionBarComponent_ng_template_1_oh_affix_0_Template, 6, 3, "oh-affix", 8);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const default_r2 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngIf", ctx_r0.fixAtBottom)("ngIfElse", default_r2);
} }
function ContexualActionBarComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ContexualActionBarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "oh-affix", 3)(1, "div", 10)(2, "div", 5);
    i0.ɵɵtemplate(3, ContexualActionBarComponent_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 7);
    i0.ɵɵtemplate(5, ContexualActionBarComponent_ng_template_3_ng_container_5_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ohOffsetTop", 85);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.left);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.right);
} }
class ContexualActionBarComponent {
    left;
    right;
    fixAtTop;
    fixAtBottom;
    bgColor;
    constructor() { }
    ngOnInit() { }
    close() { }
    static ɵfac = function ContexualActionBarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContexualActionBarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContexualActionBarComponent, selectors: [["contexual-actionbar"]], inputs: { left: "left", right: "right", fixAtTop: "fixAtTop", fixAtBottom: "fixAtBottom", bgColor: "bgColor" }, decls: 5, vars: 2, consts: [["elseFixAtTop", ""], ["default", ""], [3, "ohOffsetTop", 4, "ngIf", "ngIfElse"], [3, "ohOffsetTop"], ["oh-row", "", 1, "context-actionbar-wrapper", 3, "ngStyle"], ["oh-col", "", "ohXs", "14", "ohSm", "14", "ohMd", "14", "ohLg", "18", "ohXl", "18", 1, "actionbar-left"], [4, "ngTemplateOutlet"], ["oh-col", "", "ohXs", "10", "ohSm", "10", "ohMd", "10", "ohLg", "6", "ohXl", "6", 1, "actionbar-right", 2, "text-align", "right"], [3, "ohOffsetBottom", 4, "ngIf", "ngIfElse"], [3, "ohOffsetBottom"], ["oh-row", "", 1, "context-actionbar-wrapper"]], template: function ContexualActionBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ContexualActionBarComponent_oh_affix_0_Template, 6, 6, "oh-affix", 2)(1, ContexualActionBarComponent_ng_template_1_Template, 1, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, ContexualActionBarComponent_ng_template_3_Template, 6, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const elseFixAtTop_r3 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.fixAtTop)("ngIfElse", elseFixAtTop_r3);
        } }, dependencies: [i1$2.NgIf, i1$2.NgTemplateOutlet, i1$2.NgStyle, i2$1.OHAffixComponent, i3.OHColDirective, i3.OHRowDirective], styles: [".context-actionbar-wrapper[_ngcontent-%COMP%]{background-color:#fafafa;z-index:99;padding:4px 30px}.ui-dropdown-trigger[_ngcontent-%COMP%] > .ms-Icon[_ngcontent-%COMP%]{font-size:16px}@media only screen and (max-width: 576px){.context-actionbar-wrapper[_ngcontent-%COMP%]{padding:4px 10px}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContexualActionBarComponent, [{
        type: Component,
        args: [{ selector: 'contexual-actionbar', template: "<oh-affix *ngIf=\"fixAtTop; else elseFixAtTop\" [ohOffsetTop]=\"fixAtTop\">\r\n  <div\r\n    oh-row\r\n    class=\"context-actionbar-wrapper\"\r\n    [ngStyle]=\"{ 'background-color': bgColor ? bgColor : '' }\"\r\n  >\r\n    <div\r\n      oh-col\r\n      ohXs=\"14\"\r\n      ohSm=\"14\"\r\n      ohMd=\"14\"\r\n      ohLg=\"18\"\r\n      ohXl=\"18\"\r\n      class=\"actionbar-left\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"left\"></ng-container>\r\n    </div>\r\n    <div\r\n      oh-col\r\n      ohXs=\"10\"\r\n      ohSm=\"10\"\r\n      ohMd=\"10\"\r\n      ohLg=\"6\"\r\n      ohXl=\"6\"\r\n      style=\"text-align: right\"\r\n      class=\"actionbar-right\"\r\n    >\r\n      <ng-container *ngTemplateOutlet=\"right\"></ng-container>\r\n    </div>\r\n  </div>\r\n</oh-affix>\r\n<ng-template #elseFixAtTop>\r\n  <oh-affix *ngIf=\"fixAtBottom; else default\" [ohOffsetBottom]=\"fixAtBottom\">\r\n    <div oh-row class=\"context-actionbar-wrapper\">\r\n      <div\r\n        oh-col\r\n        ohXs=\"14\"\r\n        ohSm=\"14\"\r\n        ohMd=\"14\"\r\n        ohLg=\"18\"\r\n        ohXl=\"18\"\r\n        class=\"actionbar-left\"\r\n      >\r\n        <ng-container *ngTemplateOutlet=\"left\"></ng-container>\r\n      </div>\r\n      <div\r\n        oh-col\r\n        ohXs=\"10\"\r\n        ohSm=\"10\"\r\n        ohMd=\"10\"\r\n        ohLg=\"6\"\r\n        ohXl=\"6\"\r\n        style=\"text-align: right\"\r\n        class=\"actionbar-right\"\r\n      >\r\n        <ng-container *ngTemplateOutlet=\"right\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </oh-affix>\r\n</ng-template>\r\n\r\n<ng-template #default>\r\n  <oh-affix [ohOffsetTop]=\"85\">\r\n    <div oh-row class=\"context-actionbar-wrapper\">\r\n      <div\r\n        oh-col\r\n        ohXs=\"14\"\r\n        ohSm=\"14\"\r\n        ohMd=\"14\"\r\n        ohLg=\"18\"\r\n        ohXl=\"18\"\r\n        class=\"actionbar-left\"\r\n      >\r\n        <ng-container *ngTemplateOutlet=\"left\"></ng-container>\r\n      </div>\r\n      <div\r\n        oh-col\r\n        ohXs=\"10\"\r\n        ohSm=\"10\"\r\n        ohMd=\"10\"\r\n        ohLg=\"6\"\r\n        ohXl=\"6\"\r\n        style=\"text-align: right\"\r\n        class=\"actionbar-right\"\r\n      >\r\n        <ng-container *ngTemplateOutlet=\"right\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </oh-affix>\r\n</ng-template>\r\n", styles: [".context-actionbar-wrapper{background-color:#fafafa;z-index:99;padding:4px 30px}.ui-dropdown-trigger>.ms-Icon{font-size:16px}@media only screen and (max-width: 576px){.context-actionbar-wrapper{padding:4px 10px}}\n"] }]
    }], () => [], { left: [{
            type: Input
        }], right: [{
            type: Input
        }], fixAtTop: [{
            type: Input
        }], fixAtBottom: [{
            type: Input
        }], bgColor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContexualActionBarComponent, { className: "ContexualActionBarComponent", filePath: "lib\\contex.action.bar\\action.bar.component.ts", lineNumber: 8 }); })();

function ActionItemComponent_button_0_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ohSrc", ctx_r0.iconSrc)("ohColor", ctx_r0.color);
} }
function ActionItemComponent_button_0_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ohType", ctx_r0.icon)("ohColor", ctx_r0.color);
} }
function ActionItemComponent_button_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ActionItemComponent_button_0_ng_template_2_i_0_Template, 1, 2, "i", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r0.icon);
} }
function ActionItemComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵtemplate(1, ActionItemComponent_button_0_i_1_Template, 1, 2, "i", 4)(2, ActionItemComponent_button_0_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elseSrc_r2 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ohTooltipTitle", ctx_r0.title)("disabled", ctx_r0.disabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.iconSrc)("ngIfElse", elseSrc_r2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.text);
} }
function ActionItemComponent_ng_template_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ohSrc", ctx_r0.iconSrc)("ohColor", ctx_r0.color);
} }
function ActionItemComponent_ng_template_1_ng_template_2_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ohType", ctx_r0.icon)("ohColor", ctx_r0.color);
} }
function ActionItemComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ActionItemComponent_ng_template_1_ng_template_2_i_0_Template, 1, 2, "i", 6);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r0.icon);
} }
function ActionItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵtemplate(1, ActionItemComponent_ng_template_1_i_1_Template, 1, 2, "i", 4)(2, ActionItemComponent_ng_template_1_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elseSrc_r3 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ohTooltipTitle", ctx_r0.title)("disabled", ctx_r0.disabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.iconSrc)("ngIfElse", elseSrc_r3);
} }
class ActionItemComponent {
    text;
    icon;
    iconSrc;
    color = 'primary';
    title;
    disabled = false;
    constructor() { }
    ngOnInit() { }
    close() { }
    static ɵfac = function ActionItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ActionItemComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionItemComponent, selectors: [["action-item"]], inputs: { text: "text", icon: "icon", iconSrc: "iconSrc", color: "color", title: "title", disabled: "disabled" }, decls: 3, vars: 2, consts: [["notext", ""], ["elseSrc", ""], ["oh-button", "", "ohType", "text", "oh-tooltip", "", "class", "action-item-btn", 3, "ohTooltipTitle", "disabled", 4, "ngIf", "ngIfElse"], ["oh-button", "", "ohType", "text", "oh-tooltip", "", 1, "action-item-btn", 3, "ohTooltipTitle", "disabled"], ["oh-icon", "", 3, "ohSrc", "ohColor", 4, "ngIf", "ngIfElse"], ["oh-icon", "", 3, "ohSrc", "ohColor"], ["oh-icon", "", 3, "ohType", "ohColor", 4, "ngIf"], ["oh-icon", "", 3, "ohType", "ohColor"]], template: function ActionItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ActionItemComponent_button_0_Template, 6, 5, "button", 2)(1, ActionItemComponent_ng_template_1_Template, 4, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const notext_r4 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.text)("ngIfElse", notext_r4);
        } }, dependencies: [i1$2.NgIf, i2$2.OHButtonComponent, i3$1.ɵOHTransitionPatchDirective, i4.OHIconDirective, i5.OHTooltipDirective], styles: [".action-item-btn[_ngcontent-%COMP%]{margin:0 5px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionItemComponent, [{
        type: Component,
        args: [{ selector: 'action-item', template: "<button\r\n  *ngIf=\"text; else notext\"\r\n  oh-button\r\n  ohType=\"text\"\r\n  oh-tooltip\r\n  [ohTooltipTitle]=\"title\"\r\n  [disabled]=\"disabled\"\r\n  class=\"action-item-btn\"\r\n>\r\n  <i\r\n    *ngIf=\"iconSrc; else elseSrc\"\r\n    oh-icon\r\n    [ohSrc]=\"iconSrc\"\r\n    [ohColor]=\"color\"\r\n  ></i>\r\n  <ng-template #elseSrc>\r\n    <i *ngIf=\"icon\" oh-icon [ohType]=\"icon\" [ohColor]=\"color\"></i>\r\n  </ng-template>\r\n  <span>{{ text }}</span>\r\n</button>\r\n<ng-template #notext>\r\n  <button\r\n    oh-button\r\n    ohType=\"text\"\r\n    oh-tooltip\r\n    [ohTooltipTitle]=\"title\"\r\n    [disabled]=\"disabled\"\r\n    class=\"action-item-btn\"\r\n  >\r\n    <i\r\n      *ngIf=\"iconSrc; else elseSrc\"\r\n      oh-icon\r\n      [ohSrc]=\"iconSrc\"\r\n      [ohColor]=\"color\"\r\n    ></i>\r\n    <ng-template #elseSrc>\r\n      <i *ngIf=\"icon\" oh-icon [ohType]=\"icon\" [ohColor]=\"color\"></i>\r\n    </ng-template>\r\n  </button>\r\n</ng-template>\r\n", styles: [".action-item-btn{margin:0 5px}\n"] }]
    }], () => [], { text: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconSrc: [{
            type: Input
        }], color: [{
            type: Input
        }], title: [{
            type: Input
        }], disabled: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ActionItemComponent, { className: "ActionItemComponent", filePath: "lib\\contex.action.bar\\action.item.component\\action.item.component.ts", lineNumber: 8 }); })();

const _c0$2 = ["*"];
function DrawerContentComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
class DrawerContentComponent {
    title;
    ngOnInit() { }
    static ɵfac = function DrawerContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DrawerContentComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawerContentComponent, selectors: [["oh-main-drawer"]], inputs: { title: "title" }, ngContentSelectors: _c0$2, decls: 3, vars: 1, consts: [[1, "drawer-content-wrapper"], ["oh-typography", "", "class", "page-title", 4, "ngIf"], ["oh-typography", "", 1, "page-title"]], template: function DrawerContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DrawerContentComponent_h4_1_Template, 2, 1, "h4", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.title);
        } }, dependencies: [i1$2.NgIf, i2$3.OHTypographyComponent], styles: [".drawer-content-wrapper[_ngcontent-%COMP%]{padding:30px 25px 0}.drawer-content-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{margin-bottom:25px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawerContentComponent, [{
        type: Component,
        args: [{ selector: 'oh-main-drawer', template: "<div class=\"drawer-content-wrapper\">\r\n  <h4 *ngIf=\"title\" oh-typography class=\"page-title\">{{ title }}</h4>\r\n  <ng-content> </ng-content>\r\n</div>\r\n", styles: [".drawer-content-wrapper{padding:30px 25px 0}.drawer-content-wrapper .page-title{margin-bottom:25px}\n"] }]
    }], null, { title: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DrawerContentComponent, { className: "DrawerContentComponent", filePath: "lib\\drawer.content.component\\drawer.content.component.ts", lineNumber: 8 }); })();

class ActiveUrlCheckPipe {
    transform(rootvalue, value) {
        if (rootvalue) {
            if (rootvalue.startsWith(value)) {
                return true;
            }
            return false;
        }
        return false;
    }
    static ɵfac = function ActiveUrlCheckPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ActiveUrlCheckPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "activeUrlCheck", type: ActiveUrlCheckPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActiveUrlCheckPipe, [{
        type: Pipe,
        args: [{ name: 'activeUrlCheck' }]
    }], null, null); })();

// code cũ của Trang
// export class Utilities {
//   static assetUrl(url: string): string {
//     // @ts-ignore
//     const publicPath = __webpack_public_path__;
//     const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
//     const urlPrefix = url.startsWith('/') ? '' : '/';
//     return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
//   }
// }
//code sửa lỗi đường dẫn của Tuấn
class Utilities {
    static assetUrl(url) {
        // @ts-ignore
        const publicPath = __webpack_public_path__;
        const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
        const urlPrefix = url.startsWith('/') ? '' : '/';
        let appName = '';
        if (publicPath.includes('apps')) {
            const publicPathSplit = publicPath.split('/');
            appName = publicPathSplit[publicPathSplit.length - 1];
            if (appName.length == 0) {
                appName = publicPathSplit[publicPathSplit.length - 2];
            }
        }
        if (appName.length > 0) {
            return `https://storage-emr.vnpt.vn/onehealth.ui.public/core/${appName}/assets${urlPrefix}${url}`;
        }
        return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
    }
}
//đường dẫn khi chạy trên local: http://localhost:4213/assets/icons/icons8-person-48.png
//đường dẫn hiện tại đang lấy sau khi đẩy lên MinIO: /apps/navigation/quickmenu/assets/icons/icons8-person-48.png
//đường dẫn khi đẩy lên MinIO: https://storage-emr.vnpt.vn/onehealth.ui.public/core/quickmenu/assets/icons/icons8-person-48.png

class AssetUrlPipe {
    transform(value) {
        return Utilities.assetUrl(value);
    }
    static ɵfac = function AssetUrlPipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AssetUrlPipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "assetUrl", type: AssetUrlPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AssetUrlPipe, [{
        type: Pipe,
        args: [{ name: 'assetUrl' }]
    }], null, null); })();

function SubMenuComponent_ul_0_ng_container_1_li_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵstyleMap(menu_r2.ghiChu ? "background:" + menu_r2.ghiChu : "");
    i0.ɵɵproperty("ohSrc", menu_r2.logo)("ohSize", "md")("alt", menu_r2.ten);
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r1); const menu_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onClick(menu_r2)); });
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_i_2_Template, 1, 5, "i", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", menu_r2.ten);
    i0.ɵɵproperty("ohSelected", i0.ɵɵpipeBind2(1, 4, ctx_r2.activeRouter, menu_r2.redirectUrl));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", menu_r2.logo);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", menu_r2.ten, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohType", menu_r2.icon)("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_i_1_Template, 1, 2, "i", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohSrc", i0.ɵɵpipeBind1(1, 2, menu_r2.icon))("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_i_0_Template, 2, 4, "i", 15);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r4); const menu_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onClick(menu_r2)); });
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_Template, 2, 1, "ng-container", 12)(3, SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elseTemplate_r5 = i0.ɵɵreference(4);
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", menu_r2.routerLink);
    i0.ɵɵpropertyInterpolate("title", menu_r2.title);
    i0.ɵɵproperty("ohSelected", i0.ɵɵpipeBind2(1, 6, ctx_r2.activeRouter, menu_r2.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", menu_r2.iconfont)("ngIfElse", elseTemplate_r5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", menu_r2.title, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohType", menu_r2.icon)("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_i_1_Template, 1, 2, "i", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohSrc", i0.ɵɵpipeBind1(1, 2, menu_r2.icon))("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_i_0_Template, 2, 4, "i", 15);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r6); const menu_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onClick(menu_r2)); });
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_Template, 2, 1, "ng-container", 12)(3, SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elseTemplate_r7 = i0.ɵɵreference(4);
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("ohRouterLink", menu_r2.ohRouterLink);
    i0.ɵɵpropertyInterpolate("title", menu_r2.title);
    i0.ɵɵproperty("ohSelected", i0.ɵɵpipeBind2(1, 6, ctx_r2.activeRouter, menu_r2.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", menu_r2.iconfont)("ngIfElse", elseTemplate_r7);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", menu_r2.title, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohType", menu_r2.icon)("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_i_1_Template, 1, 2, "i", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohSrc", i0.ɵɵpipeBind1(1, 2, menu_r2.icon))("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_i_0_Template, 2, 4, "i", 15);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 18);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵelementStart(2, "a", 19);
    i0.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_Template, 2, 1, "ng-container", 12)(4, SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elseTemplate_r8 = i0.ɵɵreference(5);
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ohSelected", i0.ɵɵpipeBind2(1, 6, ctx_r2.activeRouter, menu_r2.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", menu_r2.href, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", menu_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.iconfont)("ngIfElse", elseTemplate_r8);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", menu_r2.title, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_1_Template, 4, 7, "li", 4)(2, SubMenuComponent_ul_0_ng_container_1_li_2_Template, 6, 9, "li", 5)(3, SubMenuComponent_ul_0_ng_container_1_li_3_Template, 6, 9, "li", 6)(4, SubMenuComponent_ul_0_ng_container_1_li_4_Template, 7, 9, "li", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.redirectUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.routerLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.ohRouterLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.href);
} }
function SubMenuComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 2);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_Template, 5, 4, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.menuConfig);
} }
class SubMenuComponent {
    router;
    menuConfig;
    itemClick = new EventEmitter();
    activeRouter;
    openNewTab(url) {
        window.open(url, '_blank');
    }
    constructor(router) {
        this.router = router;
        this.router.events.subscribe((data) => {
            if (data instanceof NavigationEnd) {
                this.activeRouter = data.url.toLowerCase();
            }
        });
    }
    ngOnInit() { }
    onClick(event) {
        this.itemClick.emit(event);
        if (event.redirectUrl) {
            this.openNewTab(event.redirectUrl);
        }
    }
    static ɵfac = function SubMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubMenuComponent)(i0.ɵɵdirectiveInject(i1$1.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubMenuComponent, selectors: [["submenu-comp"]], inputs: { menuConfig: "menuConfig" }, outputs: { itemClick: "itemClick" }, decls: 1, vars: 1, consts: [["elseTemplate", ""], ["oh-menu", "", 4, "ngIf"], ["oh-menu", ""], [4, "ngFor", "ngForOf"], ["class", "w-100", "oh-menu-item", "", 3, "title", "ohSelected", "click", 4, "ngIf"], ["class", "w-100", "oh-menu-item", "", 3, "routerLink", "title", "ohSelected", "click", 4, "ngIf"], ["class", "w-100", "oh-menu-item", "", 3, "ohRouterLink", "title", "ohSelected", "click", 4, "ngIf"], ["class", "w-100", "oh-menu-item", "", 3, "ohSelected", 4, "ngIf"], ["oh-menu-item", "", 1, "w-100", 3, "click", "title", "ohSelected"], ["oh-icon", "", "class", "h-100 p-1", 3, "ohSrc", "ohSize", "alt", "style", 4, "ngIf"], ["oh-icon", "", 1, "h-100", "p-1", 3, "ohSrc", "ohSize", "alt"], ["oh-menu-item", "", 1, "w-100", 3, "click", "routerLink", "title", "ohSelected"], [4, "ngIf", "ngIfElse"], ["oh-icon", "", 3, "ohType", "ohSize", 4, "ngIf"], ["oh-icon", "", 3, "ohType", "ohSize"], ["oh-icon", "", 3, "ohSrc", "ohSize", 4, "ngIf"], ["oh-icon", "", 3, "ohSrc", "ohSize"], ["oh-menu-item", "", 1, "w-100", 3, "click", "ohRouterLink", "title", "ohSelected"], ["oh-menu-item", "", 1, "w-100", 3, "ohSelected"], ["target", "_blank", 3, "href", "title"]], template: function SubMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SubMenuComponent_ul_0_Template, 2, 1, "ul", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.menuConfig && ctx.menuConfig.length > 0);
        } }, dependencies: [i1$2.NgForOf, i1$2.NgIf, i3$1.ɵOHTransitionPatchDirective, i4$1.OHMenuDirective, i4$1.OHMenuItemComponent, i4.OHIconDirective, i1$1.RouterLink, i6.VNPTRouterLinkDirective, ActiveUrlCheckPipe, AssetUrlPipe], styles: ["[_nghost-%COMP%]     .ui-menu-inline .ui-menu-item{margin-bottom:15px;margin-top:6px;padding-right:21px;padding-left:16px!important}[_nghost-%COMP%]     .ui-menu-inline .ui-menu-item i{margin-right:12px}[_nghost-%COMP%]     .ui-menu:not(.ui-menu-horizontal) .ui-menu-item-selected{background-color:#e7e8e9}[_nghost-%COMP%]     .ui-menu-inline>.ui-menu-submenu>.ui-menu-submenu-title{font-weight:600;padding-left:10px!important}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubMenuComponent, [{
        type: Component,
        args: [{ selector: 'submenu-comp', template: "<ul *ngIf=\"menuConfig && menuConfig.length > 0\" oh-menu>\r\n  <ng-container *ngFor=\"let menu of menuConfig; let i = index\">\r\n    <li\r\n      class=\"w-100\"\r\n      *ngIf=\"menu.redirectUrl\"\r\n      oh-menu-item\r\n      title=\"{{ menu.ten }}\"\r\n      [ohSelected]=\"activeRouter | activeUrlCheck: menu.redirectUrl\"\r\n      (click)=\"onClick(menu)\"\r\n    >\r\n      <i\r\n        *ngIf=\"menu.logo\"\r\n        oh-icon\r\n        [ohSrc]=\"menu.logo\"\r\n        [ohSize]=\"'md'\"\r\n        [alt]=\"menu.ten\"\r\n        class=\"h-100 p-1\"\r\n        [style]=\"menu.ghiChu ? 'background:' + menu.ghiChu : ''\"\r\n      ></i>\r\n      {{ menu.ten }}\r\n    </li>\r\n    <li\r\n      class=\"w-100\"\r\n      *ngIf=\"menu.routerLink\"\r\n      oh-menu-item\r\n      routerLink=\"{{ menu.routerLink }}\"\r\n      title=\"{{ menu.title }}\"\r\n      [ohSelected]=\"activeRouter | activeUrlCheck: menu.routerLink\"\r\n      (click)=\"onClick(menu)\"\r\n    >\r\n      <ng-container *ngIf=\"menu.iconfont; else elseTemplate\">\r\n        <i *ngIf=\"menu.icon\" oh-icon [ohType]=\"menu.icon\" [ohSize]=\"'md'\"></i>\r\n      </ng-container>\r\n      <ng-template #elseTemplate>\r\n        <i\r\n          *ngIf=\"menu.icon\"\r\n          oh-icon\r\n          [ohSrc]=\"menu.icon | assetUrl\"\r\n          [ohSize]=\"'md'\"\r\n        ></i> </ng-template\r\n      >{{ menu.title }}\r\n    </li>\r\n    <li\r\n      class=\"w-100\"\r\n      *ngIf=\"menu.ohRouterLink\"\r\n      oh-menu-item\r\n      ohRouterLink=\"{{ menu.ohRouterLink }}\"\r\n      title=\"{{ menu.title }}\"\r\n      [ohSelected]=\"activeRouter | activeUrlCheck: menu.routerLink\"\r\n      (click)=\"onClick(menu)\"\r\n    >\r\n      <ng-container *ngIf=\"menu.iconfont; else elseTemplate\">\r\n        <i *ngIf=\"menu.icon\" oh-icon [ohType]=\"menu.icon\" [ohSize]=\"'md'\"></i>\r\n      </ng-container>\r\n      <ng-template #elseTemplate>\r\n        <i\r\n          *ngIf=\"menu.icon\"\r\n          oh-icon\r\n          [ohSrc]=\"menu.icon | assetUrl\"\r\n          [ohSize]=\"'md'\"\r\n        ></i> </ng-template\r\n      >{{ menu.title }}\r\n    </li>\r\n    <li\r\n      class=\"w-100\"\r\n      *ngIf=\"menu.href\"\r\n      oh-menu-item\r\n      [ohSelected]=\"activeRouter | activeUrlCheck: menu.routerLink\"\r\n    >\r\n      <a href=\"{{ menu.href }}\" title=\"{{ menu.title }}\" target=\"_blank\">\r\n        <ng-container *ngIf=\"menu.iconfont; else elseTemplate\">\r\n          <i *ngIf=\"menu.icon\" oh-icon [ohType]=\"menu.icon\" [ohSize]=\"'md'\"></i>\r\n        </ng-container>\r\n        <ng-template #elseTemplate>\r\n          <i\r\n            *ngIf=\"menu.icon\"\r\n            oh-icon\r\n            [ohSrc]=\"menu.icon | assetUrl\"\r\n            [ohSize]=\"'md'\"\r\n          ></i>\r\n        </ng-template>\r\n        {{ menu.title }}\r\n      </a>\r\n    </li>\r\n  </ng-container>\r\n</ul>\r\n", styles: [":host ::ng-deep .ui-menu-inline .ui-menu-item{margin-bottom:15px;margin-top:6px;padding-right:21px;padding-left:16px!important}:host ::ng-deep .ui-menu-inline .ui-menu-item i{margin-right:12px}:host ::ng-deep .ui-menu:not(.ui-menu-horizontal) .ui-menu-item-selected{background-color:#e7e8e9}:host ::ng-deep .ui-menu-inline>.ui-menu-submenu>.ui-menu-submenu-title{font-weight:600;padding-left:10px!important}\n"] }]
    }], () => [{ type: i1$1.Router }], { menuConfig: [{
            type: Input
        }], itemClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SubMenuComponent, { className: "SubMenuComponent", filePath: "lib\\menu.component\\menu.component.ts", lineNumber: 9 }); })();

class ChangeDateTimePipe {
    transform(value) {
        let reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
        let dateArray = reggie.exec(value);
        let dataObject = new Date(+dateArray[1], +dateArray[2] - 1, +dateArray[3], +dateArray[4], +dateArray[5], +dateArray[6]);
        let timenow = new Date();
        let date;
        let month;
        let hour;
        let minute;
        let second;
        if (dataObject.getFullYear() < timenow.getFullYear()) {
            return dataObject.toLocaleDateString();
        }
        else if (dataObject.getFullYear() == timenow.getFullYear()) {
            if (dataObject.getMonth() < timenow.getMonth()) {
                month = timenow.getMonth() - dataObject.getMonth();
                return month + ' ' + 'tháng trước';
            }
            else if (dataObject.getMonth() == timenow.getMonth()) {
                if (dataObject.getDate() < timenow.getDate()) {
                    date = timenow.getDate() - dataObject.getDate();
                    return date + ' ' + 'ngày trước';
                }
                else if (dataObject.getDate() == timenow.getDate()) {
                    if (dataObject.getHours() < timenow.getHours()) {
                        hour = timenow.getHours() - dataObject.getHours();
                        return hour + ' ' + 'giờ trước';
                    }
                    else if (dataObject.getHours() == timenow.getHours()) {
                        if (dataObject.getMinutes() < timenow.getMinutes()) {
                            minute = timenow.getMinutes() - dataObject.getMinutes();
                            return minute + ' ' + 'phút trước';
                        }
                        else if (dataObject.getMinutes() == timenow.getMinutes()) {
                            if (dataObject.getSeconds() < timenow.getSeconds()) {
                                second = timenow.getSeconds() - dataObject.getSeconds();
                                return second + ' ' + 'giây trước';
                            }
                            else if (dataObject.getSeconds() == timenow.getSeconds()) {
                                return 'less than a minute';
                            }
                        }
                    }
                }
            }
        }
    }
    static ɵfac = function ChangeDateTimePipe_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChangeDateTimePipe)(); };
    static ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "changeDateTime", type: ChangeDateTimePipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangeDateTimePipe, [{
        type: Pipe,
        args: [{ name: 'changeDateTime' }]
    }], null, null); })();

function ToolbarItemComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵpipe(2, "assetUrl");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSrc", ctx_r0.iconfont ? "" : i0.ɵɵpipeBind1(2, 5, ctx_r0.icon))("ohType", ctx_r0.iconfont ? ctx_r0.icon : "")("ohSize", "lg");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function ToolbarItemComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵpipe(2, "assetUrl");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSrc", ctx_r0.iconfont ? "" : i0.ɵɵpipeBind1(2, 4, ctx_r0.icon))("ohType", ctx_r0.iconfont ? ctx_r0.icon : "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function ToolbarItemComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵpipe(2, "assetUrl");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSrc", ctx_r0.iconfont ? "" : i0.ɵɵpipeBind1(2, 5, ctx_r0.icon))("ohType", ctx_r0.iconfont ? ctx_r0.icon : "")("ohSize", "xs");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
class ToolbarItemComponent {
    type = 'md';
    title;
    icon;
    iconfont;
    ngOnInit() { }
    static ɵfac = function ToolbarItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToolbarItemComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarItemComponent, selectors: [["toolbar-item"]], inputs: { type: "type", title: "title", icon: "icon", iconfont: "iconfont" }, decls: 3, vars: 3, consts: [["oh-button", "", "ohType", "text", "class", "toolbar-btn", 3, "title", 4, "ngIf"], ["oh-button", "", "ohType", "text", "class", "toolbar-btn-sm", 3, "title", 4, "ngIf"], ["oh-button", "", "ohType", "text", 1, "toolbar-btn", 3, "title"], ["oh-icon", "", 3, "ohSrc", "ohType", "ohSize"], ["oh-icon", "", 3, "ohSrc", "ohType"], ["oh-button", "", "ohType", "text", 1, "toolbar-btn-sm", 3, "title"]], template: function ToolbarItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ToolbarItemComponent_button_0_Template, 5, 7, "button", 0)(1, ToolbarItemComponent_button_1_Template, 5, 6, "button", 0)(2, ToolbarItemComponent_button_2_Template, 5, 7, "button", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.type === "lg");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type === "md");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type === "sm");
        } }, dependencies: [i1$2.NgIf, i2$2.OHButtonComponent, i3$1.ɵOHTransitionPatchDirective, i4.OHIconDirective, AssetUrlPipe], styles: [".toolbar-btn[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:116px;vertical-align:middle}.toolbar-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;width:100%;display:block;margin-top:5px;font-size:12px;text-overflow:ellipsis;overflow:hidden}.toolbar-btn-sm[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:100px;vertical-align:middle}.toolbar-btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;width:100%;display:block;margin-top:5px;font-size:11px;text-overflow:ellipsis;overflow:hidden}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarItemComponent, [{
        type: Component,
        args: [{ selector: 'toolbar-item', template: "<button\r\n  *ngIf=\"type === 'lg'\"\r\n  oh-button\r\n  ohType=\"text\"\r\n  class=\"toolbar-btn\"\r\n  title=\"{{ title }}\"\r\n>\r\n  <i\r\n    oh-icon\r\n    [ohSrc]=\"iconfont ? '' : (icon | assetUrl)\"\r\n    [ohType]=\"iconfont ? icon : ''\"\r\n    [ohSize]=\"'lg'\"\r\n  ></i\r\n  ><span>{{ title }}</span>\r\n</button>\r\n<button\r\n  *ngIf=\"type === 'md'\"\r\n  oh-button\r\n  ohType=\"text\"\r\n  class=\"toolbar-btn\"\r\n  title=\"{{ title }}\"\r\n>\r\n  <i\r\n    oh-icon\r\n    [ohSrc]=\"iconfont ? '' : (icon | assetUrl)\"\r\n    [ohType]=\"iconfont ? icon : ''\"\r\n  ></i\r\n  ><span>{{ title }}</span>\r\n</button>\r\n<button\r\n  *ngIf=\"type === 'sm'\"\r\n  oh-button\r\n  ohType=\"text\"\r\n  class=\"toolbar-btn-sm\"\r\n  title=\"{{ title }}\"\r\n>\r\n  <i\r\n    oh-icon\r\n    [ohSrc]=\"iconfont ? '' : (icon | assetUrl)\"\r\n    [ohType]=\"iconfont ? icon : ''\"\r\n    [ohSize]=\"'xs'\"\r\n  ></i\r\n  ><span>{{ title }}</span>\r\n</button>\r\n", styles: [".toolbar-btn{height:100%;margin:0 4px;max-width:116px;vertical-align:middle}.toolbar-btn i{width:100%;display:block}.toolbar-btn span{margin-left:0;width:100%;display:block;margin-top:5px;font-size:12px;text-overflow:ellipsis;overflow:hidden}.toolbar-btn-sm{height:100%;margin:0 4px;max-width:100px;vertical-align:middle}.toolbar-btn-sm i{width:100%;display:block}.toolbar-btn-sm span{margin-left:0;width:100%;display:block;margin-top:5px;font-size:11px;text-overflow:ellipsis;overflow:hidden}\n"] }]
    }], null, { type: [{
            type: Input
        }], title: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconfont: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToolbarItemComponent, { className: "ToolbarItemComponent", filePath: "lib\\toolbar.component\\toolbar.item.component\\toolbar.item.component.ts", lineNumber: 8 }); })();

const _c0$1 = ["toolbarCtn"];
const _c1$1 = ["toolbarWrp"];
const _c2 = ["*"];
const _c3 = a0 => ({ "toolbar-wrapper": true, collapse: a0 });
const _c4 = a0 => ({ "background-color": a0 });
function ToolbarComponent_div_4_ng_container_1_toolbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "toolbar-item", 15);
    i0.ɵɵlistener("click", function ToolbarComponent_div_4_ng_container_1_toolbar_item_1_Template_toolbar_item_click_0_listener() { i0.ɵɵrestoreView(_r1); const item_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onItemClick(item_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", item_r2.title)("icon", item_r2.icon)("iconfont", item_r2.iconfont)("type", ctx_r2.isCollapse ? "sm" : "md");
} }
function ToolbarComponent_div_4_ng_container_1_oh_divider_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "oh-divider", 16);
} }
function ToolbarComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ToolbarComponent_div_4_ng_container_1_toolbar_item_1_Template, 1, 4, "toolbar-item", 13)(2, ToolbarComponent_div_4_ng_container_1_oh_divider_2_Template, 1, 0, "oh-divider", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r2.title || item_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r2.title && !item_r2.icon && ctx_r2.screenSize > 992);
} }
function ToolbarComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵelement(1, "i", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const more_r4 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ohDropdownMenu", more_r4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohType", "more")("ohSize", "md");
} }
function ToolbarComponent_div_4_li_7_toolbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "toolbar-item", 15);
    i0.ɵɵlistener("click", function ToolbarComponent_div_4_li_7_toolbar_item_1_Template_toolbar_item_click_0_listener() { i0.ɵɵrestoreView(_r5); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onItemClick(item_r6)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", item_r6.title)("icon", item_r6.icon)("iconfont", item_r6.iconfont)("type", ctx_r2.isCollapse ? "sm" : "md");
} }
function ToolbarComponent_div_4_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵtemplate(1, ToolbarComponent_div_4_li_7_toolbar_item_1_Template, 1, 4, "toolbar-item", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r6.title || item_r6.icon);
} }
function ToolbarComponent_div_4_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function ToolbarComponent_div_4_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.tonggleCollapse()); });
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSize", "xs")("ohColor", "primary");
} }
function ToolbarComponent_div_4_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function ToolbarComponent_div_4_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.tonggleCollapse()); });
    i0.ɵɵelement(1, "i", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSize", "xs")("ohColor", "primary");
} }
function ToolbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ToolbarComponent_div_4_ng_container_1_Template, 3, 2, "ng-container", 7);
    i0.ɵɵprojection(2);
    i0.ɵɵtemplate(3, ToolbarComponent_div_4_button_3_Template, 2, 3, "button", 8);
    i0.ɵɵelementStart(4, "oh-dropdown-menu", null, 2)(6, "ul", 9);
    i0.ɵɵtemplate(7, ToolbarComponent_div_4_li_7_Template, 2, 1, "li", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, ToolbarComponent_div_4_button_8_Template, 2, 2, "button", 11)(9, ToolbarComponent_div_4_button_9_Template, 2, 2, "button", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ohSpan", 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.config.slice(0, ctx_r2.sliceNum));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.config.length > ctx_r2.sliceNum);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r2.config.slice(ctx_r2.sliceNum, ctx_r2.config.length));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isCollapse);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isCollapse);
} }
class ToolbarComponent {
    renderer;
    config;
    fixAtTop = 85;
    bgColor;
    isCollapse = false;
    screenSize = 1200;
    sliceNum = 15;
    itemClick = new EventEmitter();
    onResize(event) {
        this.calculateScreen();
    }
    toolbarCtn;
    toolbarWrp;
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngOnInit() {
        setTimeout(() => {
            this.calculateScreen();
        }, 300);
    }
    calculateScreen() {
        this.screenSize = this.toolbarCtn.nativeElement.offsetWidth;
        if (this.screenSize >= 1200)
            this.sliceNum = 15;
        else if (this.screenSize >= 992)
            this.sliceNum = 9;
        else if (this.screenSize >= 768)
            this.sliceNum = 6;
        else if (this.screenSize >= 425)
            this.sliceNum = 3;
        else
            this.sliceNum = 2;
        this.renderer.setStyle(this.toolbarWrp.nativeElement, 'width', this.toolbarCtn.nativeElement.offsetWidth + 'px');
        this.renderer.setStyle(this.toolbarWrp.nativeElement, 'top', this.fixAtTop + 'px');
    }
    tonggleCollapse() {
        this.isCollapse = !this.isCollapse;
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
    ngAfterViewInit() { }
    static ɵfac = function ToolbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToolbarComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["app-toolbar"]], viewQuery: function ToolbarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0$1, 5);
            i0.ɵɵviewQuery(_c1$1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toolbarCtn = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toolbarWrp = _t.first);
        } }, hostBindings: function ToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function ToolbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { config: "config", fixAtTop: "fixAtTop", bgColor: "bgColor", isCollapse: "isCollapse" }, outputs: { itemClick: "itemClick" }, ngContentSelectors: _c2, decls: 5, vars: 7, consts: [["toolbarCtn", ""], ["toolbarWrp", ""], ["more", "ohDropdownMenu"], [1, "toobar-container"], ["oh-row", "", 3, "ngClass", "ngStyle"], ["oh-col", "", 3, "ohSpan", 4, "ngIf"], ["oh-col", "", 3, "ohSpan"], [4, "ngFor", "ngForOf"], ["oh-button", "", "ohType", "text", "class", "toolbar-more-btn", "oh-dropdown", "", 3, "ohDropdownMenu", 4, "ngIf"], ["oh-menu", "", "ohSelectable", ""], ["oh-menu-item", "", "style", "text-align: center", 4, "ngFor", "ngForOf"], ["oh-button", "", "ohType", "text", "class", "toolbar-btn-collapse", "title", "Thu g\u1ECDn", 3, "click", 4, "ngIf"], ["oh-button", "", "ohType", "text", "class", "toolbar-btn-collapse", "title", "M\u1EDF r\u1ED9ng", 3, "click", 4, "ngIf"], [3, "title", "icon", "iconfont", "type", "click", 4, "ngIf"], ["ohType", "vertical", 4, "ngIf"], [3, "click", "title", "icon", "iconfont", "type"], ["ohType", "vertical"], ["oh-button", "", "ohType", "text", "oh-dropdown", "", 1, "toolbar-more-btn", 3, "ohDropdownMenu"], ["oh-icon", "", 3, "ohType", "ohSize"], ["oh-menu-item", "", 2, "text-align", "center"], ["oh-button", "", "ohType", "text", "title", "Thu g\u1ECDn", 1, "toolbar-btn-collapse", 3, "click"], ["oh-icon", "", "ohType", "up", 3, "ohSize", "ohColor"], ["oh-button", "", "ohType", "text", "title", "M\u1EDF r\u1ED9ng", 1, "toolbar-btn-collapse", 3, "click"], ["oh-icon", "", "ohType", "down", 3, "ohSize", "ohColor"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 3, 0)(2, "div", 4, 1);
            i0.ɵɵtemplate(4, ToolbarComponent_div_4_Template, 10, 6, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c3, ctx.isCollapse))("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx.bgColor ? ctx.bgColor : ""));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.screenSize);
        } }, dependencies: [i1$2.NgClass, i1$2.NgForOf, i1$2.NgIf, i1$2.NgStyle, i2$2.OHButtonComponent, i3$1.ɵOHTransitionPatchDirective, i4$2.OHDividerComponent, i4$1.OHMenuDirective, i4$1.OHMenuItemComponent, i6$1.OHDropDownDirective, i6$1.OHDropdownMenuComponent, i6$1.OHDropdownButtonDirective, i3.OHColDirective, i3.OHRowDirective, i4.OHIconDirective, ToolbarItemComponent], styles: [".toobar-container[_ngcontent-%COMP%]{min-height:66px}.toolbar-wrapper[_ngcontent-%COMP%]{background-color:#fff;z-index:98;padding:0 30px;height:66px;position:fixed}.toolbar-wrapper.collapse[_ngcontent-%COMP%]{height:50px}[_nghost-%COMP%]     .ui-divider-vertical{height:32px;margin-left:16px;margin-right:16px}.toolbar-btn-collapse[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:2px}[_nghost-%COMP%]     .toolbar-wrapper.collapse .ui-divider-vertical{height:24px;margin-top:3px;margin-left:8px;margin-right:8px}.toolbar-more-btn[_ngcontent-%COMP%]{text-align:center;height:100%;width:40px;vertical-align:middle;padding-left:18px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarComponent, [{
        type: Component,
        args: [{ selector: 'app-toolbar', template: "<div #toolbarCtn class=\"toobar-container\">\r\n  <div\r\n    #toolbarWrp\r\n    oh-row\r\n    [ngClass]=\"{ 'toolbar-wrapper': true, collapse: isCollapse }\"\r\n    [ngStyle]=\"{ 'background-color': bgColor ? bgColor : '' }\"\r\n  >\r\n    <div *ngIf=\"screenSize\" oh-col [ohSpan]=\"24\">\r\n      <ng-container\r\n        *ngFor=\"let item of config.slice(0, sliceNum); let i = index\"\r\n      >\r\n        <toolbar-item\r\n          *ngIf=\"item.title || item.icon\"\r\n          [title]=\"item.title\"\r\n          [icon]=\"item.icon\"\r\n          [iconfont]=\"item.iconfont\"\r\n          [type]=\"isCollapse ? 'sm' : 'md'\"\r\n          (click)=\"onItemClick(item)\"\r\n        ></toolbar-item>\r\n        <oh-divider\r\n          *ngIf=\"!item.title && !item.icon && screenSize > 992\"\r\n          ohType=\"vertical\"\r\n        ></oh-divider>\r\n      </ng-container>\r\n      <ng-content></ng-content>\r\n      <button\r\n        *ngIf=\"config.length > sliceNum\"\r\n        oh-button\r\n        ohType=\"text\"\r\n        class=\"toolbar-more-btn\"\r\n        oh-dropdown\r\n        [ohDropdownMenu]=\"more\"\r\n      >\r\n        <i oh-icon [ohType]=\"'more'\" [ohSize]=\"'md'\"></i>\r\n      </button>\r\n      <oh-dropdown-menu #more=\"ohDropdownMenu\">\r\n        <ul oh-menu ohSelectable>\r\n          <li\r\n            *ngFor=\"\r\n              let item of config.slice(sliceNum, config.length);\r\n              let i = index\r\n            \"\r\n            oh-menu-item\r\n            style=\"text-align: center\"\r\n          >\r\n            <toolbar-item\r\n              *ngIf=\"item.title || item.icon\"\r\n              [title]=\"item.title\"\r\n              [icon]=\"item.icon\"\r\n              [iconfont]=\"item.iconfont\"\r\n              [type]=\"isCollapse ? 'sm' : 'md'\"\r\n              (click)=\"onItemClick(item)\"\r\n            ></toolbar-item>\r\n          </li>\r\n        </ul>\r\n      </oh-dropdown-menu>\r\n\r\n      <button\r\n        *ngIf=\"!isCollapse\"\r\n        oh-button\r\n        ohType=\"text\"\r\n        class=\"toolbar-btn-collapse\"\r\n        title=\"Thu g\u1ECDn\"\r\n        (click)=\"tonggleCollapse()\"\r\n      >\r\n        <i oh-icon ohType=\"up\" [ohSize]=\"'xs'\" [ohColor]=\"'primary'\"></i>\r\n      </button>\r\n      <button\r\n        *ngIf=\"isCollapse\"\r\n        oh-button\r\n        ohType=\"text\"\r\n        class=\"toolbar-btn-collapse\"\r\n        title=\"M\u1EDF r\u1ED9ng\"\r\n        (click)=\"tonggleCollapse()\"\r\n      >\r\n        <i\r\n          oh-icon\r\n          ohType=\"down\"\r\n          [ohSize]=\"'xs'\"\r\n          [ohColor]=\"'primary'\"\r\n        ></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".toobar-container{min-height:66px}.toolbar-wrapper{background-color:#fff;z-index:98;padding:0 30px;height:66px;position:fixed}.toolbar-wrapper.collapse{height:50px}:host ::ng-deep .ui-divider-vertical{height:32px;margin-left:16px;margin-right:16px}.toolbar-btn-collapse{position:absolute;right:10px;bottom:2px}:host ::ng-deep .toolbar-wrapper.collapse .ui-divider-vertical{height:24px;margin-top:3px;margin-left:8px;margin-right:8px}.toolbar-more-btn{text-align:center;height:100%;width:40px;vertical-align:middle;padding-left:18px}\n"] }]
    }], () => [{ type: i0.Renderer2 }], { config: [{
            type: Input
        }], fixAtTop: [{
            type: Input
        }], bgColor: [{
            type: Input
        }], isCollapse: [{
            type: Input
        }], itemClick: [{
            type: Output
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }], toolbarCtn: [{
            type: ViewChild,
            args: ['toolbarCtn']
        }], toolbarWrp: [{
            type: ViewChild,
            args: ['toolbarWrp']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToolbarComponent, { className: "ToolbarComponent", filePath: "lib\\toolbar.component\\toolbar.component.ts", lineNumber: 20 }); })();

const _c0 = ["*"];
const _c1 = a0 => ({ "background-color": a0 });
class BottombarComponent {
    position = 0;
    bgColor = '#ffffff';
    constructor() { }
    ngOnInit() { }
    static ɵfac = function BottombarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BottombarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BottombarComponent, selectors: [["bottom-bar"]], inputs: { position: "position", bgColor: "bgColor" }, ngContentSelectors: _c0, decls: 4, vars: 4, consts: [[3, "ohOffsetBottom"], ["oh-row", "", 1, "fixed-bottom-bar", 3, "ngStyle"], ["oh-col", "", "ohSpan", "24", 1, "px-3", "px-md-8", "py-2", "py-md-3"]], template: function BottombarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "oh-affix", 0)(1, "div", 1)(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵproperty("ohOffsetBottom", ctx.position);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx.bgColor));
        } }, dependencies: [i1$2.NgStyle, i2$1.OHAffixComponent, i3.OHColDirective, i3.OHRowDirective], styles: [".fixed-bottom-bar[_ngcontent-%COMP%]{border-top:solid 1px rgb(0 0 0 / 10%)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BottombarComponent, [{
        type: Component,
        args: [{ selector: 'bottom-bar', template: "<oh-affix [ohOffsetBottom]=\"position\">\r\n  <div\r\n    oh-row\r\n    class=\"fixed-bottom-bar\"\r\n    [ngStyle]=\"{ 'background-color': bgColor }\"\r\n  >\r\n    <div oh-col ohSpan=\"24\" class=\"px-3 px-md-8 py-2 py-md-3\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</oh-affix>\r\n", styles: [".fixed-bottom-bar{border-top:solid 1px rgb(0 0 0 / 10%)}\n"] }]
    }], () => [], { position: [{
            type: Input
        }], bgColor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BottombarComponent, { className: "BottombarComponent", filePath: "lib\\bottombar\\bottombar.component.ts", lineNumber: 8 }); })();

class AuthGuardService {
    auth;
    constructor(auth) {
        this.auth = auth;
    }
    canActivate() {
        if (!this.auth.isLogin()) {
            setTimeout(() => {
                Base.navigateTo(EnvironmentService.env.serverURL + 'new/dang-nhap');
            }, 100);
            return false;
        }
        return true;
    }
    static ɵfac = function AuthGuardService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthGuardService)(i0.ɵɵinject(AuthService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuardService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: AuthService }], null); })();

class ConfirmationService {
    modal;
    constructor(modal) {
        this.modal = modal;
    }
    async create(title, content, onOk, onCancel, btnOkText = 'Đồng ý', btnCancelText = 'Hủy') {
        const modal = this.modal.create({
            ohTitle: title,
            ohContent: content,
            ohCentered: true,
            ohFooter: [
                {
                    label: btnCancelText,
                    async onClick() {
                        this.loading = true;
                        await onCancel();
                        this.loading = false;
                        modal.destroy();
                    },
                },
                {
                    label: btnOkText,
                    type: 'primary',
                    loading: false,
                    async onClick() {
                        this.loading = true;
                        const result = await onOk();
                        this.loading = false;
                        if (result) {
                            modal.destroy();
                        }
                    },
                },
            ],
        });
        modal.afterClose.subscribe(async () => {
            await onCancel();
        });
        return modal;
    }
    static ɵfac = function ConfirmationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConfirmationService)(i0.ɵɵinject(i1$3.OHModalService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfirmationService, factory: ConfirmationService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1$3.OHModalService }], null); })();

const antDesignIcons = AllIcons;
const icons = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);
const ngZorroConfig = {
    message: { ohTop: 10 },
    notification: { ohTop: 10 },
};
class OnehealthModule {
    static ɵfac = function OnehealthModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OnehealthModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: OnehealthModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            ConfirmationService,
            { provide: OH_CONFIG, useValue: ngZorroConfig },
            { provide: OH_ICONS, useValue: icons },
        ], imports: [HttpClientModule, IconModule, OHHashCodeModule,
            OHFlexModule,
            OHAffixModule,
            OHAlertModule,
            OHAnchorModule,
            OHAutocompleteModule,
            OHAvatarModule,
            OHBackTopModule,
            OHBadgeModule,
            OHButtonModule,
            OHBreadCrumbModule,
            OHCalendarModule,
            OHCardModule,
            OHCarouselModule,
            OHCascaderModule,
            OHCheckboxModule,
            OHCollapseModule,
            OHCommentModule,
            OHDatePickerModule,
            OHDescriptionsModule,
            OHDividerModule,
            OHDrawerModule,
            OHDropDownModule,
            OHEmptyModule,
            OHFormModule,
            OHGridModule,
            OHI18nModule,
            OHIconModule,
            OHImageModule,
            OHInputModule,
            OHInputNumberModule,
            OHLayoutModule,
            OHLogoModule,
            OHListModule,
            OHMentionModule,
            OHMenuModule,
            OHMessageModule,
            OHModalModule,
            OHNoAnimationModule,
            OHNotificationModule,
            OHPageHeaderModule,
            OHPaginationModule,
            OHPopconfirmModule,
            OHPopoverModule,
            OHProgressModule,
            OHRadioModule,
            OHRateModule,
            OHResultModule,
            OHSelectModule,
            OHSkeletonModule,
            OHSliderModule,
            OHSpaceModule,
            OHSpinModule,
            OHStatisticModule,
            OHStepsModule,
            OHSwitchModule,
            OHTableModule,
            OHTabsModule,
            OHTagModule,
            OHTimePickerModule,
            OHTimelineModule,
            OHToolTipModule,
            OHTransButtonModule,
            OHTransferModule,
            OHTreeModule,
            OHTreeViewModule,
            OHTreeSelectModule,
            OHTypographyModule,
            OHUploadModule,
            OHWaveModule,
            OHResizableModule,
            OHPipesModule,
            OHCodeEditorModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnehealthModule, [{
        type: NgModule,
        args: [{
                imports: [HttpClientModule, IconModule],
                exports: [
                    OHHashCodeModule,
                    OHFlexModule,
                    OHAffixModule,
                    OHAlertModule,
                    OHAnchorModule,
                    OHAutocompleteModule,
                    OHAvatarModule,
                    OHBackTopModule,
                    OHBadgeModule,
                    OHButtonModule,
                    OHBreadCrumbModule,
                    OHCalendarModule,
                    OHCardModule,
                    OHCarouselModule,
                    OHCascaderModule,
                    OHCheckboxModule,
                    OHCollapseModule,
                    OHCommentModule,
                    OHDatePickerModule,
                    OHDescriptionsModule,
                    OHDividerModule,
                    OHDrawerModule,
                    OHDropDownModule,
                    OHEmptyModule,
                    OHFormModule,
                    OHGridModule,
                    OHI18nModule,
                    OHIconModule,
                    OHImageModule,
                    OHInputModule,
                    OHInputNumberModule,
                    OHLayoutModule,
                    OHLogoModule,
                    OHListModule,
                    OHMentionModule,
                    OHMenuModule,
                    OHMessageModule,
                    OHModalModule,
                    OHNoAnimationModule,
                    OHNotificationModule,
                    OHPageHeaderModule,
                    OHPaginationModule,
                    OHPopconfirmModule,
                    OHPopoverModule,
                    OHProgressModule,
                    OHRadioModule,
                    OHRateModule,
                    OHResultModule,
                    OHSelectModule,
                    OHSkeletonModule,
                    OHSliderModule,
                    OHSpaceModule,
                    OHSpinModule,
                    OHStatisticModule,
                    OHStepsModule,
                    OHSwitchModule,
                    OHTableModule,
                    OHTabsModule,
                    OHTagModule,
                    OHTimePickerModule,
                    OHTimelineModule,
                    OHToolTipModule,
                    OHTransButtonModule,
                    OHTransferModule,
                    OHTreeModule,
                    OHTreeViewModule,
                    OHTreeSelectModule,
                    OHTypographyModule,
                    OHUploadModule,
                    OHWaveModule,
                    OHResizableModule,
                    OHPipesModule,
                    OHCodeEditorModule,
                ],
                providers: [
                    ConfirmationService,
                    { provide: OH_CONFIG, useValue: ngZorroConfig },
                    { provide: OH_ICONS, useValue: icons },
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OnehealthModule, { imports: [HttpClientModule, IconModule], exports: [OHHashCodeModule,
        OHFlexModule,
        OHAffixModule,
        OHAlertModule,
        OHAnchorModule,
        OHAutocompleteModule,
        OHAvatarModule,
        OHBackTopModule,
        OHBadgeModule,
        OHButtonModule,
        OHBreadCrumbModule,
        OHCalendarModule,
        OHCardModule,
        OHCarouselModule,
        OHCascaderModule,
        OHCheckboxModule,
        OHCollapseModule,
        OHCommentModule,
        OHDatePickerModule,
        OHDescriptionsModule,
        OHDividerModule,
        OHDrawerModule,
        OHDropDownModule,
        OHEmptyModule,
        OHFormModule,
        OHGridModule,
        OHI18nModule,
        OHIconModule,
        OHImageModule,
        OHInputModule,
        OHInputNumberModule,
        OHLayoutModule,
        OHLogoModule,
        OHListModule,
        OHMentionModule,
        OHMenuModule,
        OHMessageModule,
        OHModalModule,
        OHNoAnimationModule,
        OHNotificationModule,
        OHPageHeaderModule,
        OHPaginationModule,
        OHPopconfirmModule,
        OHPopoverModule,
        OHProgressModule,
        OHRadioModule,
        OHRateModule,
        OHResultModule,
        OHSelectModule,
        OHSkeletonModule,
        OHSliderModule,
        OHSpaceModule,
        OHSpinModule,
        OHStatisticModule,
        OHStepsModule,
        OHSwitchModule,
        OHTableModule,
        OHTabsModule,
        OHTagModule,
        OHTimePickerModule,
        OHTimelineModule,
        OHToolTipModule,
        OHTransButtonModule,
        OHTransferModule,
        OHTreeModule,
        OHTreeViewModule,
        OHTreeSelectModule,
        OHTypographyModule,
        OHUploadModule,
        OHWaveModule,
        OHResizableModule,
        OHPipesModule,
        OHCodeEditorModule] }); })();

class CommonLibraryModule {
    static forRoot() {
        return {
            ngModule: CommonLibraryModule,
            providers: [AuthService, AuthGuardService],
        };
    }
    static ɵfac = function CommonLibraryModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommonLibraryModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CommonLibraryModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            provideNgxWebstorage(withNgxWebstorageConfig({
                prefix: 'jhi',
                separator: '-',
                caseSensitive: true,
            }), withLocalStorage(), withSessionStorage()),
            {
                provide: HTTP_INTERCEPTORS,
                useClass: InterceptedHttp,
                multi: true,
            },
        ], imports: [CommonModule, OnehealthModule, RouterModule, OnehealthCoreModule, OnehealthModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonLibraryModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BlankPageComponent,
                    ContexualActionBarComponent,
                    ActionItemComponent,
                    DrawerContentComponent,
                    ActiveUrlCheckPipe,
                    SubMenuComponent,
                    AssetUrlPipe,
                    ChangeDateTimePipe,
                    ToolbarComponent,
                    ToolbarItemComponent,
                    BottombarComponent,
                ],
                imports: [CommonModule, OnehealthModule, RouterModule, OnehealthCoreModule],
                exports: [
                    BlankPageComponent,
                    ContexualActionBarComponent,
                    ActionItemComponent,
                    DrawerContentComponent,
                    ActiveUrlCheckPipe,
                    SubMenuComponent,
                    AssetUrlPipe,
                    ChangeDateTimePipe,
                    ToolbarComponent,
                    ToolbarItemComponent,
                    BottombarComponent,
                    OnehealthModule,
                ],
                providers: [
                    provideNgxWebstorage(withNgxWebstorageConfig({
                        prefix: 'jhi',
                        separator: '-',
                        caseSensitive: true,
                    }), withLocalStorage(), withSessionStorage()),
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: InterceptedHttp,
                        multi: true,
                    },
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CommonLibraryModule, { declarations: [BlankPageComponent,
        ContexualActionBarComponent,
        ActionItemComponent,
        DrawerContentComponent,
        ActiveUrlCheckPipe,
        SubMenuComponent,
        AssetUrlPipe,
        ChangeDateTimePipe,
        ToolbarComponent,
        ToolbarItemComponent,
        BottombarComponent], imports: [CommonModule, OnehealthModule, RouterModule, OnehealthCoreModule], exports: [BlankPageComponent,
        ContexualActionBarComponent,
        ActionItemComponent,
        DrawerContentComponent,
        ActiveUrlCheckPipe,
        SubMenuComponent,
        AssetUrlPipe,
        ChangeDateTimePipe,
        ToolbarComponent,
        ToolbarItemComponent,
        BottombarComponent,
        OnehealthModule] }); })();

class MyValidator {
    static DemoValidator(control) {
        return demoValid(control);
    }
}
function demoValid(control) {
    if (control.value != null && control.value.startsWith(' ')) {
        return {
            trimError: { value: 'control has leading whitespace' },
        };
    }
    if (control.value != null && control.value.endsWith(' ')) {
        return {
            trimError: { value: 'control has trailing whitespace' },
        };
    }
    return null;
}

class Account {
    activated;
    authorities;
    email;
    firstName;
    langKey;
    lastName;
    login;
    imageUrl;
}

const createRequestOption = (req) => {
    let options = new HttpParams();
    if (req) {
        Object.keys(req).forEach((key) => {
            if (key !== 'sort') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach((val) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};

const OPERATIONS = {
    DELETE: '/delete',
    SEARCH: '/search',
    UPDATE: '/update',
    DETAILS: '/details',
    CREATE: '/create',
    ADD: '/add',
    UPLOAD: '/upload',
    DOWNLOAD: '/download',
    UPDATELOGO: '/updatelogo',
};
class AppService {
    http;
    resourceUrl = EnvironmentService.env.restApiUrl;
    constructor(http) {
        this.http = http;
    }
    changeResourceUrl(url) {
        this.resourceUrl = url;
    }
    create(entity, requestUrl) {
        return this.http.post(this.resourceUrl + requestUrl + OPERATIONS.CREATE, entity, { observe: 'response' });
    }
    update(entity, requestUrl) {
        return this.http.put(this.resourceUrl + requestUrl + OPERATIONS.UPDATE + '?id=' + entity.id, entity, {
            observe: 'response',
        });
    }
    find(id, requestUrl) {
        return this.http.get(`${this.resourceUrl + requestUrl + OPERATIONS.DETAILS}/${id}`, { observe: 'response' });
    }
    getById(id, requestUrl) {
        return this.http.get(this.resourceUrl + requestUrl + OPERATIONS.DETAILS + '?id=' + id, { observe: 'response' });
    }
    createRequestOption(req) {
        return createRequestOption(req);
    }
    query(req, requestUrl) {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl + requestUrl + OPERATIONS.SEARCH, { params: options, observe: 'response' });
    }
    delete(id, requestUrl) {
        return this.http.delete(`${this.resourceUrl + requestUrl + OPERATIONS.DELETE + '?id='}${id}`, { observe: 'response' });
    }
    deleteOption(req, requestUrl, option) {
        const options = createRequestOption(req);
        return this.http.delete(this.resourceUrl + requestUrl + option, {
            params: options,
            observe: 'response',
        });
    }
    postOption(entity, requestUrl, option) {
        return this.http.post(this.resourceUrl + requestUrl + option, entity, {
            observe: 'response',
        });
    }
    postByOption(requestUrl, option) {
        return this.http.post(this.resourceUrl + requestUrl + option, {
            observe: 'response',
        });
    }
    getOption(req, requestUrl, option) {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl + requestUrl + option, {
            params: options,
            observe: 'response',
        });
    }
    getByOption(requestUrl, option) {
        return this.http.get(this.resourceUrl + requestUrl + option, {
            observe: 'response',
        });
    }
    putOption(entity, requestUrl, option) {
        return this.http.put(this.resourceUrl + requestUrl + option, entity, {
            observe: 'response',
        });
    }
    uploadFile(fileToUpload, requestUrl, option) {
        const formData = new FormData();
        formData.append('file', fileToUpload);
        return this.http.post(this.resourceUrl + requestUrl + option, formData, {
            observe: 'response',
        });
    }
    get(requestUrl, option) {
        return this.http.get(this.resourceUrl + requestUrl + option, {
            observe: 'response',
        });
    }
    post(entity, requestUrl, option) {
        return this.http.post(this.resourceUrl + requestUrl + option, entity, {
            observe: 'response',
        });
    }
    static ɵfac = function AppService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppService)(i0.ɵɵinject(i1.HttpClient)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }], null); })();

class LoadingService {
    loadingSubject = new BehaviorSubject(false);
    get isLoading() {
        return this.loadingSubject.asObservable();
    }
    show() {
        this.loadingSubject.next(true);
    }
    hide() {
        this.loadingSubject.next(false);
    }
    static ɵfac = function LoadingService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoadingService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

const ITEMS_PER_PAGE = 15;
const PAGE_SIZE_OPTION = [15, 30, 50, 100];

class NestedService {
    updatePropertydById(arr, keyproperty, idToChange, property, newValue) {
        return arr.map((item) => {
            if (item[keyproperty] === idToChange) {
                item[property] = newValue;
                this.updateAllChildrenPropertyd(item, property, newValue);
            }
            if (item.children) {
                item.children = this.updatePropertydById(item.children, keyproperty, idToChange, property, newValue);
            }
            return item;
        });
    }
    updateAllChildrenPropertyd(item, changeProperty, newValue) {
        if (item.children) {
            item.children.forEach((child) => {
                child[changeProperty] = newValue;
                this.updateAllChildrenPropertyd(child, changeProperty, newValue);
            });
        }
    }
    collapse(array, data, $event, keyProperty = 'key') {
        if (!$event) {
            if (data.children) {
                data.children.forEach((d) => {
                    const target = array.find((a) => a[keyProperty] === d[keyProperty]);
                    target.expand = false;
                    this.collapse(array, target, false);
                });
            }
            else {
                return;
            }
        }
    }
    convertTreeToList(root, defaultExpand = true, keyProperty = 'key') {
        const stack = [];
        const array = [];
        const hashMap = {};
        stack.push({ ...root, level: 0, expand: defaultExpand });
        while (stack.length !== 0) {
            const node = stack.pop();
            this.visitNode(node, hashMap, array, keyProperty);
            if (node.children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push({
                        ...node.children[i],
                        level: node.level + 1,
                        expand: defaultExpand,
                        parent: node,
                    });
                }
            }
        }
        return array;
    }
    visitNode(node, hashMap, array, keyProperty = 'key') {
        if (!hashMap[node[keyProperty]]) {
            hashMap[node[keyProperty]] = true;
            array.push(node);
        }
    }
    addIsLeafToNestedObject(node) {
        if (!node.children || node.children.length === 0) {
            node.isLeaf = true;
        }
        else {
            for (const child of node.children) {
                this.addIsLeafToNestedObject(child);
            }
        }
        return node;
    }
    // làm phẳng dữ liệu: nếu dữ liệu là kiểu lồng nhau thì cho nó phẳng
    // input:
    //    - menuItem: danh sách cần làm phẳng
    //    - parentProperty: thuộc tính cha (chỉ là object)
    //    - childrenProperty: thuộc tính con (chỉ là array)
    //    - distinctProperty: thuộc tính dùng để phân biệt (thường id hoặc code)
    flattenArray(menuItems, parentProperty, childrenProperty, distinctProperty) {
        let seen = new Set();
        const flattenedItems = [];
        for (const menuItem of menuItems) {
            const flattenedItem = { ...menuItem };
            flattenedItems.push(flattenedItem);
            if (menuItem[childrenProperty]) {
                if (Array.isArray(menuItem[childrenProperty])) {
                    const nestedItems = this.flattenArray(menuItem[childrenProperty], parentProperty, childrenProperty, distinctProperty);
                    flattenedItems.push(...nestedItems);
                }
                else {
                    const nestedItems = this.flattenArray([menuItem[childrenProperty]], parentProperty, childrenProperty, distinctProperty);
                    flattenedItems.push(...nestedItems);
                }
            }
            if (menuItem[parentProperty]) {
                if (!Array.isArray(menuItem[parentProperty]) &&
                    menuItem[parentProperty][distinctProperty]) {
                    const nestedItems = this.flattenArray([menuItem[parentProperty]], parentProperty, childrenProperty, distinctProperty);
                    flattenedItems.push(...nestedItems);
                }
                else if (Array.isArray(menuItem[parentProperty])) {
                    const nestedItems = this.flattenArray(menuItem[parentProperty], parentProperty, childrenProperty, distinctProperty);
                    flattenedItems.push(...nestedItems);
                }
            }
        }
        let uniqueArray = flattenedItems.filter((item) => {
            let duplicate = seen.has(item[distinctProperty]);
            seen.add(item[distinctProperty]);
            return !duplicate;
        });
        return uniqueArray;
    }
    // dựng dữ liệu kiểu nested: dữ liệu lồng nhau
    // input:
    //    - arr: danh sách
    //    - compareProperty: thuộc tính dùng để phân biệt (mặc định là id)
    //    - parentProperty: thuộc tính cha (mặc định là parent)
    //    - compareValue: giá trị so sánh
    // quy trình
    //    - tìm danh sach các object có giá trị bằng compareValue
    //    - dùng vòng lặp để tìm các con của object trong danh sách trên (lúc này giá trị so sánh sẽ là giá trị compareProperty )
    //    - gán giá trị children là danh sách con tìm được
    buildNested(arr, compareProperty = 'id', parentProperty = 'parent', compareValue = undefined) {
        if (arr && arr.length > 0) {
            let result = [];
            const list = compareValue != undefined
                ? arr.filter((x) => (x[parentProperty]
                    ? x[parentProperty][compareProperty]
                    : undefined) === compareValue)
                : arr.filter((x) => !x[parentProperty]);
            if (list.length > 0) {
                for (let item of list) {
                    let children = this.buildNested(arr, compareProperty, parentProperty, item[compareProperty]);
                    if (children.length) {
                        item.children = children;
                    }
                    delete item[parentProperty];
                    result.push({ ...item });
                }
            }
            return result;
        }
        return [];
    }
    findDfs(array, key, targetId, childrenProperty) {
        let result = null;
        array.forEach((obj) => {
            if (obj[key] === targetId) {
                result = obj;
            }
            if (obj[childrenProperty]) {
                const check = this.findDfs(obj[childrenProperty], key, targetId, childrenProperty);
                if (check) {
                    result = check;
                    return;
                }
            }
        });
        return result;
    }
    stringToObject = (result, inputString, value) => {
        if (!value || !inputString) {
            return;
        }
        const key = inputString.trim();
        const keys = key.split('.');
        const finalKey = keys.pop();
        let nestedObj = result;
        for (const nestedKey of keys) {
            nestedObj[nestedKey] = {};
            nestedObj = nestedObj[nestedKey];
        }
        if (nestedObj[finalKey]) {
            if (Array.isArray(nestedObj[finalKey])) {
                nestedObj[finalKey] = [...nestedObj[finalKey]];
            }
            else {
                nestedObj[finalKey] = [nestedObj[finalKey]];
            }
            nestedObj[finalKey].push(value);
        }
        else {
            nestedObj[finalKey] = value;
        }
        return result;
    };
    getProperty = (inputStr, obj) => {
        if (inputStr) {
            const properties = inputStr.split('.');
            let currentObj = obj;
            for (const prop of properties) {
                if (currentObj.hasOwnProperty(prop)) {
                    currentObj = currentObj[prop];
                }
                else {
                    return null;
                }
            }
            return currentObj;
        }
        return obj;
    };
    static ɵfac = function NestedService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NestedService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NestedService, factory: NestedService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NestedService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();

const TOKEN_HIS = 'token-his';
const TOKEN_ONEHEALTH = 'token-onehealth';
const TOKEN_EMR = 'token-emr';
class UtilitiesService {
    http;
    localStorageService;
    constructor(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
    }
    //các API dreport
    async viewDoc(data) {
        const tokenOnehealth = this.localStorageService.retrieve(TOKEN_ONEHEALTH);
        if (!tokenOnehealth) {
            AuthService.backtoLogin();
        }
        return await this.http
            .post(EnvironmentService.env.dreportApiUrl + 'api/dreport/report/render', data, {
            headers: {
                [InterceptedHttp.SKIP_AUTHOR]: 'true', // thêm lệnh này vào nếu không API sẽ tự gán token mặc định
                // Authorization: "Bearer " + tokenOnehealth,
                Authorization: 'Bearer ' +
                    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFSEVBTFRIIiwianRpIjoiMTQxIiwidHlwZSI6IkFDQ0VTU19UT0tFTiIsIlZBSV9UUk8iOiJEVVlFVF9URU1QTEFURSxBRE1JTl9PTkVIRUFMVEgiLCJQUk9EVUNUX0lEIjowLCJET05WSV9JRCI6IjMiLCJNQV9ET05WSSI6IjIiLCJpc3MiOiJodHRwOi8vT05IRUFMVEguVk5DQVJFLlZOIiwiaWF0IjoxNzMwOTQ5NzY1LCJleHAiOjM1MzA5NDk3NjV9.QCfI2fTDNr13mJT8I6oFMcbgLcV_5QOPEeQrhS9VDP7Hpsz4iUUo5nGQFBjUss2LcveHKMqX9usZL4jRyP54Ew',
            },
        })
            .toPromise();
    }
    // các API rest
    async restService(params) {
        const tokenHis = this.localStorageService.retrieve(TOKEN_HIS);
        if (!tokenHis) {
            AuthService.backtoLogin();
        }
        return await this.http
            .post('vnpthis/api/v3/RestService', {
            func: 'dbCALL_SP_R',
            params: params,
            uuid: tokenHis,
        }, {
            headers: {
                [InterceptedHttp.SKIP_AUTHOR]: 'true',
                Authorization: 'Bearer ' + tokenHis,
            },
        })
            .toPromise();
    }
    static ɵfac = function UtilitiesService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UtilitiesService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LocalStorageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UtilitiesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: i2.LocalStorageService }], null); })();

/*
 * Public API Surface of commonLibrary
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Account, ActionItemComponent, ActiveUrlCheckPipe, AppService, AssetUrlPipe, AuthGuardService, AuthService, BlankPageComponent, BottombarComponent, ChangeDateTimePipe, CommonLibraryModule, ConfirmationService, Constants, ContexualActionBarComponent, DrawerContentComponent, EnvironmentService, ITEMS_PER_PAGE, InterceptedHttp, LoadingService, MyValidator, NestedService, OPERATIONS, OnehealthModule, PAGE_SIZE_OPTION, RequestOptions, SubMenuComponent, ToolbarComponent, ToolbarItemComponent, Utilities, UtilitiesService, demoValid };
//# sourceMappingURL=commonLibrary.mjs.map
