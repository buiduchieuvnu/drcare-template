import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@onehealth/ui/affix";
import * as i3 from "@onehealth/ui/grid";
const _c0 = a0 => ({ "background-color": a0 });
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0, ctx_r0.bgColor ? ctx_r0.bgColor : ""));
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
export class ContexualActionBarComponent {
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
        } }, dependencies: [i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i2.OHAffixComponent, i3.OHColDirective, i3.OHRowDirective], styles: [".context-actionbar-wrapper[_ngcontent-%COMP%]{background-color:#fafafa;z-index:99;padding:4px 30px}.ui-dropdown-trigger[_ngcontent-%COMP%] > .ms-Icon[_ngcontent-%COMP%]{font-size:16px}@media only screen and (max-width: 576px){.context-actionbar-wrapper[_ngcontent-%COMP%]{padding:4px 10px}}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29udGV4LmFjdGlvbi5iYXIvYWN0aW9uLmJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29udGV4LmFjdGlvbi5iYXIvYWN0aW9uLmJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBdUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNlaEUsd0JBQXNEOzs7SUFZdEQsd0JBQXVEOzs7SUFyQnpELEFBTEYsQUFERixtQ0FBdUUsYUFLcEUsYUFTRTtJQUNDLHlHQUF1QztJQUN6QyxpQkFBTTtJQUNOLDhCQVNDO0lBQ0MseUdBQXdDO0lBRzlDLEFBREUsQUFERSxpQkFBTSxFQUNGLEVBQ0c7OztJQTlCbUMsNkNBQXdCO0lBSWxFLGNBQTBEO0lBQTFELDBGQUEwRDtJQVd6QyxlQUFzQjtJQUF0Qiw4Q0FBc0I7SUFZdEIsZUFBdUI7SUFBdkIsK0NBQXVCOzs7SUFnQnBDLHdCQUFzRDs7O0lBWXRELHdCQUF1RDs7O0lBckJ6RCxBQURGLEFBREYsbUNBQTJFLGNBQzNCLGFBUzNDO0lBQ0MsdUhBQXVDO0lBQ3pDLGlCQUFNO0lBQ04sOEJBU0M7SUFDQyx1SEFBd0M7SUFHOUMsQUFERSxBQURFLGlCQUFNLEVBQ0YsRUFDRzs7O0lBMUJpQyxtREFBOEI7SUFXckQsZUFBc0I7SUFBdEIsOENBQXNCO0lBWXRCLGVBQXVCO0lBQXZCLCtDQUF1Qjs7O0lBdkI1QyxvR0FBMkU7Ozs7SUFBN0MsQUFBbkIseUNBQW1CLHdCQUFZOzs7SUF5Q3BDLHdCQUFzRDs7O0lBWXRELHdCQUF1RDs7O0lBckJ6RCxBQURGLEFBREYsbUNBQTZCLGNBQ21CLGFBUzNDO0lBQ0MsNEdBQXVDO0lBQ3pDLGlCQUFNO0lBQ04sOEJBU0M7SUFDQyw0R0FBd0M7SUFHOUMsQUFERSxBQURFLGlCQUFNLEVBQ0YsRUFDRzs7O0lBMUJELGdDQUFrQjtJQVdQLGVBQXNCO0lBQXRCLDhDQUFzQjtJQVl0QixlQUF1QjtJQUF2QiwrQ0FBdUI7O0FEOUU5QyxNQUFNLE9BQU8sMkJBQTJCO0lBQzdCLElBQUksQ0FBb0I7SUFDeEIsS0FBSyxDQUFvQjtJQUN6QixRQUFRLENBQVM7SUFDakIsV0FBVyxDQUFTO0lBQ3BCLE9BQU8sQ0FBUztJQUN6QixnQkFBZSxDQUFDO0lBRWhCLFFBQVEsS0FBVSxDQUFDO0lBRW5CLEtBQUssS0FBVSxDQUFDO3FIQVZMLDJCQUEyQjs2REFBM0IsMkJBQTJCO1lDc0R4QyxBQTlCQSxBQS9CQSxzRkFBdUUsZ0hBK0I1QyxnSEE4Qkw7OztZQTdESyxBQUFoQixtQ0FBZ0IsNkJBQWlCOzs7aUZETy9CLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNFLHFCQUFxQjtvQkFLdEIsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7O2tGQUxLLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29udGV4dWFsLWFjdGlvbmJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi5iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbi5iYXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGV4dWFsQWN0aW9uQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBsZWZ0OiBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSByaWdodDogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgZml4QXRUb3A6IG51bWJlcjtcclxuICBASW5wdXQoKSBmaXhBdEJvdHRvbTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7fVxyXG59XHJcbiIsIjxvaC1hZmZpeCAqbmdJZj1cImZpeEF0VG9wOyBlbHNlIGVsc2VGaXhBdFRvcFwiIFtvaE9mZnNldFRvcF09XCJmaXhBdFRvcFwiPlxyXG4gIDxkaXZcclxuICAgIG9oLXJvd1xyXG4gICAgY2xhc3M9XCJjb250ZXh0LWFjdGlvbmJhci13cmFwcGVyXCJcclxuICAgIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBiZ0NvbG9yID8gYmdDb2xvciA6ICcnIH1cIlxyXG4gID5cclxuICAgIDxkaXZcclxuICAgICAgb2gtY29sXHJcbiAgICAgIG9oWHM9XCIxNFwiXHJcbiAgICAgIG9oU209XCIxNFwiXHJcbiAgICAgIG9oTWQ9XCIxNFwiXHJcbiAgICAgIG9oTGc9XCIxOFwiXHJcbiAgICAgIG9oWGw9XCIxOFwiXHJcbiAgICAgIGNsYXNzPVwiYWN0aW9uYmFyLWxlZnRcIlxyXG4gICAgPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGVmdFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2XHJcbiAgICAgIG9oLWNvbFxyXG4gICAgICBvaFhzPVwiMTBcIlxyXG4gICAgICBvaFNtPVwiMTBcIlxyXG4gICAgICBvaE1kPVwiMTBcIlxyXG4gICAgICBvaExnPVwiNlwiXHJcbiAgICAgIG9oWGw9XCI2XCJcclxuICAgICAgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiXHJcbiAgICAgIGNsYXNzPVwiYWN0aW9uYmFyLXJpZ2h0XCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJpZ2h0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9vaC1hZmZpeD5cclxuPG5nLXRlbXBsYXRlICNlbHNlRml4QXRUb3A+XHJcbiAgPG9oLWFmZml4ICpuZ0lmPVwiZml4QXRCb3R0b207IGVsc2UgZGVmYXVsdFwiIFtvaE9mZnNldEJvdHRvbV09XCJmaXhBdEJvdHRvbVwiPlxyXG4gICAgPGRpdiBvaC1yb3cgY2xhc3M9XCJjb250ZXh0LWFjdGlvbmJhci13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBvaC1jb2xcclxuICAgICAgICBvaFhzPVwiMTRcIlxyXG4gICAgICAgIG9oU209XCIxNFwiXHJcbiAgICAgICAgb2hNZD1cIjE0XCJcclxuICAgICAgICBvaExnPVwiMThcIlxyXG4gICAgICAgIG9oWGw9XCIxOFwiXHJcbiAgICAgICAgY2xhc3M9XCJhY3Rpb25iYXItbGVmdFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibGVmdFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG9oLWNvbFxyXG4gICAgICAgIG9oWHM9XCIxMFwiXHJcbiAgICAgICAgb2hTbT1cIjEwXCJcclxuICAgICAgICBvaE1kPVwiMTBcIlxyXG4gICAgICAgIG9oTGc9XCI2XCJcclxuICAgICAgICBvaFhsPVwiNlwiXHJcbiAgICAgICAgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodFwiXHJcbiAgICAgICAgY2xhc3M9XCJhY3Rpb25iYXItcmlnaHRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJpZ2h0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9vaC1hZmZpeD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdD5cclxuICA8b2gtYWZmaXggW29oT2Zmc2V0VG9wXT1cIjg1XCI+XHJcbiAgICA8ZGl2IG9oLXJvdyBjbGFzcz1cImNvbnRleHQtYWN0aW9uYmFyLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIG9oLWNvbFxyXG4gICAgICAgIG9oWHM9XCIxNFwiXHJcbiAgICAgICAgb2hTbT1cIjE0XCJcclxuICAgICAgICBvaE1kPVwiMTRcIlxyXG4gICAgICAgIG9oTGc9XCIxOFwiXHJcbiAgICAgICAgb2hYbD1cIjE4XCJcclxuICAgICAgICBjbGFzcz1cImFjdGlvbmJhci1sZWZ0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJsZWZ0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb2gtY29sXHJcbiAgICAgICAgb2hYcz1cIjEwXCJcclxuICAgICAgICBvaFNtPVwiMTBcIlxyXG4gICAgICAgIG9oTWQ9XCIxMFwiXHJcbiAgICAgICAgb2hMZz1cIjZcIlxyXG4gICAgICAgIG9oWGw9XCI2XCJcclxuICAgICAgICBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCJcclxuICAgICAgICBjbGFzcz1cImFjdGlvbmJhci1yaWdodFwiXHJcbiAgICAgID5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmlnaHRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L29oLWFmZml4PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=