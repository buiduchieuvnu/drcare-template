import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@onehealth/ui/button";
import * as i3 from "@onehealth/ui/core/transition-patch";
import * as i4 from "@onehealth/ui/icon";
import * as i5 from "@onehealth/ui/tooltip";
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
export class ActionItemComponent {
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
        } }, dependencies: [i1.NgIf, i2.OHButtonComponent, i3.ɵOHTransitionPatchDirective, i4.OHIconDirective, i5.OHTooltipDirective], styles: [".action-item-btn[_ngcontent-%COMP%]{margin:0 5px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLml0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uTGlicmFyeS9zcmMvbGliL2NvbnRleC5hY3Rpb24uYmFyL2FjdGlvbi5pdGVtLmNvbXBvbmVudC9hY3Rpb24uaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29udGV4LmFjdGlvbi5iYXIvYWN0aW9uLml0ZW0uY29tcG9uZW50L2FjdGlvbi5pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ1N2RCx1QkFLSzs7O0lBREgsQUFEQSxzQ0FBaUIseUJBQ0E7OztJQUdqQix1QkFBOEQ7OztJQUF0QixBQUFoQixvQ0FBZSx5QkFBa0I7OztJQUF6RCx1RkFBMEQ7OztJQUF0RCxrQ0FBVTs7O0lBaEJsQixpQ0FRQztJQU9DLEFBTkEseUVBS0MsaUhBQ3FCO0lBR3RCLDRCQUFNO0lBQUEsWUFBVTtJQUNsQixBQURrQixpQkFBTyxFQUNoQjs7OztJQWJQLEFBREEsNkNBQXdCLDZCQUNIO0lBSWxCLGNBQWU7SUFBQSxBQUFmLHFDQUFlLHdCQUFZO0lBUXhCLGVBQVU7SUFBVixpQ0FBVTs7O0lBV2QsdUJBS0s7OztJQURILEFBREEsc0NBQWlCLHlCQUNBOzs7SUFHakIsdUJBQThEOzs7SUFBdEIsQUFBaEIsb0NBQWUseUJBQWtCOzs7SUFBekQsNEZBQTBEOzs7SUFBdEQsa0NBQVU7OztJQWZsQixpQ0FPQztJQU9DLEFBTkEsOEVBS0Msc0hBQ3FCO0lBR3hCLGlCQUFTOzs7O0lBWlAsQUFEQSw2Q0FBd0IsNkJBQ0g7SUFJbEIsY0FBZTtJQUFBLEFBQWYscUNBQWUsd0JBQVk7O0FEdkJsQyxNQUFNLE9BQU8sbUJBQW1CO0lBQ3JCLElBQUksQ0FBUztJQUNiLElBQUksQ0FBUztJQUNiLE9BQU8sQ0FBUztJQUNoQixLQUFLLEdBQVcsU0FBUyxDQUFDO0lBQzFCLEtBQUssQ0FBUztJQUNkLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFFbkMsZ0JBQWUsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixLQUFLLEtBQVUsQ0FBQzs2R0FaTCxtQkFBbUI7NkRBQW5CLG1CQUFtQjtZQ2FoQyxBQXBCQSwwRUFRQyx3R0FZb0I7OztZQW5CTixBQUFaLCtCQUFZLHVCQUFXOzs7aUZETWIsbUJBQW1CO2NBTC9CLFNBQVM7MkJBQ0UsYUFBYTtvQkFLZCxJQUFJO2tCQUFaLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLOztrRkFOSyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWN0aW9uLWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3Rpb24uaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9uLml0ZW0uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uU3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZyA9ICdwcmltYXJ5JztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7fVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHt9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gICpuZ0lmPVwidGV4dDsgZWxzZSBub3RleHRcIlxyXG4gIG9oLWJ1dHRvblxyXG4gIG9oVHlwZT1cInRleHRcIlxyXG4gIG9oLXRvb2x0aXBcclxuICBbb2hUb29sdGlwVGl0bGVdPVwidGl0bGVcIlxyXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgY2xhc3M9XCJhY3Rpb24taXRlbS1idG5cIlxyXG4+XHJcbiAgPGlcclxuICAgICpuZ0lmPVwiaWNvblNyYzsgZWxzZSBlbHNlU3JjXCJcclxuICAgIG9oLWljb25cclxuICAgIFtvaFNyY109XCJpY29uU3JjXCJcclxuICAgIFtvaENvbG9yXT1cImNvbG9yXCJcclxuICA+PC9pPlxyXG4gIDxuZy10ZW1wbGF0ZSAjZWxzZVNyYz5cclxuICAgIDxpICpuZ0lmPVwiaWNvblwiIG9oLWljb24gW29oVHlwZV09XCJpY29uXCIgW29oQ29sb3JdPVwiY29sb3JcIj48L2k+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuICA8c3Bhbj57eyB0ZXh0IH19PC9zcGFuPlxyXG48L2J1dHRvbj5cclxuPG5nLXRlbXBsYXRlICNub3RleHQ+XHJcbiAgPGJ1dHRvblxyXG4gICAgb2gtYnV0dG9uXHJcbiAgICBvaFR5cGU9XCJ0ZXh0XCJcclxuICAgIG9oLXRvb2x0aXBcclxuICAgIFtvaFRvb2x0aXBUaXRsZV09XCJ0aXRsZVwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgY2xhc3M9XCJhY3Rpb24taXRlbS1idG5cIlxyXG4gID5cclxuICAgIDxpXHJcbiAgICAgICpuZ0lmPVwiaWNvblNyYzsgZWxzZSBlbHNlU3JjXCJcclxuICAgICAgb2gtaWNvblxyXG4gICAgICBbb2hTcmNdPVwiaWNvblNyY1wiXHJcbiAgICAgIFtvaENvbG9yXT1cImNvbG9yXCJcclxuICAgID48L2k+XHJcbiAgICA8bmctdGVtcGxhdGUgI2Vsc2VTcmM+XHJcbiAgICAgIDxpICpuZ0lmPVwiaWNvblwiIG9oLWljb24gW29oVHlwZV09XCJpY29uXCIgW29oQ29sb3JdPVwiY29sb3JcIj48L2k+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIDwvYnV0dG9uPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=