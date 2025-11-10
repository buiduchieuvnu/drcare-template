import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
export declare class AuthGuardService implements CanActivate {
    auth: AuthService;
    constructor(auth: AuthService);
    canActivate(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuardService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuardService>;
}
//# sourceMappingURL=router.guard.d.ts.map