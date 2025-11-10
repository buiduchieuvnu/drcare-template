import { OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ContexualActionBarComponent implements OnInit {
    left: TemplateRef<void>;
    right: TemplateRef<void>;
    fixAtTop: number;
    fixAtBottom: number;
    bgColor: string;
    constructor();
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContexualActionBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContexualActionBarComponent, "contexual-actionbar", never, { "left": { "alias": "left"; "required": false; }; "right": { "alias": "right"; "required": false; }; "fixAtTop": { "alias": "fixAtTop"; "required": false; }; "fixAtBottom": { "alias": "fixAtBottom"; "required": false; }; "bgColor": { "alias": "bgColor"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=action.bar.component.d.ts.map