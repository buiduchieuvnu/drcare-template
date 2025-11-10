import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class BlankPageComponent {
    close = true;
    title = 'emptypage';
    ngOnInit() { }
    onCloseClick() {
        window.history.back();
    }
    static ɵfac = function BlankPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BlankPageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BlankPageComponent, selectors: [["oh-page"]], inputs: { close: "close" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "page-area"]], template: function BlankPageComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhbmsucGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvYmxhbmsucGFnZS5jb21wb25lbnQvYmxhbmsucGFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvYmxhbmsucGFnZS5jb21wb25lbnQvYmxhbmsucGFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7SUFDcEIsS0FBSyxHQUFZLElBQUksQ0FBQztJQUMvQixLQUFLLEdBQUcsV0FBVyxDQUFDO0lBQ3BCLFFBQVEsS0FBSSxDQUFDO0lBQ2IsWUFBWTtRQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs0R0FOVSxrQkFBa0I7NkRBQWxCLGtCQUFrQjs7WUNML0IsOEJBQXVCO1lBQ3JCLGtCQUF5QjtZQUMzQixpQkFBTTs7O2lGREdPLGtCQUFrQjtjQUw5QixTQUFTOzJCQUNFLFNBQVM7Z0JBS1YsS0FBSztrQkFBYixLQUFLOztrRkFESyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnb2gtcGFnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JsYW5rLnBhZ2UuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2JsYW5rLnBhZ2UuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmxhbmtQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjbG9zZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgdGl0bGUgPSAnZW1wdHlwYWdlJztcclxuICBuZ09uSW5pdCgpIHt9XHJcbiAgb25DbG9zZUNsaWNrKCkge1xyXG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gIH1cclxufVxyXG4iLCJcclxuXHJcbjxkaXYgY2xhc3M9XCJwYWdlLWFyZWFcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=