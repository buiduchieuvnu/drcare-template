import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@onehealth/ui/affix";
import * as i3 from "@onehealth/ui/grid";
const _c0 = ["*"];
const _c1 = a0 => ({ "background-color": a0 });
export class BottombarComponent {
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
        } }, dependencies: [i1.NgStyle, i2.OHAffixComponent, i3.OHColDirective, i3.OHRowDirective], styles: [".fixed-bottom-bar[_ngcontent-%COMP%]{border-top:solid 1px rgb(0 0 0 / 10%)}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9ib3R0b21iYXIvYm90dG9tYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9ib3R0b21iYXIvYm90dG9tYmFyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7SUFDcEIsUUFBUSxHQUFXLENBQUMsQ0FBQztJQUNyQixPQUFPLEdBQVcsU0FBUyxDQUFDO0lBRXJDLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxLQUFVLENBQUM7NEdBTlIsa0JBQWtCOzZEQUFsQixrQkFBa0I7O1lDRDNCLEFBTEYsQUFERixtQ0FBc0MsYUFLbkMsYUFDMkQ7WUFDeEQsa0JBQXlCO1lBRy9CLEFBREUsQUFERSxpQkFBTSxFQUNGLEVBQ0c7O1lBVkQsNkNBQTJCO1lBSWpDLGNBQTJDO1lBQTNDLGlFQUEyQzs7O2lGREdsQyxrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDRSxZQUFZO29CQUtiLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7O2tGQUZLLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdib3R0b20tYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ib3R0b21iYXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm90dG9tYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBwb3NpdGlvbjogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBiZ0NvbG9yOiBzdHJpbmcgPSAnI2ZmZmZmZic7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG59XHJcbiIsIjxvaC1hZmZpeCBbb2hPZmZzZXRCb3R0b21dPVwicG9zaXRpb25cIj5cclxuICA8ZGl2XHJcbiAgICBvaC1yb3dcclxuICAgIGNsYXNzPVwiZml4ZWQtYm90dG9tLWJhclwiXHJcbiAgICBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogYmdDb2xvciB9XCJcclxuICA+XHJcbiAgICA8ZGl2IG9oLWNvbCBvaFNwYW49XCIyNFwiIGNsYXNzPVwicHgtMyBweC1tZC04IHB5LTIgcHktbWQtM1wiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9vaC1hZmZpeD5cclxuIl19