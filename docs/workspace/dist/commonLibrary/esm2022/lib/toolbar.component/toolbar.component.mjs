import { Component, EventEmitter, HostListener, Input, Output, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@onehealth/ui/button";
import * as i3 from "@onehealth/ui/core/transition-patch";
import * as i4 from "@onehealth/ui/divider";
import * as i5 from "@onehealth/ui/menu";
import * as i6 from "@onehealth/ui/dropdown";
import * as i7 from "@onehealth/ui/grid";
import * as i8 from "@onehealth/ui/icon";
import * as i9 from "./toolbar.item.component/toolbar.item.component";
const _c0 = ["toolbarCtn"];
const _c1 = ["toolbarWrp"];
const _c2 = ["*"];
const _c3 = a0 => ({ "toolbar-wrapper": true, collapse: a0 });
const _c4 = a0 => ({ "background-color": a0 });
function ToolbarComponent_div_4_ng_container_1_toolbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "toolbar-item", 15);
    i0.ɵɵlistener("click", function ToolbarComponent_div_4_ng_container_1_toolbar_item_1_Template_toolbar_item_click_0_listener() { i0.ɵɵrestoreView(_r1); const item_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onItemClick(item_r2)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", item_r2.title)("icon", item_r2.icon)("iconfont", item_r2.iconfont)("type", ctx_r2.isCollapse ? "sm" : "md");
} }
function ToolbarComponent_div_4_ng_container_1_oh_divider_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "oh-divider", 16);
} }
function ToolbarComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ToolbarComponent_div_4_ng_container_1_toolbar_item_1_Template, 1, 4, "toolbar-item", 13)(2, ToolbarComponent_div_4_ng_container_1_oh_divider_2_Template, 1, 0, "oh-divider", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r2.title || item_r2.icon);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r2.title && !item_r2.icon && ctx_r2.screenSize > 992);
} }
function ToolbarComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 17);
    i0.ɵɵelement(1, "i", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const more_r4 = i0.ɵɵreference(5);
    i0.ɵɵproperty("ohDropdownMenu", more_r4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohType", "more")("ohSize", "md");
} }
function ToolbarComponent_div_4_li_7_toolbar_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "toolbar-item", 15);
    i0.ɵɵlistener("click", function ToolbarComponent_div_4_li_7_toolbar_item_1_Template_toolbar_item_click_0_listener() { i0.ɵɵrestoreView(_r5); const item_r6 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onItemClick(item_r6)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", item_r6.title)("icon", item_r6.icon)("iconfont", item_r6.iconfont)("type", ctx_r2.isCollapse ? "sm" : "md");
} }
function ToolbarComponent_div_4_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 19);
    i0.ɵɵtemplate(1, ToolbarComponent_div_4_li_7_toolbar_item_1_Template, 1, 4, "toolbar-item", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r6.title || item_r6.icon);
} }
function ToolbarComponent_div_4_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function ToolbarComponent_div_4_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.tonggleCollapse()); });
    i0.ɵɵelement(1, "i", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSize", "xs")("ohColor", "primary");
} }
function ToolbarComponent_div_4_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function ToolbarComponent_div_4_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.tonggleCollapse()); });
    i0.ɵɵelement(1, "i", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSize", "xs")("ohColor", "primary");
} }
function ToolbarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ToolbarComponent_div_4_ng_container_1_Template, 3, 2, "ng-container", 7);
    i0.ɵɵprojection(2);
    i0.ɵɵtemplate(3, ToolbarComponent_div_4_button_3_Template, 2, 3, "button", 8);
    i0.ɵɵelementStart(4, "oh-dropdown-menu", null, 2)(6, "ul", 9);
    i0.ɵɵtemplate(7, ToolbarComponent_div_4_li_7_Template, 2, 1, "li", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(8, ToolbarComponent_div_4_button_8_Template, 2, 2, "button", 11)(9, ToolbarComponent_div_4_button_9_Template, 2, 2, "button", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ohSpan", 24);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.config.slice(0, ctx_r2.sliceNum));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.config.length > ctx_r2.sliceNum);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r2.config.slice(ctx_r2.sliceNum, ctx_r2.config.length));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isCollapse);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isCollapse);
} }
export class ToolbarComponent {
    renderer;
    config;
    fixAtTop = 85;
    bgColor;
    isCollapse = false;
    screenSize = 1200;
    sliceNum = 15;
    itemClick = new EventEmitter();
    onResize(event) {
        this.calculateScreen();
    }
    toolbarCtn;
    toolbarWrp;
    constructor(renderer) {
        this.renderer = renderer;
    }
    ngOnInit() {
        setTimeout(() => {
            this.calculateScreen();
        }, 300);
    }
    calculateScreen() {
        this.screenSize = this.toolbarCtn.nativeElement.offsetWidth;
        if (this.screenSize >= 1200)
            this.sliceNum = 15;
        else if (this.screenSize >= 992)
            this.sliceNum = 9;
        else if (this.screenSize >= 768)
            this.sliceNum = 6;
        else if (this.screenSize >= 425)
            this.sliceNum = 3;
        else
            this.sliceNum = 2;
        this.renderer.setStyle(this.toolbarWrp.nativeElement, 'width', this.toolbarCtn.nativeElement.offsetWidth + 'px');
        this.renderer.setStyle(this.toolbarWrp.nativeElement, 'top', this.fixAtTop + 'px');
    }
    tonggleCollapse() {
        this.isCollapse = !this.isCollapse;
    }
    onItemClick(item) {
        this.itemClick.emit(item);
    }
    ngAfterViewInit() { }
    static ɵfac = function ToolbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToolbarComponent)(i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["app-toolbar"]], viewQuery: function ToolbarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toolbarCtn = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toolbarWrp = _t.first);
        } }, hostBindings: function ToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function ToolbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { config: "config", fixAtTop: "fixAtTop", bgColor: "bgColor", isCollapse: "isCollapse" }, outputs: { itemClick: "itemClick" }, ngContentSelectors: _c2, decls: 5, vars: 7, consts: [["toolbarCtn", ""], ["toolbarWrp", ""], ["more", "ohDropdownMenu"], [1, "toobar-container"], ["oh-row", "", 3, "ngClass", "ngStyle"], ["oh-col", "", 3, "ohSpan", 4, "ngIf"], ["oh-col", "", 3, "ohSpan"], [4, "ngFor", "ngForOf"], ["oh-button", "", "ohType", "text", "class", "toolbar-more-btn", "oh-dropdown", "", 3, "ohDropdownMenu", 4, "ngIf"], ["oh-menu", "", "ohSelectable", ""], ["oh-menu-item", "", "style", "text-align: center", 4, "ngFor", "ngForOf"], ["oh-button", "", "ohType", "text", "class", "toolbar-btn-collapse", "title", "Thu g\u1ECDn", 3, "click", 4, "ngIf"], ["oh-button", "", "ohType", "text", "class", "toolbar-btn-collapse", "title", "M\u1EDF r\u1ED9ng", 3, "click", 4, "ngIf"], [3, "title", "icon", "iconfont", "type", "click", 4, "ngIf"], ["ohType", "vertical", 4, "ngIf"], [3, "click", "title", "icon", "iconfont", "type"], ["ohType", "vertical"], ["oh-button", "", "ohType", "text", "oh-dropdown", "", 1, "toolbar-more-btn", 3, "ohDropdownMenu"], ["oh-icon", "", 3, "ohType", "ohSize"], ["oh-menu-item", "", 2, "text-align", "center"], ["oh-button", "", "ohType", "text", "title", "Thu g\u1ECDn", 1, "toolbar-btn-collapse", 3, "click"], ["oh-icon", "", "ohType", "up", 3, "ohSize", "ohColor"], ["oh-button", "", "ohType", "text", "title", "M\u1EDF r\u1ED9ng", 1, "toolbar-btn-collapse", 3, "click"], ["oh-icon", "", "ohType", "down", 3, "ohSize", "ohColor"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 3, 0)(2, "div", 4, 1);
            i0.ɵɵtemplate(4, ToolbarComponent_div_4_Template, 10, 6, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c3, ctx.isCollapse))("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx.bgColor ? ctx.bgColor : ""));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.screenSize);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgStyle, i2.OHButtonComponent, i3.ɵOHTransitionPatchDirective, i4.OHDividerComponent, i5.OHMenuDirective, i5.OHMenuItemComponent, i6.OHDropDownDirective, i6.OHDropdownMenuComponent, i6.OHDropdownButtonDirective, i7.OHColDirective, i7.OHRowDirective, i8.OHIconDirective, i9.ToolbarItemComponent], styles: [".toobar-container[_ngcontent-%COMP%]{min-height:66px}.toolbar-wrapper[_ngcontent-%COMP%]{background-color:#fff;z-index:98;padding:0 30px;height:66px;position:fixed}.toolbar-wrapper.collapse[_ngcontent-%COMP%]{height:50px}[_nghost-%COMP%]     .ui-divider-vertical{height:32px;margin-left:16px;margin-right:16px}.toolbar-btn-collapse[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:2px}[_nghost-%COMP%]     .toolbar-wrapper.collapse .ui-divider-vertical{height:24px;margin-top:3px;margin-left:8px;margin-right:8px}.toolbar-more-btn[_ngcontent-%COMP%]{text-align:center;height:100%;width:40px;vertical-align:middle;padding-left:18px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarComponent, [{
        type: Component,
        args: [{ selector: 'app-toolbar', template: "<div #toolbarCtn class=\"toobar-container\">\r\n  <div\r\n    #toolbarWrp\r\n    oh-row\r\n    [ngClass]=\"{ 'toolbar-wrapper': true, collapse: isCollapse }\"\r\n    [ngStyle]=\"{ 'background-color': bgColor ? bgColor : '' }\"\r\n  >\r\n    <div *ngIf=\"screenSize\" oh-col [ohSpan]=\"24\">\r\n      <ng-container\r\n        *ngFor=\"let item of config.slice(0, sliceNum); let i = index\"\r\n      >\r\n        <toolbar-item\r\n          *ngIf=\"item.title || item.icon\"\r\n          [title]=\"item.title\"\r\n          [icon]=\"item.icon\"\r\n          [iconfont]=\"item.iconfont\"\r\n          [type]=\"isCollapse ? 'sm' : 'md'\"\r\n          (click)=\"onItemClick(item)\"\r\n        ></toolbar-item>\r\n        <oh-divider\r\n          *ngIf=\"!item.title && !item.icon && screenSize > 992\"\r\n          ohType=\"vertical\"\r\n        ></oh-divider>\r\n      </ng-container>\r\n      <ng-content></ng-content>\r\n      <button\r\n        *ngIf=\"config.length > sliceNum\"\r\n        oh-button\r\n        ohType=\"text\"\r\n        class=\"toolbar-more-btn\"\r\n        oh-dropdown\r\n        [ohDropdownMenu]=\"more\"\r\n      >\r\n        <i oh-icon [ohType]=\"'more'\" [ohSize]=\"'md'\"></i>\r\n      </button>\r\n      <oh-dropdown-menu #more=\"ohDropdownMenu\">\r\n        <ul oh-menu ohSelectable>\r\n          <li\r\n            *ngFor=\"\r\n              let item of config.slice(sliceNum, config.length);\r\n              let i = index\r\n            \"\r\n            oh-menu-item\r\n            style=\"text-align: center\"\r\n          >\r\n            <toolbar-item\r\n              *ngIf=\"item.title || item.icon\"\r\n              [title]=\"item.title\"\r\n              [icon]=\"item.icon\"\r\n              [iconfont]=\"item.iconfont\"\r\n              [type]=\"isCollapse ? 'sm' : 'md'\"\r\n              (click)=\"onItemClick(item)\"\r\n            ></toolbar-item>\r\n          </li>\r\n        </ul>\r\n      </oh-dropdown-menu>\r\n\r\n      <button\r\n        *ngIf=\"!isCollapse\"\r\n        oh-button\r\n        ohType=\"text\"\r\n        class=\"toolbar-btn-collapse\"\r\n        title=\"Thu g\u1ECDn\"\r\n        (click)=\"tonggleCollapse()\"\r\n      >\r\n        <i oh-icon ohType=\"up\" [ohSize]=\"'xs'\" [ohColor]=\"'primary'\"></i>\r\n      </button>\r\n      <button\r\n        *ngIf=\"isCollapse\"\r\n        oh-button\r\n        ohType=\"text\"\r\n        class=\"toolbar-btn-collapse\"\r\n        title=\"M\u1EDF r\u1ED9ng\"\r\n        (click)=\"tonggleCollapse()\"\r\n      >\r\n        <i\r\n          oh-icon\r\n          ohType=\"down\"\r\n          [ohSize]=\"'xs'\"\r\n          [ohColor]=\"'primary'\"\r\n        ></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".toobar-container{min-height:66px}.toolbar-wrapper{background-color:#fff;z-index:98;padding:0 30px;height:66px;position:fixed}.toolbar-wrapper.collapse{height:50px}:host ::ng-deep .ui-divider-vertical{height:32px;margin-left:16px;margin-right:16px}.toolbar-btn-collapse{position:absolute;right:10px;bottom:2px}:host ::ng-deep .toolbar-wrapper.collapse .ui-divider-vertical{height:24px;margin-top:3px;margin-left:8px;margin-right:8px}.toolbar-more-btn{text-align:center;height:100%;width:40px;vertical-align:middle;padding-left:18px}\n"] }]
    }], () => [{ type: i0.Renderer2 }], { config: [{
            type: Input
        }], fixAtTop: [{
            type: Input
        }], bgColor: [{
            type: Input
        }], isCollapse: [{
            type: Input
        }], itemClick: [{
            type: Output
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }], toolbarCtn: [{
            type: ViewChild,
            args: ['toolbarCtn']
        }], toolbarWrp: [{
            type: ViewChild,
            args: ['toolbarWrp']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToolbarComponent, { className: "ToolbarComponent", filePath: "lib\\toolbar.component\\toolbar.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvdG9vbGJhci5jb21wb25lbnQvdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvdG9vbGJhci5jb21wb25lbnQvdG9vbGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUVULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FmLHdDQU9DO0lBREMsK1BBQVMsMkJBQWlCLEtBQUM7SUFDNUIsaUJBQWU7Ozs7SUFGZCxBQURBLEFBREEsQUFEQSxxQ0FBb0Isc0JBQ0YsOEJBQ1EseUNBQ087OztJQUduQyxpQ0FHYzs7O0lBZGhCLDZCQUVDO0lBU0MsQUFSQSx5R0FPQyx3RkFJQTs7Ozs7SUFWRSxjQUE2QjtJQUE3QixvREFBNkI7SUFRN0IsY0FBbUQ7SUFBbkQsaUZBQW1EOzs7SUFLeEQsa0NBT0M7SUFDQyx3QkFBaUQ7SUFDbkQsaUJBQVM7Ozs7SUFIUCx3Q0FBdUI7SUFFWixjQUFpQjtJQUFDLEFBQWxCLCtCQUFpQixnQkFBZ0I7Ozs7SUFZeEMsd0NBT0M7SUFEQyxxUEFBUywyQkFBaUIsS0FBQztJQUM1QixpQkFBZTs7OztJQUZkLEFBREEsQUFEQSxBQURBLHFDQUFvQixzQkFDRiw4QkFDUSx5Q0FDTzs7O0lBYnJDLDhCQU9DO0lBQ0MsK0ZBT0M7SUFDSCxpQkFBSzs7O0lBUEEsY0FBNkI7SUFBN0Isb0RBQTZCOzs7O0lBV3RDLGtDQU9DO0lBREMsc0xBQVMsd0JBQWlCLEtBQUM7SUFFM0Isd0JBQWlFO0lBQ25FLGlCQUFTOztJQURnQixjQUFlO0lBQUMsQUFBaEIsNkJBQWUsc0JBQXNCOzs7O0lBRTlELGtDQU9DO0lBREMsc0xBQVMsd0JBQWlCLEtBQUM7SUFFM0Isd0JBS0s7SUFDUCxpQkFBUzs7SUFITCxjQUFlO0lBQ2YsQUFEQSw2QkFBZSxzQkFDTTs7O0lBeEUzQiw4QkFBNkM7SUFDM0MseUZBRUM7SUFjRCxrQkFBeUI7SUFDekIsNkVBT0M7SUFJQyxBQURGLGlEQUF5QyxZQUNkO0lBQ3ZCLHNFQU9DO0lBV0wsQUFERSxpQkFBSyxFQUNZO0lBWW5CLEFBVkEsOEVBT0MsaUVBVUE7SUFRSCxpQkFBTTs7O0lBM0V5QiwyQkFBYTtJQUV2QixjQUE4QjtJQUE5QixpRUFBOEI7SUFpQjlDLGVBQThCO0lBQTlCLDZEQUE4QjtJQWFELGVBQ1Y7SUFEVSxvRkFDVjtJQWtCbkIsY0FBaUI7SUFBakIseUNBQWlCO0lBVWpCLGNBQWdCO0lBQWhCLHdDQUFnQjs7QURqRHpCLE1BQU0sT0FBTyxnQkFBZ0I7SUFtQlA7SUFsQlgsTUFBTSxDQUFpQjtJQUN2QixRQUFRLEdBQVcsRUFBRSxDQUFDO0lBQ3RCLE9BQU8sQ0FBUztJQUNoQixVQUFVLEdBQVksS0FBSyxDQUFDO0lBRXJDLFVBQVUsR0FBVyxJQUFJLENBQUM7SUFDMUIsUUFBUSxHQUFXLEVBQUUsQ0FBQztJQUVaLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQUd2RCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRStCLFVBQVUsQ0FBYTtJQUN2QixVQUFVLENBQWE7SUFFdkQsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFHLENBQUM7SUFFM0MsUUFBUTtRQUNOLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2FBQzNDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxHQUFHO1lBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7YUFDOUMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEdBQUc7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUM5QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksR0FBRztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDOztZQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLE9BQU8sRUFDUCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUNqRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixLQUFLLEVBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQ3JCLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBa0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWUsS0FBSSxDQUFDOzBHQXZEVCxnQkFBZ0I7NkRBQWhCLGdCQUFnQjs7Ozs7Ozs7WUFBaEIsNkZBQUEsb0JBQWdCLCtCQUFBOzs7WUNsQjNCLEFBREYsaUNBQTBDLGdCQU12QztZQUNDLGtFQUE2QztZQTZFakQsQUFERSxpQkFBTSxFQUNGOztZQWhGRixlQUE2RDtZQUM3RCxBQURBLG9FQUE2RCx1RUFDSDtZQUVwRCxlQUFnQjtZQUFoQixxQ0FBZ0I7OztpRkRZYixnQkFBZ0I7Y0FMNUIsU0FBUzsyQkFDRSxhQUFhOzBDQUtkLE1BQU07a0JBQWQsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBS0ksU0FBUztrQkFBbEIsTUFBTTtZQUdQLFFBQVE7a0JBRFAsWUFBWTttQkFBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFLVCxVQUFVO2tCQUF6QyxTQUFTO21CQUFDLFlBQVk7WUFDUyxVQUFVO2tCQUF6QyxTQUFTO21CQUFDLFlBQVk7O2tGQWpCWixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1Yk1lbnVNb2RlbCB9IGZyb20gJy4uL21vZGVscy9tZW51Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90b29sYmFyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogU3ViTWVudU1vZGVsW107XHJcbiAgQElucHV0KCkgZml4QXRUb3A6IG51bWJlciA9IDg1O1xyXG4gIEBJbnB1dCgpIGJnQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBpc0NvbGxhcHNlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHNjcmVlblNpemU6IG51bWJlciA9IDEyMDA7XHJcbiAgc2xpY2VOdW06IG51bWJlciA9IDE1O1xyXG5cclxuICBAT3V0cHV0KCkgaXRlbUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxTdWJNZW51TW9kZWw+KCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gIG9uUmVzaXplKGV2ZW50KSB7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVNjcmVlbigpO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndG9vbGJhckN0bicpIHB1YmxpYyB0b29sYmFyQ3RuOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3Rvb2xiYXJXcnAnKSBwdWJsaWMgdG9vbGJhcldycDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVNjcmVlbigpO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZVNjcmVlbigpIHtcclxuICAgIHRoaXMuc2NyZWVuU2l6ZSA9IHRoaXMudG9vbGJhckN0bi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgaWYgKHRoaXMuc2NyZWVuU2l6ZSA+PSAxMjAwKSB0aGlzLnNsaWNlTnVtID0gMTU7XHJcbiAgICBlbHNlIGlmICh0aGlzLnNjcmVlblNpemUgPj0gOTkyKSB0aGlzLnNsaWNlTnVtID0gOTtcclxuICAgIGVsc2UgaWYgKHRoaXMuc2NyZWVuU2l6ZSA+PSA3NjgpIHRoaXMuc2xpY2VOdW0gPSA2O1xyXG4gICAgZWxzZSBpZiAodGhpcy5zY3JlZW5TaXplID49IDQyNSkgdGhpcy5zbGljZU51bSA9IDM7XHJcbiAgICBlbHNlIHRoaXMuc2xpY2VOdW0gPSAyO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMudG9vbGJhcldycC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAnd2lkdGgnLFxyXG4gICAgICB0aGlzLnRvb2xiYXJDdG4ubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCArICdweCdcclxuICAgICk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICB0aGlzLnRvb2xiYXJXcnAubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ3RvcCcsXHJcbiAgICAgIHRoaXMuZml4QXRUb3AgKyAncHgnXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdG9uZ2dsZUNvbGxhcHNlKCkge1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlID0gIXRoaXMuaXNDb2xsYXBzZTtcclxuICB9XHJcblxyXG4gIG9uSXRlbUNsaWNrKGl0ZW06IFN1Yk1lbnVNb2RlbCkge1xyXG4gICAgdGhpcy5pdGVtQ2xpY2suZW1pdChpdGVtKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHt9XHJcbn1cclxuIiwiPGRpdiAjdG9vbGJhckN0biBjbGFzcz1cInRvb2Jhci1jb250YWluZXJcIj5cclxuICA8ZGl2XHJcbiAgICAjdG9vbGJhcldycFxyXG4gICAgb2gtcm93XHJcbiAgICBbbmdDbGFzc109XCJ7ICd0b29sYmFyLXdyYXBwZXInOiB0cnVlLCBjb2xsYXBzZTogaXNDb2xsYXBzZSB9XCJcclxuICAgIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBiZ0NvbG9yID8gYmdDb2xvciA6ICcnIH1cIlxyXG4gID5cclxuICAgIDxkaXYgKm5nSWY9XCJzY3JlZW5TaXplXCIgb2gtY29sIFtvaFNwYW5dPVwiMjRcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbmZpZy5zbGljZSgwLCBzbGljZU51bSk7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRvb2xiYXItaXRlbVxyXG4gICAgICAgICAgKm5nSWY9XCJpdGVtLnRpdGxlIHx8IGl0ZW0uaWNvblwiXHJcbiAgICAgICAgICBbdGl0bGVdPVwiaXRlbS50aXRsZVwiXHJcbiAgICAgICAgICBbaWNvbl09XCJpdGVtLmljb25cIlxyXG4gICAgICAgICAgW2ljb25mb250XT1cIml0ZW0uaWNvbmZvbnRcIlxyXG4gICAgICAgICAgW3R5cGVdPVwiaXNDb2xsYXBzZSA/ICdzbScgOiAnbWQnXCJcclxuICAgICAgICAgIChjbGljayk9XCJvbkl0ZW1DbGljayhpdGVtKVwiXHJcbiAgICAgICAgPjwvdG9vbGJhci1pdGVtPlxyXG4gICAgICAgIDxvaC1kaXZpZGVyXHJcbiAgICAgICAgICAqbmdJZj1cIiFpdGVtLnRpdGxlICYmICFpdGVtLmljb24gJiYgc2NyZWVuU2l6ZSA+IDk5MlwiXHJcbiAgICAgICAgICBvaFR5cGU9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgPjwvb2gtZGl2aWRlcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgICpuZ0lmPVwiY29uZmlnLmxlbmd0aCA+IHNsaWNlTnVtXCJcclxuICAgICAgICBvaC1idXR0b25cclxuICAgICAgICBvaFR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBjbGFzcz1cInRvb2xiYXItbW9yZS1idG5cIlxyXG4gICAgICAgIG9oLWRyb3Bkb3duXHJcbiAgICAgICAgW29oRHJvcGRvd25NZW51XT1cIm1vcmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgb2gtaWNvbiBbb2hUeXBlXT1cIidtb3JlJ1wiIFtvaFNpemVdPVwiJ21kJ1wiPjwvaT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxvaC1kcm9wZG93bi1tZW51ICNtb3JlPVwib2hEcm9wZG93bk1lbnVcIj5cclxuICAgICAgICA8dWwgb2gtbWVudSBvaFNlbGVjdGFibGU+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgKm5nRm9yPVwiXHJcbiAgICAgICAgICAgICAgbGV0IGl0ZW0gb2YgY29uZmlnLnNsaWNlKHNsaWNlTnVtLCBjb25maWcubGVuZ3RoKTtcclxuICAgICAgICAgICAgICBsZXQgaSA9IGluZGV4XHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgIG9oLW1lbnUtaXRlbVxyXG4gICAgICAgICAgICBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx0b29sYmFyLWl0ZW1cclxuICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udGl0bGUgfHwgaXRlbS5pY29uXCJcclxuICAgICAgICAgICAgICBbdGl0bGVdPVwiaXRlbS50aXRsZVwiXHJcbiAgICAgICAgICAgICAgW2ljb25dPVwiaXRlbS5pY29uXCJcclxuICAgICAgICAgICAgICBbaWNvbmZvbnRdPVwiaXRlbS5pY29uZm9udFwiXHJcbiAgICAgICAgICAgICAgW3R5cGVdPVwiaXNDb2xsYXBzZSA/ICdzbScgOiAnbWQnXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwib25JdGVtQ2xpY2soaXRlbSlcIlxyXG4gICAgICAgICAgICA+PC90b29sYmFyLWl0ZW0+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvb2gtZHJvcGRvd24tbWVudT5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICAqbmdJZj1cIiFpc0NvbGxhcHNlXCJcclxuICAgICAgICBvaC1idXR0b25cclxuICAgICAgICBvaFR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBjbGFzcz1cInRvb2xiYXItYnRuLWNvbGxhcHNlXCJcclxuICAgICAgICB0aXRsZT1cIlRodSBn4buNblwiXHJcbiAgICAgICAgKGNsaWNrKT1cInRvbmdnbGVDb2xsYXBzZSgpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIG9oLWljb24gb2hUeXBlPVwidXBcIiBbb2hTaXplXT1cIid4cydcIiBbb2hDb2xvcl09XCIncHJpbWFyeSdcIj48L2k+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgKm5nSWY9XCJpc0NvbGxhcHNlXCJcclxuICAgICAgICBvaC1idXR0b25cclxuICAgICAgICBvaFR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBjbGFzcz1cInRvb2xiYXItYnRuLWNvbGxhcHNlXCJcclxuICAgICAgICB0aXRsZT1cIk3hu58gcuG7mW5nXCJcclxuICAgICAgICAoY2xpY2spPVwidG9uZ2dsZUNvbGxhcHNlKClcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgIG9oLWljb25cclxuICAgICAgICAgIG9oVHlwZT1cImRvd25cIlxyXG4gICAgICAgICAgW29oU2l6ZV09XCIneHMnXCJcclxuICAgICAgICAgIFtvaENvbG9yXT1cIidwcmltYXJ5J1wiXHJcbiAgICAgICAgPjwvaT5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==