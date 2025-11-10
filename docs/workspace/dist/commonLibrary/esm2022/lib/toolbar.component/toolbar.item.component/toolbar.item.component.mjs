import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@onehealth/ui/button";
import * as i3 from "@onehealth/ui/core/transition-patch";
import * as i4 from "@onehealth/ui/icon";
import * as i5 from "../../assert.pipe";
function ToolbarItemComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵpipe(2, "assetUrl");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSrc", ctx_r0.iconfont ? "" : i0.ɵɵpipeBind1(2, 5, ctx_r0.icon))("ohType", ctx_r0.iconfont ? ctx_r0.icon : "")("ohSize", "lg");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function ToolbarItemComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵelement(1, "i", 4);
    i0.ɵɵpipe(2, "assetUrl");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSrc", ctx_r0.iconfont ? "" : i0.ɵɵpipeBind1(2, 4, ctx_r0.icon))("ohType", ctx_r0.iconfont ? ctx_r0.icon : "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function ToolbarItemComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵelement(1, "i", 3);
    i0.ɵɵpipe(2, "assetUrl");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("title", ctx_r0.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ohSrc", ctx_r0.iconfont ? "" : i0.ɵɵpipeBind1(2, 5, ctx_r0.icon))("ohType", ctx_r0.iconfont ? ctx_r0.icon : "")("ohSize", "xs");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
export class ToolbarItemComponent {
    type = 'md';
    title;
    icon;
    iconfont;
    ngOnInit() { }
    static ɵfac = function ToolbarItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ToolbarItemComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarItemComponent, selectors: [["toolbar-item"]], inputs: { type: "type", title: "title", icon: "icon", iconfont: "iconfont" }, decls: 3, vars: 3, consts: [["oh-button", "", "ohType", "text", "class", "toolbar-btn", 3, "title", 4, "ngIf"], ["oh-button", "", "ohType", "text", "class", "toolbar-btn-sm", 3, "title", 4, "ngIf"], ["oh-button", "", "ohType", "text", 1, "toolbar-btn", 3, "title"], ["oh-icon", "", 3, "ohSrc", "ohType", "ohSize"], ["oh-icon", "", 3, "ohSrc", "ohType"], ["oh-button", "", "ohType", "text", 1, "toolbar-btn-sm", 3, "title"]], template: function ToolbarItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ToolbarItemComponent_button_0_Template, 5, 7, "button", 0)(1, ToolbarItemComponent_button_1_Template, 5, 6, "button", 0)(2, ToolbarItemComponent_button_2_Template, 5, 7, "button", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.type === "lg");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type === "md");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.type === "sm");
        } }, dependencies: [i1.NgIf, i2.OHButtonComponent, i3.ɵOHTransitionPatchDirective, i4.OHIconDirective, i5.AssetUrlPipe], styles: [".toolbar-btn[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:116px;vertical-align:middle}.toolbar-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;width:100%;display:block;margin-top:5px;font-size:12px;text-overflow:ellipsis;overflow:hidden}.toolbar-btn-sm[_ngcontent-%COMP%]{height:100%;margin:0 4px;max-width:100px;vertical-align:middle}.toolbar-btn-sm[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:100%;display:block}.toolbar-btn-sm[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0;width:100%;display:block;margin-top:5px;font-size:11px;text-overflow:ellipsis;overflow:hidden}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarItemComponent, [{
        type: Component,
        args: [{ selector: 'toolbar-item', template: "<button\r\n  *ngIf=\"type === 'lg'\"\r\n  oh-button\r\n  ohType=\"text\"\r\n  class=\"toolbar-btn\"\r\n  title=\"{{ title }}\"\r\n>\r\n  <i\r\n    oh-icon\r\n    [ohSrc]=\"iconfont ? '' : (icon | assetUrl)\"\r\n    [ohType]=\"iconfont ? icon : ''\"\r\n    [ohSize]=\"'lg'\"\r\n  ></i\r\n  ><span>{{ title }}</span>\r\n</button>\r\n<button\r\n  *ngIf=\"type === 'md'\"\r\n  oh-button\r\n  ohType=\"text\"\r\n  class=\"toolbar-btn\"\r\n  title=\"{{ title }}\"\r\n>\r\n  <i\r\n    oh-icon\r\n    [ohSrc]=\"iconfont ? '' : (icon | assetUrl)\"\r\n    [ohType]=\"iconfont ? icon : ''\"\r\n  ></i\r\n  ><span>{{ title }}</span>\r\n</button>\r\n<button\r\n  *ngIf=\"type === 'sm'\"\r\n  oh-button\r\n  ohType=\"text\"\r\n  class=\"toolbar-btn-sm\"\r\n  title=\"{{ title }}\"\r\n>\r\n  <i\r\n    oh-icon\r\n    [ohSrc]=\"iconfont ? '' : (icon | assetUrl)\"\r\n    [ohType]=\"iconfont ? icon : ''\"\r\n    [ohSize]=\"'xs'\"\r\n  ></i\r\n  ><span>{{ title }}</span>\r\n</button>\r\n", styles: [".toolbar-btn{height:100%;margin:0 4px;max-width:116px;vertical-align:middle}.toolbar-btn i{width:100%;display:block}.toolbar-btn span{margin-left:0;width:100%;display:block;margin-top:5px;font-size:12px;text-overflow:ellipsis;overflow:hidden}.toolbar-btn-sm{height:100%;margin:0 4px;max-width:100px;vertical-align:middle}.toolbar-btn-sm i{width:100%;display:block}.toolbar-btn-sm span{margin-left:0;width:100%;display:block;margin-top:5px;font-size:11px;text-overflow:ellipsis;overflow:hidden}\n"] }]
    }], null, { type: [{
            type: Input
        }], title: [{
            type: Input
        }], icon: [{
            type: Input
        }], iconfont: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ToolbarItemComponent, { className: "ToolbarItemComponent", filePath: "lib\\toolbar.component\\toolbar.item.component\\toolbar.item.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi90b29sYmFyLmNvbXBvbmVudC90b29sYmFyLml0ZW0uY29tcG9uZW50L3Rvb2xiYXIuaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvdG9vbGJhci5jb21wb25lbnQvdG9vbGJhci5pdGVtLmNvbXBvbmVudC90b29sYmFyLml0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDQXpELGlDQU1DO0lBQ0MsdUJBTUM7O0lBQUEsNEJBQU07SUFBQSxZQUFXO0lBQ3BCLEFBRG9CLGlCQUFPLEVBQ2xCOzs7SUFUUCwrQ0FBbUI7SUFJakIsY0FBMkM7SUFFM0MsQUFEQSxBQURBLGdGQUEyQyw4Q0FDWixnQkFDaEI7SUFFVixlQUFXO0lBQVgsa0NBQVc7OztJQUVwQixpQ0FNQztJQUNDLHVCQUtDOztJQUFBLDRCQUFNO0lBQUEsWUFBVztJQUNwQixBQURvQixpQkFBTyxFQUNsQjs7O0lBUlAsK0NBQW1CO0lBSWpCLGNBQTJDO0lBQzNDLEFBREEsZ0ZBQTJDLDhDQUNaO0lBRTFCLGVBQVc7SUFBWCxrQ0FBVzs7O0lBRXBCLGlDQU1DO0lBQ0MsdUJBTUM7O0lBQUEsNEJBQU07SUFBQSxZQUFXO0lBQ3BCLEFBRG9CLGlCQUFPLEVBQ2xCOzs7SUFUUCwrQ0FBbUI7SUFJakIsY0FBMkM7SUFFM0MsQUFEQSxBQURBLGdGQUEyQyw4Q0FDWixnQkFDaEI7SUFFVixlQUFXO0lBQVgsa0NBQVc7O0FEbkNwQixNQUFNLE9BQU8sb0JBQW9CO0lBQ3RCLElBQUksR0FBVyxJQUFJLENBQUM7SUFDcEIsS0FBSyxDQUFTO0lBQ2QsSUFBSSxDQUFTO0lBQ2IsUUFBUSxDQUFVO0lBRTNCLFFBQVEsS0FBSSxDQUFDOzhHQU5GLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lDc0JqQyxBQWRBLEFBZkEsMkVBTUMsOERBZUEsOERBY0E7O1lBbENFLHdDQUFtQjtZQWVuQixjQUFtQjtZQUFuQix3Q0FBbUI7WUFjbkIsY0FBbUI7WUFBbkIsd0NBQW1COzs7aUZEdkJULG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLGNBQWM7Z0JBS2YsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSzs7a0ZBSkssb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Rvb2xiYXItaXRlbScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xiYXIuaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9vbGJhci5pdGVtLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAnbWQnO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGljb25mb250OiBib29sZWFuO1xyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gICpuZ0lmPVwidHlwZSA9PT0gJ2xnJ1wiXHJcbiAgb2gtYnV0dG9uXHJcbiAgb2hUeXBlPVwidGV4dFwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyLWJ0blwiXHJcbiAgdGl0bGU9XCJ7eyB0aXRsZSB9fVwiXHJcbj5cclxuICA8aVxyXG4gICAgb2gtaWNvblxyXG4gICAgW29oU3JjXT1cImljb25mb250ID8gJycgOiAoaWNvbiB8IGFzc2V0VXJsKVwiXHJcbiAgICBbb2hUeXBlXT1cImljb25mb250ID8gaWNvbiA6ICcnXCJcclxuICAgIFtvaFNpemVdPVwiJ2xnJ1wiXHJcbiAgPjwvaVxyXG4gID48c3Bhbj57eyB0aXRsZSB9fTwvc3Bhbj5cclxuPC9idXR0b24+XHJcbjxidXR0b25cclxuICAqbmdJZj1cInR5cGUgPT09ICdtZCdcIlxyXG4gIG9oLWJ1dHRvblxyXG4gIG9oVHlwZT1cInRleHRcIlxyXG4gIGNsYXNzPVwidG9vbGJhci1idG5cIlxyXG4gIHRpdGxlPVwie3sgdGl0bGUgfX1cIlxyXG4+XHJcbiAgPGlcclxuICAgIG9oLWljb25cclxuICAgIFtvaFNyY109XCJpY29uZm9udCA/ICcnIDogKGljb24gfCBhc3NldFVybClcIlxyXG4gICAgW29oVHlwZV09XCJpY29uZm9udCA/IGljb24gOiAnJ1wiXHJcbiAgPjwvaVxyXG4gID48c3Bhbj57eyB0aXRsZSB9fTwvc3Bhbj5cclxuPC9idXR0b24+XHJcbjxidXR0b25cclxuICAqbmdJZj1cInR5cGUgPT09ICdzbSdcIlxyXG4gIG9oLWJ1dHRvblxyXG4gIG9oVHlwZT1cInRleHRcIlxyXG4gIGNsYXNzPVwidG9vbGJhci1idG4tc21cIlxyXG4gIHRpdGxlPVwie3sgdGl0bGUgfX1cIlxyXG4+XHJcbiAgPGlcclxuICAgIG9oLWljb25cclxuICAgIFtvaFNyY109XCJpY29uZm9udCA/ICcnIDogKGljb24gfCBhc3NldFVybClcIlxyXG4gICAgW29oVHlwZV09XCJpY29uZm9udCA/IGljb24gOiAnJ1wiXHJcbiAgICBbb2hTaXplXT1cIid4cydcIlxyXG4gID48L2lcclxuICA+PHNwYW4+e3sgdGl0bGUgfX08L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=