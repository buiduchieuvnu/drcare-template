import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class ActiveUrlCheckPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5waXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9tZW51LnBpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUVwRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FBQyxTQUFpQixFQUFFLEtBQWE7UUFDeEMsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUNkLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNoQyxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7NEdBVFUsa0JBQWtCO2lGQUFsQixrQkFBa0I7O2lGQUFsQixrQkFBa0I7Y0FEOUIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AUGlwZSh7IG5hbWU6ICdhY3RpdmVVcmxDaGVjaycgfSlcclxuZXhwb3J0IGNsYXNzIEFjdGl2ZVVybENoZWNrUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybShyb290dmFsdWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHJvb3R2YWx1ZSkge1xyXG4gICAgICBpZiAocm9vdHZhbHVlLnN0YXJ0c1dpdGgodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=