import { Injectable, isDevMode } from '@angular/core';
import { environment as envDev } from './environments/environment';
import { environment as envProd } from './environments/environment.prod';
import * as i0 from "@angular/core";
export class EnvironmentService {
    static env = isDevMode() ? envDev : envProd;
    static ɵfac = function EnvironmentService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EnvironmentService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EnvironmentService, factory: EnvironmentService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnvironmentService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9lbnZpcm9ubWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLElBQUksTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsSUFBSSxPQUFPLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7QUFHekUsTUFBTSxPQUFPLGtCQUFrQjtJQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs0R0FEeEMsa0JBQWtCO2dFQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQURMLE1BQU07O2lGQUNuQixrQkFBa0I7Y0FEOUIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCBhcyBlbnZEZXYgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IGFzIGVudlByb2QgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC5wcm9kJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudFNlcnZpY2Uge1xyXG4gIHB1YmxpYyBzdGF0aWMgZW52ID0gaXNEZXZNb2RlKCkgPyBlbnZEZXYgOiBlbnZQcm9kO1xyXG59XHJcbiJdfQ==