import { SessionStorageService } from 'ngx-webstorage';
import * as i0 from "@angular/core";
export declare class StateStorageService {
    private $sessionStorage;
    private previousUrlKey;
    constructor($sessionStorage: SessionStorageService);
    storeUrl(url: string): void;
    getUrl(): string | null | undefined;
    clearUrl(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StateStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StateStorageService>;
}
//# sourceMappingURL=state-storage.service.d.ts.map