import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "@onehealth/ui/core/transition-patch";
import * as i4 from "@onehealth/ui/menu";
import * as i5 from "@onehealth/ui/icon";
import * as i6 from "@onehealth/core";
import * as i7 from "../menu.pipes";
import * as i8 from "../assert.pipe";
function SubMenuComponent_ul_0_ng_container_1_li_1_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 10);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵstyleMap(menu_r2.ghiChu ? "background:" + menu_r2.ghiChu : "");
    i0.ɵɵproperty("ohSrc", menu_r2.logo)("ohSize", "md")("alt", menu_r2.ten);
} }
function SubMenuComponent_ul_0_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r1); const menu_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onClick(menu_r2)); });
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_1_i_2_Template, 1, 5, "i", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("title", menu_r2.ten);
    i0.ɵɵproperty("ohSelected", i0.ɵɵpipeBind2(1, 4, ctx_r2.activeRouter, menu_r2.redirectUrl));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", menu_r2.logo);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", menu_r2.ten, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohType", menu_r2.icon)("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_i_1_Template, 1, 2, "i", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohSrc", i0.ɵɵpipeBind1(1, 2, menu_r2.icon))("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_i_0_Template, 2, 4, "i", 15);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_2_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r4); const menu_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onClick(menu_r2)); });
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_2_ng_container_2_Template, 2, 1, "ng-container", 12)(3, SubMenuComponent_ul_0_ng_container_1_li_2_ng_template_3_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elseTemplate_r5 = i0.ɵɵreference(4);
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", menu_r2.routerLink);
    i0.ɵɵpropertyInterpolate("title", menu_r2.title);
    i0.ɵɵproperty("ohSelected", i0.ɵɵpipeBind2(1, 6, ctx_r2.activeRouter, menu_r2.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", menu_r2.iconfont)("ngIfElse", elseTemplate_r5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", menu_r2.title, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohType", menu_r2.icon)("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_i_1_Template, 1, 2, "i", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohSrc", i0.ɵɵpipeBind1(1, 2, menu_r2.icon))("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_i_0_Template, 2, 4, "i", 15);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵlistener("click", function SubMenuComponent_ul_0_ng_container_1_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r6); const menu_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onClick(menu_r2)); });
    i0.ɵɵtemplate(2, SubMenuComponent_ul_0_ng_container_1_li_3_ng_container_2_Template, 2, 1, "ng-container", 12)(3, SubMenuComponent_ul_0_ng_container_1_li_3_ng_template_3_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const elseTemplate_r7 = i0.ɵɵreference(4);
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("ohRouterLink", menu_r2.ohRouterLink);
    i0.ɵɵpropertyInterpolate("title", menu_r2.title);
    i0.ɵɵproperty("ohSelected", i0.ɵɵpipeBind2(1, 6, ctx_r2.activeRouter, menu_r2.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", menu_r2.iconfont)("ngIfElse", elseTemplate_r7);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", menu_r2.title, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohType", menu_r2.icon)("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_i_1_Template, 1, 2, "i", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 16);
    i0.ɵɵpipe(1, "assetUrl");
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ohSrc", i0.ɵɵpipeBind1(1, 2, menu_r2.icon))("ohSize", "md");
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_i_0_Template, 2, 4, "i", 15);
} if (rf & 2) {
    const menu_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngIf", menu_r2.icon);
} }
function SubMenuComponent_ul_0_ng_container_1_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 18);
    i0.ɵɵpipe(1, "activeUrlCheck");
    i0.ɵɵelementStart(2, "a", 19);
    i0.ɵɵtemplate(3, SubMenuComponent_ul_0_ng_container_1_li_4_ng_container_3_Template, 2, 1, "ng-container", 12)(4, SubMenuComponent_ul_0_ng_container_1_li_4_ng_template_4_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const elseTemplate_r8 = i0.ɵɵreference(5);
    const menu_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ohSelected", i0.ɵɵpipeBind2(1, 6, ctx_r2.activeRouter, menu_r2.routerLink));
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", menu_r2.href, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("title", menu_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.iconfont)("ngIfElse", elseTemplate_r8);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", menu_r2.title, " ");
} }
function SubMenuComponent_ul_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_li_1_Template, 4, 7, "li", 4)(2, SubMenuComponent_ul_0_ng_container_1_li_2_Template, 6, 9, "li", 5)(3, SubMenuComponent_ul_0_ng_container_1_li_3_Template, 6, 9, "li", 6)(4, SubMenuComponent_ul_0_ng_container_1_li_4_Template, 7, 9, "li", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.redirectUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.routerLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.ohRouterLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", menu_r2.href);
} }
function SubMenuComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 2);
    i0.ɵɵtemplate(1, SubMenuComponent_ul_0_ng_container_1_Template, 5, 4, "ng-container", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.menuConfig);
} }
export class SubMenuComponent {
    router;
    menuConfig;
    itemClick = new EventEmitter();
    activeRouter;
    openNewTab(url) {
        window.open(url, '_blank');
    }
    constructor(router) {
        this.router = router;
        this.router.events.subscribe((data) => {
            if (data instanceof NavigationEnd) {
                this.activeRouter = data.url.toLowerCase();
            }
        });
    }
    ngOnInit() { }
    onClick(event) {
        this.itemClick.emit(event);
        if (event.redirectUrl) {
            this.openNewTab(event.redirectUrl);
        }
    }
    static ɵfac = function SubMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubMenuComponent)(i0.ɵɵdirectiveInject(i1.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubMenuComponent, selectors: [["submenu-comp"]], inputs: { menuConfig: "menuConfig" }, outputs: { itemClick: "itemClick" }, decls: 1, vars: 1, consts: [["elseTemplate", ""], ["oh-menu", "", 4, "ngIf"], ["oh-menu", ""], [4, "ngFor", "ngForOf"], ["class", "w-100", "oh-menu-item", "", 3, "title", "ohSelected", "click", 4, "ngIf"], ["class", "w-100", "oh-menu-item", "", 3, "routerLink", "title", "ohSelected", "click", 4, "ngIf"], ["class", "w-100", "oh-menu-item", "", 3, "ohRouterLink", "title", "ohSelected", "click", 4, "ngIf"], ["class", "w-100", "oh-menu-item", "", 3, "ohSelected", 4, "ngIf"], ["oh-menu-item", "", 1, "w-100", 3, "click", "title", "ohSelected"], ["oh-icon", "", "class", "h-100 p-1", 3, "ohSrc", "ohSize", "alt", "style", 4, "ngIf"], ["oh-icon", "", 1, "h-100", "p-1", 3, "ohSrc", "ohSize", "alt"], ["oh-menu-item", "", 1, "w-100", 3, "click", "routerLink", "title", "ohSelected"], [4, "ngIf", "ngIfElse"], ["oh-icon", "", 3, "ohType", "ohSize", 4, "ngIf"], ["oh-icon", "", 3, "ohType", "ohSize"], ["oh-icon", "", 3, "ohSrc", "ohSize", 4, "ngIf"], ["oh-icon", "", 3, "ohSrc", "ohSize"], ["oh-menu-item", "", 1, "w-100", 3, "click", "ohRouterLink", "title", "ohSelected"], ["oh-menu-item", "", 1, "w-100", 3, "ohSelected"], ["target", "_blank", 3, "href", "title"]], template: function SubMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SubMenuComponent_ul_0_Template, 2, 1, "ul", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.menuConfig && ctx.menuConfig.length > 0);
        } }, dependencies: [i2.NgForOf, i2.NgIf, i3.ɵOHTransitionPatchDirective, i4.OHMenuDirective, i4.OHMenuItemComponent, i5.OHIconDirective, i1.RouterLink, i6.VNPTRouterLinkDirective, i7.ActiveUrlCheckPipe, i8.AssetUrlPipe], styles: ["[_nghost-%COMP%]     .ui-menu-inline .ui-menu-item{margin-bottom:15px;margin-top:6px;padding-right:21px;padding-left:16px!important}[_nghost-%COMP%]     .ui-menu-inline .ui-menu-item i{margin-right:12px}[_nghost-%COMP%]     .ui-menu:not(.ui-menu-horizontal) .ui-menu-item-selected{background-color:#e7e8e9}[_nghost-%COMP%]     .ui-menu-inline>.ui-menu-submenu>.ui-menu-submenu-title{font-weight:600;padding-left:10px!important}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubMenuComponent, [{
        type: Component,
        args: [{ selector: 'submenu-comp', template: "<ul *ngIf=\"menuConfig && menuConfig.length > 0\" oh-menu>\r\n  <ng-container *ngFor=\"let menu of menuConfig; let i = index\">\r\n    <li\r\n      class=\"w-100\"\r\n      *ngIf=\"menu.redirectUrl\"\r\n      oh-menu-item\r\n      title=\"{{ menu.ten }}\"\r\n      [ohSelected]=\"activeRouter | activeUrlCheck: menu.redirectUrl\"\r\n      (click)=\"onClick(menu)\"\r\n    >\r\n      <i\r\n        *ngIf=\"menu.logo\"\r\n        oh-icon\r\n        [ohSrc]=\"menu.logo\"\r\n        [ohSize]=\"'md'\"\r\n        [alt]=\"menu.ten\"\r\n        class=\"h-100 p-1\"\r\n        [style]=\"menu.ghiChu ? 'background:' + menu.ghiChu : ''\"\r\n      ></i>\r\n      {{ menu.ten }}\r\n    </li>\r\n    <li\r\n      class=\"w-100\"\r\n      *ngIf=\"menu.routerLink\"\r\n      oh-menu-item\r\n      routerLink=\"{{ menu.routerLink }}\"\r\n      title=\"{{ menu.title }}\"\r\n      [ohSelected]=\"activeRouter | activeUrlCheck: menu.routerLink\"\r\n      (click)=\"onClick(menu)\"\r\n    >\r\n      <ng-container *ngIf=\"menu.iconfont; else elseTemplate\">\r\n        <i *ngIf=\"menu.icon\" oh-icon [ohType]=\"menu.icon\" [ohSize]=\"'md'\"></i>\r\n      </ng-container>\r\n      <ng-template #elseTemplate>\r\n        <i\r\n          *ngIf=\"menu.icon\"\r\n          oh-icon\r\n          [ohSrc]=\"menu.icon | assetUrl\"\r\n          [ohSize]=\"'md'\"\r\n        ></i> </ng-template\r\n      >{{ menu.title }}\r\n    </li>\r\n    <li\r\n      class=\"w-100\"\r\n      *ngIf=\"menu.ohRouterLink\"\r\n      oh-menu-item\r\n      ohRouterLink=\"{{ menu.ohRouterLink }}\"\r\n      title=\"{{ menu.title }}\"\r\n      [ohSelected]=\"activeRouter | activeUrlCheck: menu.routerLink\"\r\n      (click)=\"onClick(menu)\"\r\n    >\r\n      <ng-container *ngIf=\"menu.iconfont; else elseTemplate\">\r\n        <i *ngIf=\"menu.icon\" oh-icon [ohType]=\"menu.icon\" [ohSize]=\"'md'\"></i>\r\n      </ng-container>\r\n      <ng-template #elseTemplate>\r\n        <i\r\n          *ngIf=\"menu.icon\"\r\n          oh-icon\r\n          [ohSrc]=\"menu.icon | assetUrl\"\r\n          [ohSize]=\"'md'\"\r\n        ></i> </ng-template\r\n      >{{ menu.title }}\r\n    </li>\r\n    <li\r\n      class=\"w-100\"\r\n      *ngIf=\"menu.href\"\r\n      oh-menu-item\r\n      [ohSelected]=\"activeRouter | activeUrlCheck: menu.routerLink\"\r\n    >\r\n      <a href=\"{{ menu.href }}\" title=\"{{ menu.title }}\" target=\"_blank\">\r\n        <ng-container *ngIf=\"menu.iconfont; else elseTemplate\">\r\n          <i *ngIf=\"menu.icon\" oh-icon [ohType]=\"menu.icon\" [ohSize]=\"'md'\"></i>\r\n        </ng-container>\r\n        <ng-template #elseTemplate>\r\n          <i\r\n            *ngIf=\"menu.icon\"\r\n            oh-icon\r\n            [ohSrc]=\"menu.icon | assetUrl\"\r\n            [ohSize]=\"'md'\"\r\n          ></i>\r\n        </ng-template>\r\n        {{ menu.title }}\r\n      </a>\r\n    </li>\r\n  </ng-container>\r\n</ul>\r\n", styles: [":host ::ng-deep .ui-menu-inline .ui-menu-item{margin-bottom:15px;margin-top:6px;padding-right:21px;padding-left:16px!important}:host ::ng-deep .ui-menu-inline .ui-menu-item i{margin-right:12px}:host ::ng-deep .ui-menu:not(.ui-menu-horizontal) .ui-menu-item-selected{background-color:#e7e8e9}:host ::ng-deep .ui-menu-inline>.ui-menu-submenu>.ui-menu-submenu-title{font-weight:600;padding-left:10px!important}\n"] }]
    }], () => [{ type: i1.Router }], { menuConfig: [{
            type: Input
        }], itemClick: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SubMenuComponent, { className: "SubMenuComponent", filePath: "lib\\menu.component\\menu.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvbWVudS5jb21wb25lbnQvbWVudS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvbWVudS5jb21wb25lbnQvbWVudS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNTbEQsd0JBUUs7OztJQURILG1FQUF3RDtJQUZ4RCxBQURBLEFBREEsb0NBQW1CLGdCQUNKLG9CQUNDOzs7O0lBYnBCLDZCQU9DOztJQURDLDBPQUFTLHVCQUFhLEtBQUM7SUFFdkIsc0ZBUUM7SUFDRCxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFkSCw4Q0FBc0I7SUFDdEIsMkZBQThEO0lBSTNELGVBQWU7SUFBZixtQ0FBZTtJQVFsQixjQUNGO0lBREUsNENBQ0Y7OztJQVdJLHdCQUFzRTs7O0lBQXBCLEFBQXJCLHFDQUFvQixnQkFBZ0I7OztJQURuRSw2QkFBdUQ7SUFDckQsc0dBQWtFOzs7O0lBQTlELGNBQWU7SUFBZixtQ0FBZTs7O0lBR25CLHdCQUtLOzs7O0lBREgsQUFEQSwwREFBOEIsZ0JBQ2Y7OztJQUpqQixxR0FLQzs7O0lBSkUsbUNBQWU7Ozs7SUFkdEIsOEJBUUM7O0lBREMsME9BQVMsdUJBQWEsS0FBQztJQUt2QixBQUhBLDZHQUF1RCw4SEFHNUI7SUFPMUIsWUFDSDtJQUFBLGlCQUFLOzs7OztJQWhCSCwwREFBa0M7SUFDbEMsZ0RBQXdCO0lBQ3hCLDBGQUE2RDtJQUc5QyxlQUFxQjtJQUFBLEFBQXJCLHVDQUFx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dHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N1Ym1lbnUtY29tcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21lbnUuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ViTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbWVudUNvbmZpZzogYW55W107XHJcblxyXG4gIEBPdXRwdXQoKSBpdGVtQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgYWN0aXZlUm91dGVyOiBzdHJpbmc7XHJcblxyXG4gIG9wZW5OZXdUYWIodXJsOiBhbnkpOiB2b2lkIHtcclxuICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUm91dGVyID0gZGF0YS51cmwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG4gIG9uQ2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5pdGVtQ2xpY2suZW1pdChldmVudCk7XHJcbiAgICBpZiAoZXZlbnQucmVkaXJlY3RVcmwpIHtcclxuICAgICAgdGhpcy5vcGVuTmV3VGFiKGV2ZW50LnJlZGlyZWN0VXJsKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPHVsICpuZ0lmPVwibWVudUNvbmZpZyAmJiBtZW51Q29uZmlnLmxlbmd0aCA+IDBcIiBvaC1tZW51PlxyXG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lbnUgb2YgbWVudUNvbmZpZzsgbGV0IGkgPSBpbmRleFwiPlxyXG4gICAgPGxpXHJcbiAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAqbmdJZj1cIm1lbnUucmVkaXJlY3RVcmxcIlxyXG4gICAgICBvaC1tZW51LWl0ZW1cclxuICAgICAgdGl0bGU9XCJ7eyBtZW51LnRlbiB9fVwiXHJcbiAgICAgIFtvaFNlbGVjdGVkXT1cImFjdGl2ZVJvdXRlciB8IGFjdGl2ZVVybENoZWNrOiBtZW51LnJlZGlyZWN0VXJsXCJcclxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2sobWVudSlcIlxyXG4gICAgPlxyXG4gICAgICA8aVxyXG4gICAgICAgICpuZ0lmPVwibWVudS5sb2dvXCJcclxuICAgICAgICBvaC1pY29uXHJcbiAgICAgICAgW29oU3JjXT1cIm1lbnUubG9nb1wiXHJcbiAgICAgICAgW29oU2l6ZV09XCInbWQnXCJcclxuICAgICAgICBbYWx0XT1cIm1lbnUudGVuXCJcclxuICAgICAgICBjbGFzcz1cImgtMTAwIHAtMVwiXHJcbiAgICAgICAgW3N0eWxlXT1cIm1lbnUuZ2hpQ2h1ID8gJ2JhY2tncm91bmQ6JyArIG1lbnUuZ2hpQ2h1IDogJydcIlxyXG4gICAgICA+PC9pPlxyXG4gICAgICB7eyBtZW51LnRlbiB9fVxyXG4gICAgPC9saT5cclxuICAgIDxsaVxyXG4gICAgICBjbGFzcz1cInctMTAwXCJcclxuICAgICAgKm5nSWY9XCJtZW51LnJvdXRlckxpbmtcIlxyXG4gICAgICBvaC1tZW51LWl0ZW1cclxuICAgICAgcm91dGVyTGluaz1cInt7IG1lbnUucm91dGVyTGluayB9fVwiXHJcbiAgICAgIHRpdGxlPVwie3sgbWVudS50aXRsZSB9fVwiXHJcbiAgICAgIFtvaFNlbGVjdGVkXT1cImFjdGl2ZVJvdXRlciB8IGFjdGl2ZVVybENoZWNrOiBtZW51LnJvdXRlckxpbmtcIlxyXG4gICAgICAoY2xpY2spPVwib25DbGljayhtZW51KVwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtZW51Lmljb25mb250OyBlbHNlIGVsc2VUZW1wbGF0ZVwiPlxyXG4gICAgICAgIDxpICpuZ0lmPVwibWVudS5pY29uXCIgb2gtaWNvbiBbb2hUeXBlXT1cIm1lbnUuaWNvblwiIFtvaFNpemVdPVwiJ21kJ1wiPjwvaT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjZWxzZVRlbXBsYXRlPlxyXG4gICAgICAgIDxpXHJcbiAgICAgICAgICAqbmdJZj1cIm1lbnUuaWNvblwiXHJcbiAgICAgICAgICBvaC1pY29uXHJcbiAgICAgICAgICBbb2hTcmNdPVwibWVudS5pY29uIHwgYXNzZXRVcmxcIlxyXG4gICAgICAgICAgW29oU2l6ZV09XCInbWQnXCJcclxuICAgICAgICA+PC9pPiA8L25nLXRlbXBsYXRlXHJcbiAgICAgID57eyBtZW51LnRpdGxlIH19XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpXHJcbiAgICAgIGNsYXNzPVwidy0xMDBcIlxyXG4gICAgICAqbmdJZj1cIm1lbnUub2hSb3V0ZXJMaW5rXCJcclxuICAgICAgb2gtbWVudS1pdGVtXHJcbiAgICAgIG9oUm91dGVyTGluaz1cInt7IG1lbnUub2hSb3V0ZXJMaW5rIH19XCJcclxuICAgICAgdGl0bGU9XCJ7eyBtZW51LnRpdGxlIH19XCJcclxuICAgICAgW29oU2VsZWN0ZWRdPVwiYWN0aXZlUm91dGVyIHwgYWN0aXZlVXJsQ2hlY2s6IG1lbnUucm91dGVyTGlua1wiXHJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrKG1lbnUpXCJcclxuICAgID5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1lbnUuaWNvbmZvbnQ7IGVsc2UgZWxzZVRlbXBsYXRlXCI+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJtZW51Lmljb25cIiBvaC1pY29uIFtvaFR5cGVdPVwibWVudS5pY29uXCIgW29oU2l6ZV09XCInbWQnXCI+PC9pPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLXRlbXBsYXRlICNlbHNlVGVtcGxhdGU+XHJcbiAgICAgICAgPGlcclxuICAgICAgICAgICpuZ0lmPVwibWVudS5pY29uXCJcclxuICAgICAgICAgIG9oLWljb25cclxuICAgICAgICAgIFtvaFNyY109XCJtZW51Lmljb24gfCBhc3NldFVybFwiXHJcbiAgICAgICAgICBbb2hTaXplXT1cIidtZCdcIlxyXG4gICAgICAgID48L2k+IDwvbmctdGVtcGxhdGVcclxuICAgICAgPnt7IG1lbnUudGl0bGUgfX1cclxuICAgIDwvbGk+XHJcbiAgICA8bGlcclxuICAgICAgY2xhc3M9XCJ3LTEwMFwiXHJcbiAgICAgICpuZ0lmPVwibWVudS5ocmVmXCJcclxuICAgICAgb2gtbWVudS1pdGVtXHJcbiAgICAgIFtvaFNlbGVjdGVkXT1cImFjdGl2ZVJvdXRlciB8IGFjdGl2ZVVybENoZWNrOiBtZW51LnJvdXRlckxpbmtcIlxyXG4gICAgPlxyXG4gICAgICA8YSBocmVmPVwie3sgbWVudS5ocmVmIH19XCIgdGl0bGU9XCJ7eyBtZW51LnRpdGxlIH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1lbnUuaWNvbmZvbnQ7IGVsc2UgZWxzZVRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8aSAqbmdJZj1cIm1lbnUuaWNvblwiIG9oLWljb24gW29oVHlwZV09XCJtZW51Lmljb25cIiBbb2hTaXplXT1cIidtZCdcIj48L2k+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNlbHNlVGVtcGxhdGU+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAqbmdJZj1cIm1lbnUuaWNvblwiXHJcbiAgICAgICAgICAgIG9oLWljb25cclxuICAgICAgICAgICAgW29oU3JjXT1cIm1lbnUuaWNvbiB8IGFzc2V0VXJsXCJcclxuICAgICAgICAgICAgW29oU2l6ZV09XCInbWQnXCJcclxuICAgICAgICAgID48L2k+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICB7eyBtZW51LnRpdGxlIH19XHJcbiAgICAgIDwvYT5cclxuICAgIDwvbGk+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvdWw+XHJcbiJdfQ==