import { OHModalRef, OHModalService } from '@onehealth/ui/modal';
import * as i0 from "@angular/core";
export declare class ConfirmationService {
    private modal;
    constructor(modal: OHModalService);
    create(title: string, content: any, onOk: Function, onCancel: Function, btnOkText?: string, btnCancelText?: string): Promise<OHModalRef<any, any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmationService>;
}
//# sourceMappingURL=confirmation.service.d.ts.map