import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class SubMenuComponent implements OnInit {
    private router;
    menuConfig: any[];
    itemClick: EventEmitter<any>;
    activeRouter: string;
    openNewTab(url: any): void;
    constructor(router: Router);
    ngOnInit(): void;
    onClick(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubMenuComponent, "submenu-comp", never, { "menuConfig": { "alias": "menuConfig"; "required": false; }; }, { "itemClick": "itemClick"; }, never, never, false, never>;
}
//# sourceMappingURL=menu.component.d.ts.map