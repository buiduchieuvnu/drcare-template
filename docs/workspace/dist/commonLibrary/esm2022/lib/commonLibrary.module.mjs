import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BlankPageComponent } from './blank.page.component/blank.page.component';
import { AuthService } from './auth.service';
import { InterceptedHttp } from './http.interceptor';
import { ContexualActionBarComponent } from './contex.action.bar/action.bar.component';
import { ActionItemComponent } from './contex.action.bar/action.item.component/action.item.component';
import { DrawerContentComponent } from './drawer.content.component/drawer.content.component';
import { ActiveUrlCheckPipe } from './menu.pipes';
import { SubMenuComponent } from './menu.component/menu.component';
import { AssetUrlPipe } from './assert.pipe';
import { RouterModule } from '@angular/router';
import { OnehealthCoreModule } from '@onehealth/core';
import { ChangeDateTimePipe } from './changedatetime.pipe';
import { ToolbarComponent } from './toolbar.component/toolbar.component';
import { ToolbarItemComponent } from './toolbar.component/toolbar.item.component/toolbar.item.component';
import { CommonModule } from '@angular/common';
import { BottombarComponent } from './bottombar/bottombar.component';
import { AuthGuardService } from './router.guard';
import { OnehealthModule } from './onehealth.module';
import { provideNgxWebstorage, withLocalStorage, withNgxWebstorageConfig, withSessionStorage, } from 'ngx-webstorage';
import * as i0 from "@angular/core";
export class CommonLibraryModule {
    static forRoot() {
        return {
            ngModule: CommonLibraryModule,
            providers: [AuthService, AuthGuardService],
        };
    }
    static ɵfac = function CommonLibraryModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CommonLibraryModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CommonLibraryModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            provideNgxWebstorage(withNgxWebstorageConfig({
                prefix: 'jhi',
                separator: '-',
                caseSensitive: true,
            }), withLocalStorage(), withSessionStorage()),
            {
                provide: HTTP_INTERCEPTORS,
                useClass: InterceptedHttp,
                multi: true,
            },
        ], imports: [CommonModule, OnehealthModule, RouterModule, OnehealthCoreModule, OnehealthModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CommonLibraryModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    BlankPageComponent,
                    ContexualActionBarComponent,
                    ActionItemComponent,
                    DrawerContentComponent,
                    ActiveUrlCheckPipe,
                    SubMenuComponent,
                    AssetUrlPipe,
                    ChangeDateTimePipe,
                    ToolbarComponent,
                    ToolbarItemComponent,
                    BottombarComponent,
                ],
                imports: [CommonModule, OnehealthModule, RouterModule, OnehealthCoreModule],
                exports: [
                    BlankPageComponent,
                    ContexualActionBarComponent,
                    ActionItemComponent,
                    DrawerContentComponent,
                    ActiveUrlCheckPipe,
                    SubMenuComponent,
                    AssetUrlPipe,
                    ChangeDateTimePipe,
                    ToolbarComponent,
                    ToolbarItemComponent,
                    BottombarComponent,
                    OnehealthModule,
                ],
                providers: [
                    provideNgxWebstorage(withNgxWebstorageConfig({
                        prefix: 'jhi',
                        separator: '-',
                        caseSensitive: true,
                    }), withLocalStorage(), withSessionStorage()),
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: InterceptedHttp,
                        multi: true,
                    },
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CommonLibraryModule, { declarations: [BlankPageComponent,
        ContexualActionBarComponent,
        ActionItemComponent,
        DrawerContentComponent,
        ActiveUrlCheckPipe,
        SubMenuComponent,
        AssetUrlPipe,
        ChangeDateTimePipe,
        ToolbarComponent,
        ToolbarItemComponent,
        BottombarComponent], imports: [CommonModule, OnehealthModule, RouterModule, OnehealthCoreModule], exports: [BlankPageComponent,
        ContexualActionBarComponent,
        ActionItemComponent,
        DrawerContentComponent,
        ActiveUrlCheckPipe,
        SubMenuComponent,
        AssetUrlPipe,
        ChangeDateTimePipe,
        ToolbarComponent,
        ToolbarItemComponent,
        BottombarComponent,
        OnehealthModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uTGlicmFyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9jb21tb25MaWJyYXJ5L3NyYy9saWIvY29tbW9uTGlicmFyeS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDekcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFN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bSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCbGFua1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2JsYW5rLnBhZ2UuY29tcG9uZW50L2JsYW5rLnBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEludGVyY2VwdGVkSHR0cCB9IGZyb20gJy4vaHR0cC5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IENvbnRleHVhbEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4vY29udGV4LmFjdGlvbi5iYXIvYWN0aW9uLmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXguYWN0aW9uLmJhci9hY3Rpb24uaXRlbS5jb21wb25lbnQvYWN0aW9uLml0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRHJhd2VyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vZHJhd2VyLmNvbnRlbnQuY29tcG9uZW50L2RyYXdlci5jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGl2ZVVybENoZWNrUGlwZSB9IGZyb20gJy4vbWVudS5waXBlcyc7XHJcbmltcG9ydCB7IFN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUuY29tcG9uZW50L21lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXNzZXRVcmxQaXBlIH0gZnJvbSAnLi9hc3NlcnQucGlwZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9uZWhlYWx0aENvcmVNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEYXRlVGltZVBpcGUgfSBmcm9tICcuL2NoYW5nZWRhdGV0aW1lLnBpcGUnO1xyXG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLmNvbXBvbmVudC90b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvb2xiYXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyLmNvbXBvbmVudC90b29sYmFyLml0ZW0uY29tcG9uZW50L3Rvb2xiYXIuaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCb3R0b21iYXJDb21wb25lbnQgfSBmcm9tICcuL2JvdHRvbWJhci9ib3R0b21iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0aEd1YXJkU2VydmljZSB9IGZyb20gJy4vcm91dGVyLmd1YXJkJztcclxuaW1wb3J0IHsgT25laGVhbHRoTW9kdWxlIH0gZnJvbSAnLi9vbmVoZWFsdGgubW9kdWxlJztcclxuaW1wb3J0IHtcclxuICBwcm92aWRlTmd4V2Vic3RvcmFnZSxcclxuICB3aXRoTG9jYWxTdG9yYWdlLFxyXG4gIHdpdGhOZ3hXZWJzdG9yYWdlQ29uZmlnLFxyXG4gIHdpdGhTZXNzaW9uU3RvcmFnZSxcclxufSBmcm9tICduZ3gtd2Vic3RvcmFnZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCbGFua1BhZ2VDb21wb25lbnQsXHJcbiAgICBDb250ZXh1YWxBY3Rpb25CYXJDb21wb25lbnQsXHJcbiAgICBBY3Rpb25JdGVtQ29tcG9uZW50LFxyXG4gICAgRHJhd2VyQ29udGVudENvbXBvbmVudCxcclxuICAgIEFjdGl2ZVVybENoZWNrUGlwZSxcclxuICAgIFN1Yk1lbnVDb21wb25lbnQsXHJcbiAgICBBc3NldFVybFBpcGUsXHJcbiAgICBDaGFuZ2VEYXRlVGltZVBpcGUsXHJcbiAgICBUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgVG9vbGJhckl0ZW1Db21wb25lbnQsXHJcbiAgICBCb3R0b21iYXJDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPbmVoZWFsdGhNb2R1bGUsIFJvdXRlck1vZHVsZSwgT25laGVhbHRoQ29yZU1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQmxhbmtQYWdlQ29tcG9uZW50LFxyXG4gICAgQ29udGV4dWFsQWN0aW9uQmFyQ29tcG9uZW50LFxyXG4gICAgQWN0aW9uSXRlbUNvbXBvbmVudCxcclxuICAgIERyYXdlckNvbnRlbnRDb21wb25lbnQsXHJcbiAgICBBY3RpdmVVcmxDaGVja1BpcGUsXHJcbiAgICBTdWJNZW51Q29tcG9uZW50LFxyXG4gICAgQXNzZXRVcmxQaXBlLFxyXG4gICAgQ2hhbmdlRGF0ZVRpbWVQaXBlLFxyXG4gICAgVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFRvb2xiYXJJdGVtQ29tcG9uZW50LFxyXG4gICAgQm90dG9tYmFyQ29tcG9uZW50LFxyXG4gICAgT25laGVhbHRoTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBwcm92aWRlTmd4V2Vic3RvcmFnZShcclxuICAgICAgd2l0aE5neFdlYnN0b3JhZ2VDb25maWcoe1xyXG4gICAgICAgIHByZWZpeDogJ2poaScsXHJcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXHJcbiAgICAgICAgY2FzZVNlbnNpdGl2ZTogdHJ1ZSxcclxuICAgICAgfSksXHJcbiAgICAgIHdpdGhMb2NhbFN0b3JhZ2UoKSxcclxuICAgICAgd2l0aFNlc3Npb25TdG9yYWdlKClcclxuICAgICksXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogSW50ZXJjZXB0ZWRIdHRwLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbkxpYnJhcnlNb2R1bGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbW1vbkxpYnJhcnlNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDb21tb25MaWJyYXJ5TW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgQXV0aEd1YXJkU2VydmljZV0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=