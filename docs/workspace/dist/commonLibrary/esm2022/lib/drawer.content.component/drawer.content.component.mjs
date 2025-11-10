import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@onehealth/ui/typography";
const _c0 = ["*"];
function DrawerContentComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
export class DrawerContentComponent {
    title;
    ngOnInit() { }
    static ɵfac = function DrawerContentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DrawerContentComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawerContentComponent, selectors: [["oh-main-drawer"]], inputs: { title: "title" }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "drawer-content-wrapper"], ["oh-typography", "", "class", "page-title", 4, "ngIf"], ["oh-typography", "", 1, "page-title"]], template: function DrawerContentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DrawerContentComponent_h4_1_Template, 2, 1, "h4", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.title);
        } }, dependencies: [i1.NgIf, i2.OHTypographyComponent], styles: [".drawer-content-wrapper[_ngcontent-%COMP%]{padding:30px 25px 0}.drawer-content-wrapper[_ngcontent-%COMP%]   .page-title[_ngcontent-%COMP%]{margin-bottom:25px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawerContentComponent, [{
        type: Component,
        args: [{ selector: 'oh-main-drawer', template: "<div class=\"drawer-content-wrapper\">\r\n  <h4 *ngIf=\"title\" oh-typography class=\"page-title\">{{ title }}</h4>\r\n  <ng-content> </ng-content>\r\n</div>\r\n", styles: [".drawer-content-wrapper{padding:30px 25px 0}.drawer-content-wrapper .page-title{margin-bottom:25px}\n"] }]
    }], null, { title: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DrawerContentComponent, { className: "DrawerContentComponent", filePath: "lib\\drawer.content.component\\drawer.content.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uTGlicmFyeS9zcmMvbGliL2RyYXdlci5jb250ZW50LmNvbXBvbmVudC9kcmF3ZXIuY29udGVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvZHJhd2VyLmNvbnRlbnQuY29tcG9uZW50L2RyYXdlci5jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNDdkQsNkJBQW1EO0lBQUEsWUFBVztJQUFBLGlCQUFLOzs7SUFBaEIsY0FBVztJQUFYLGtDQUFXOztBRE1oRSxNQUFNLE9BQU8sc0JBQXNCO0lBQ3hCLEtBQUssQ0FBUztJQUV2QixRQUFRLEtBQUksQ0FBQztnSEFIRixzQkFBc0I7NkRBQXRCLHNCQUFzQjs7WUNQbkMsOEJBQW9DO1lBQ2xDLHFFQUFtRDtZQUNuRCxrQkFBMEI7WUFDNUIsaUJBQU07O1lBRkMsY0FBVztZQUFYLGdDQUFXOzs7aUZETUwsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsZ0JBQWdCO2dCQUtqQixLQUFLO2tCQUFiLEtBQUs7O2tGQURLLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdvaC1tYWluLWRyYXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RyYXdlci5jb250ZW50LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kcmF3ZXIuY29udGVudC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImRyYXdlci1jb250ZW50LXdyYXBwZXJcIj5cclxuICA8aDQgKm5nSWY9XCJ0aXRsZVwiIG9oLXR5cG9ncmFwaHkgY2xhc3M9XCJwYWdlLXRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PlxyXG4gIDxuZy1jb250ZW50PiA8L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=