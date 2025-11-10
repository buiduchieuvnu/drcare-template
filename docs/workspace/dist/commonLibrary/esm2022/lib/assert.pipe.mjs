import { Pipe } from '@angular/core';
import { Utilities } from './utilities';
import * as i0 from "@angular/core";
export class AssetUrlPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0LnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvYXNzZXJ0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFHeEMsTUFBTSxPQUFPLFlBQVk7SUFDdkIsU0FBUyxDQUFDLEtBQWE7UUFDckIsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7c0dBSFUsWUFBWTsyRUFBWixZQUFZOztpRkFBWixZQUFZO2NBRHhCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gJy4vdXRpbGl0aWVzJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ2Fzc2V0VXJsJyB9KVxyXG5leHBvcnQgY2xhc3MgQXNzZXRVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFV0aWxpdGllcy5hc3NldFVybCh2YWx1ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==