import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare const OPERATIONS: {
    DELETE: string;
    SEARCH: string;
    UPDATE: string;
    DETAILS: string;
    CREATE: string;
    ADD: string;
    UPLOAD: string;
    DOWNLOAD: string;
    UPDATELOGO: string;
};
export declare class AppService {
    protected http: HttpClient;
    private resourceUrl;
    constructor(http: HttpClient);
    changeResourceUrl(url: string): void;
    create(entity: any, requestUrl: any): Observable<HttpResponse<any>>;
    update(entity: any, requestUrl: any): Observable<HttpResponse<any>>;
    find(id: number, requestUrl: any): Observable<HttpResponse<any>>;
    getById(id: number, requestUrl: any): Observable<HttpResponse<any>>;
    createRequestOption(req: any): import("@angular/common/http").HttpParams;
    query(req: any, requestUrl: any): Observable<HttpResponse<any>>;
    delete(id: number, requestUrl: any): Observable<HttpResponse<{}>>;
    deleteOption(req: any, requestUrl: any, option: any): Observable<HttpResponse<any>>;
    postOption(entity: any, requestUrl: any, option: any): Observable<HttpResponse<any>>;
    postByOption(requestUrl: any, option: any): Observable<HttpResponse<any>>;
    getOption(req: any, requestUrl: any, option: any): Observable<HttpResponse<any>>;
    getByOption(requestUrl: any, option: any): Observable<HttpResponse<any>>;
    putOption(entity: any, requestUrl: any, option: any): Observable<HttpResponse<any>>;
    uploadFile(fileToUpload: File, requestUrl: any, option: any): Observable<HttpResponse<any>>;
    get(requestUrl: any, option: any): Observable<HttpResponse<any>>;
    post(entity: any, requestUrl: any, option: any): Observable<HttpResponse<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppService>;
}
//# sourceMappingURL=app.service.d.ts.map