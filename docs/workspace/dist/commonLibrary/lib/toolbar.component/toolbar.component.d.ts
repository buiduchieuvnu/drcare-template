import { AfterViewInit, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { SubMenuModel } from '../models/menu.model';
import * as i0 from "@angular/core";
export declare class ToolbarComponent implements OnInit, AfterViewInit {
    private renderer;
    config: SubMenuModel[];
    fixAtTop: number;
    bgColor: string;
    isCollapse: boolean;
    screenSize: number;
    sliceNum: number;
    itemClick: EventEmitter<SubMenuModel>;
    onResize(event: any): void;
    toolbarCtn: ElementRef;
    toolbarWrp: ElementRef;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    calculateScreen(): void;
    tonggleCollapse(): void;
    onItemClick(item: SubMenuModel): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarComponent, "app-toolbar", never, { "config": { "alias": "config"; "required": false; }; "fixAtTop": { "alias": "fixAtTop"; "required": false; }; "bgColor": { "alias": "bgColor"; "required": false; }; "isCollapse": { "alias": "isCollapse"; "required": false; }; }, { "itemClick": "itemClick"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=toolbar.component.d.ts.map