import { HttpParams } from '@angular/common/http';
export declare class RequestOptions extends HttpParams {
    cache: boolean;
    ttl: number;
    errorPassing: boolean;
    noToken: boolean;
    constructor(cache?: boolean, ttl?: number, errorPassing?: boolean, noToken?: boolean);
}
//# sourceMappingURL=request-options.d.ts.map