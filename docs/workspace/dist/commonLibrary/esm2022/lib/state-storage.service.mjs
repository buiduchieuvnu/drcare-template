import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ngx-webstorage";
export class StateStorageService {
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
    static ɵfac = function StateStorageService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StateStorageService)(i0.ɵɵinject(i1.SessionStorageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StateStorageService, factory: StateStorageService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StateStorageService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.SessionStorageService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uTGlicmFyeS9zcmMvbGliL3N0YXRlLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFJM0MsTUFBTSxPQUFPLG1CQUFtQjtJQUdWO0lBRlosY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUV2QyxZQUFvQixlQUFzQztRQUF0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7SUFBRyxDQUFDO0lBRTlELFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDOzZHQWZVLG1CQUFtQjtnRUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFETixNQUFNOztpRkFDbkIsbUJBQW1CO2NBRC9CLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlc3Npb25TdG9yYWdlU2VydmljZSB9IGZyb20gJ25neC13ZWJzdG9yYWdlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIHtcclxuICBwcml2YXRlIHByZXZpb3VzVXJsS2V5ID0gJ3ByZXZpb3VzVXJsJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSAkc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZSkge31cclxuXHJcbiAgc3RvcmVVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKHRoaXMucHJldmlvdXNVcmxLZXksIHVybCk7XHJcbiAgfVxyXG5cclxuICBnZXRVcmwoKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy4kc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUodGhpcy5wcmV2aW91c1VybEtleSk7XHJcbiAgfVxyXG5cclxuICBjbGVhclVybCgpOiB2b2lkIHtcclxuICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLmNsZWFyKHRoaXMucHJldmlvdXNVcmxLZXkpO1xyXG4gIH1cclxufVxyXG4iXX0=