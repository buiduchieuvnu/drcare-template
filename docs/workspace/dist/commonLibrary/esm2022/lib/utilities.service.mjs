import { Injectable } from '@angular/core';
import { InterceptedHttp } from './http.interceptor';
import { AuthService } from './auth.service';
import { EnvironmentService } from './environment.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ngx-webstorage";
const TOKEN_HIS = 'token-his';
const TOKEN_ONEHEALTH = 'token-onehealth';
const TOKEN_EMR = 'token-emr';
export class UtilitiesService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvdXRpbGl0aWVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRTNELE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUM5QixNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztBQUMxQyxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7QUFHOUIsTUFBTSxPQUFPLGdCQUFnQjtJQUVqQjtJQUNBO0lBRlYsWUFDVSxJQUFnQixFQUNoQixtQkFBd0M7UUFEeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQy9DLENBQUM7SUFFSixpQkFBaUI7SUFFVixLQUFLLENBQUMsT0FBTyxDQUFDLElBQVM7UUFDNUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFDRCxPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUk7YUFDbkIsSUFBSSxDQUNILGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsMkJBQTJCLEVBQ2xFLElBQUksRUFDSjtZQUNFLE9BQU8sRUFBRTtnQkFDUCxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsMkRBQTJEO2dCQUNsRyw2Q0FBNkM7Z0JBQzdDLGFBQWEsRUFDWCxTQUFTO29CQUNULGtZQUFrWTthQUNyWTtTQUNGLENBQ0Y7YUFDQSxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsZUFBZTtJQUVmLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBVztRQUMzQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNkLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBQ0QsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJO2FBQ25CLElBQUksQ0FDSCw0QkFBNEIsRUFDNUI7WUFDRSxJQUFJLEVBQUUsYUFBYTtZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxRQUFRO1NBQ2YsRUFDRDtZQUNFLE9BQU8sRUFBRTtnQkFDUCxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNO2dCQUNyQyxhQUFhLEVBQUUsU0FBUyxHQUFHLFFBQVE7YUFDcEM7U0FDRixDQUNGO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQzswR0FyRFUsZ0JBQWdCO2dFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQURILE1BQU07O2lGQUNuQixnQkFBZ0I7Y0FENUIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW50ZXJjZXB0ZWRIdHRwIH0gZnJvbSAnLi9odHRwLmludGVyY2VwdG9yJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJ25neC13ZWJzdG9yYWdlJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEVudmlyb25tZW50U2VydmljZSB9IGZyb20gJy4vZW52aXJvbm1lbnQuc2VydmljZSc7XHJcblxyXG5jb25zdCBUT0tFTl9ISVMgPSAndG9rZW4taGlzJztcclxuY29uc3QgVE9LRU5fT05FSEVBTFRIID0gJ3Rva2VuLW9uZWhlYWx0aCc7XHJcbmNvbnN0IFRPS0VOX0VNUiA9ICd0b2tlbi1lbXInO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFV0aWxpdGllc1NlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBsb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlXHJcbiAgKSB7fVxyXG5cclxuICAvL2PDoWMgQVBJIGRyZXBvcnRcclxuXHJcbiAgcHVibGljIGFzeW5jIHZpZXdEb2MoZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCB0b2tlbk9uZWhlYWx0aCA9IHRoaXMubG9jYWxTdG9yYWdlU2VydmljZS5yZXRyaWV2ZShUT0tFTl9PTkVIRUFMVEgpO1xyXG4gICAgaWYgKCF0b2tlbk9uZWhlYWx0aCkge1xyXG4gICAgICBBdXRoU2VydmljZS5iYWNrdG9Mb2dpbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChcclxuICAgICAgICBFbnZpcm9ubWVudFNlcnZpY2UuZW52LmRyZXBvcnRBcGlVcmwgKyAnYXBpL2RyZXBvcnQvcmVwb3J0L3JlbmRlcicsXHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFtJbnRlcmNlcHRlZEh0dHAuU0tJUF9BVVRIT1JdOiAndHJ1ZScsIC8vIHRow6ptIGzhu4duaCBuw6B5IHbDoG8gbuG6v3Uga2jDtG5nIEFQSSBz4bq9IHThu7EgZ8OhbiB0b2tlbiBt4bq3YyDEkeG7i25oXHJcbiAgICAgICAgICAgIC8vIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW5PbmVoZWFsdGgsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246XHJcbiAgICAgICAgICAgICAgJ0JlYXJlciAnICtcclxuICAgICAgICAgICAgICAnZXlKaGJHY2lPaUpJVXpVeE1pSjkuZXlKemRXSWlPaUpGU0VWQlRGUklJaXdpYW5ScElqb2lNVFF4SWl3aWRIbHdaU0k2SWtGRFEwVlRVMTlVVDB0RlRpSXNJbFpCU1Y5VVVrOGlPaUpFVlZsRlZGOVVSVTFRVEVGVVJTeEJSRTFKVGw5UFRrVklSVUZNVkVnaUxDSlFVazlFVlVOVVgwbEVJam93TENKRVQwNVdTVjlKUkNJNklqTWlMQ0pOUVY5RVQwNVdTU0k2SWpJaUxDSnBjM01pT2lKb2RIUndPaTh2VDA1SVJVRk1WRWd1Vms1RFFWSkZMbFpPSWl3aWFXRjBJam94TnpNd09UUTVOelkxTENKbGVIQWlPak0xTXpBNU5EazNOalY5LlFDZkkyZlRETnIxM21KVDhJNm9GTWNiZ0xjVl81UU9QRWVRcmhTOVZEUDdIcHN6NGlVVW81bkdRRkJqVXNzMkxjdmVIS01xWDl1c1pMNGpSeVA1NEV3JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50b1Byb21pc2UoKTtcclxuICB9XHJcblxyXG4gIC8vIGPDoWMgQVBJIHJlc3RcclxuXHJcbiAgYXN5bmMgcmVzdFNlcnZpY2UocGFyYW1zOiBhbnkpIHtcclxuICAgIGNvbnN0IHRva2VuSGlzID0gdGhpcy5sb2NhbFN0b3JhZ2VTZXJ2aWNlLnJldHJpZXZlKFRPS0VOX0hJUyk7XHJcbiAgICBpZiAoIXRva2VuSGlzKSB7XHJcbiAgICAgIEF1dGhTZXJ2aWNlLmJhY2t0b0xvZ2luKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5odHRwXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgICd2bnB0aGlzL2FwaS92My9SZXN0U2VydmljZScsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZnVuYzogJ2RiQ0FMTF9TUF9SJyxcclxuICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgICAgdXVpZDogdG9rZW5IaXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFtJbnRlcmNlcHRlZEh0dHAuU0tJUF9BVVRIT1JdOiAndHJ1ZScsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuSGlzLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=