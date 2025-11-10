import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import * as i0 from "@angular/core";
export declare class UtilitiesService {
    private http;
    private localStorageService;
    constructor(http: HttpClient, localStorageService: LocalStorageService);
    viewDoc(data: any): Promise<Object>;
    restService(params: any): Promise<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UtilitiesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UtilitiesService>;
}
//# sourceMappingURL=utilities.service.d.ts.map