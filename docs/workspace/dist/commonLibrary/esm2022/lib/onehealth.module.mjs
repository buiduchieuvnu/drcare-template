import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OHAffixModule } from '@onehealth/ui/affix';
import { OHAlertModule } from '@onehealth/ui/alert';
import { OHAnchorModule } from '@onehealth/ui/anchor';
import { OHAutocompleteModule } from '@onehealth/ui/auto-complete';
import { OHAvatarModule } from '@onehealth/ui/avatar';
import { OHBackTopModule } from '@onehealth/ui/back-top';
import { OHBadgeModule } from '@onehealth/ui/badge';
import { OHBreadCrumbModule } from '@onehealth/ui/breadcrumb';
import { OHButtonModule } from '@onehealth/ui/button';
import { OHCalendarModule } from '@onehealth/ui/calendar';
import { OHCardModule } from '@onehealth/ui/card';
import { OHCarouselModule } from '@onehealth/ui/carousel';
import { OHCascaderModule } from '@onehealth/ui/cascader';
import { OHCheckboxModule } from '@onehealth/ui/checkbox';
import { OHCollapseModule } from '@onehealth/ui/collapse';
import { OHCommentModule } from '@onehealth/ui/comment';
import { OHNoAnimationModule } from '@onehealth/ui/core/no-animation';
import { OHTransButtonModule } from '@onehealth/ui/core/trans-button';
import { OHWaveModule } from '@onehealth/ui/core/wave';
import { OHDatePickerModule } from '@onehealth/ui/date-picker';
import { OHDescriptionsModule } from '@onehealth/ui/descriptions';
import { OHDividerModule } from '@onehealth/ui/divider';
import { OHDrawerModule } from '@onehealth/ui/drawer';
import { OHDropDownModule } from '@onehealth/ui/dropdown';
import { OHEmptyModule } from '@onehealth/ui/empty';
import { OHFormModule } from '@onehealth/ui/form';
import { OHGridModule } from '@onehealth/ui/grid';
import { OHI18nModule } from '@onehealth/ui/i18n';
import { OH_ICONS, OHIconModule } from '@onehealth/ui/icon';
import { OHImageModule } from '@onehealth/ui/image';
import { OHInputModule } from '@onehealth/ui/input';
import { OHInputNumberModule } from '@onehealth/ui/input-number';
import { OHLayoutModule } from '@onehealth/ui/layout';
import { OHListModule } from '@onehealth/ui/list';
import { OHMentionModule } from '@onehealth/ui/mention';
import { OHMenuModule } from '@onehealth/ui/menu';
import { OHMessageModule } from '@onehealth/ui/message';
import { OHModalModule } from '@onehealth/ui/modal';
import { OHNotificationModule } from '@onehealth/ui/notification';
import { OHPageHeaderModule } from '@onehealth/ui/page-header';
import { OHPaginationModule } from '@onehealth/ui/pagination';
import { OHPopconfirmModule } from '@onehealth/ui/popconfirm';
import { OHPopoverModule } from '@onehealth/ui/popover';
import { OHProgressModule } from '@onehealth/ui/progress';
import { OHRadioModule } from '@onehealth/ui/radio';
import { OHRateModule } from '@onehealth/ui/rate';
import { OHResultModule } from '@onehealth/ui/result';
import { OHSelectModule } from '@onehealth/ui/select';
import { OHSkeletonModule } from '@onehealth/ui/skeleton';
import { OHSliderModule } from '@onehealth/ui/slider';
import { OHSpaceModule } from '@onehealth/ui/space';
import { OHSpinModule } from '@onehealth/ui/spin';
import { OHStatisticModule } from '@onehealth/ui/statistic';
import { OHStepsModule } from '@onehealth/ui/steps';
import { OHSwitchModule } from '@onehealth/ui/switch';
import { OHTableModule } from '@onehealth/ui/table';
import { OHTabsModule } from '@onehealth/ui/tabs';
import { OHTagModule } from '@onehealth/ui/tag';
import { OHTimePickerModule } from '@onehealth/ui/time-picker';
import { OHTimelineModule } from '@onehealth/ui/timeline';
import { OHToolTipModule } from '@onehealth/ui/tooltip';
import { OHTransferModule } from '@onehealth/ui/transfer';
import { OHTreeModule } from '@onehealth/ui/tree';
import { OHTreeViewModule } from '@onehealth/ui/tree-view';
import { OHTreeSelectModule } from '@onehealth/ui/tree-select';
import { OHTypographyModule } from '@onehealth/ui/typography';
import { OHUploadModule } from '@onehealth/ui/upload';
import { OHResizableModule } from '@onehealth/ui/resizable';
import { OHPipesModule } from '@onehealth/ui/pipes';
import { OHCodeEditorModule } from '@onehealth/ui/code-editor';
import { IconModule } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { OH_CONFIG } from '@onehealth/ui/core/config';
import { ConfirmationService } from './confirmation.service';
import { OHLogoModule } from '@onehealth/ui/logo';
import { OHFlexModule } from '@onehealth/ui/flex';
import { OHHashCodeModule } from '@onehealth/ui/hash-code';
import * as i0 from "@angular/core";
const antDesignIcons = AllIcons;
const icons = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);
const ngZorroConfig = {
    message: { ohTop: 10 },
    notification: { ohTop: 10 },
};
export class OnehealthModule {
    static ɵfac = function OnehealthModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OnehealthModule)(); };
    static ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: OnehealthModule });
    static ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            ConfirmationService,
            { provide: OH_CONFIG, useValue: ngZorroConfig },
            { provide: OH_ICONS, useValue: icons },
        ], imports: [HttpClientModule, IconModule, OHHashCodeModule,
            OHFlexModule,
            OHAffixModule,
            OHAlertModule,
            OHAnchorModule,
            OHAutocompleteModule,
            OHAvatarModule,
            OHBackTopModule,
            OHBadgeModule,
            OHButtonModule,
            OHBreadCrumbModule,
            OHCalendarModule,
            OHCardModule,
            OHCarouselModule,
            OHCascaderModule,
            OHCheckboxModule,
            OHCollapseModule,
            OHCommentModule,
            OHDatePickerModule,
            OHDescriptionsModule,
            OHDividerModule,
            OHDrawerModule,
            OHDropDownModule,
            OHEmptyModule,
            OHFormModule,
            OHGridModule,
            OHI18nModule,
            OHIconModule,
            OHImageModule,
            OHInputModule,
            OHInputNumberModule,
            OHLayoutModule,
            OHLogoModule,
            OHListModule,
            OHMentionModule,
            OHMenuModule,
            OHMessageModule,
            OHModalModule,
            OHNoAnimationModule,
            OHNotificationModule,
            OHPageHeaderModule,
            OHPaginationModule,
            OHPopconfirmModule,
            OHPopoverModule,
            OHProgressModule,
            OHRadioModule,
            OHRateModule,
            OHResultModule,
            OHSelectModule,
            OHSkeletonModule,
            OHSliderModule,
            OHSpaceModule,
            OHSpinModule,
            OHStatisticModule,
            OHStepsModule,
            OHSwitchModule,
            OHTableModule,
            OHTabsModule,
            OHTagModule,
            OHTimePickerModule,
            OHTimelineModule,
            OHToolTipModule,
            OHTransButtonModule,
            OHTransferModule,
            OHTreeModule,
            OHTreeViewModule,
            OHTreeSelectModule,
            OHTypographyModule,
            OHUploadModule,
            OHWaveModule,
            OHResizableModule,
            OHPipesModule,
            OHCodeEditorModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OnehealthModule, [{
        type: NgModule,
        args: [{
                imports: [HttpClientModule, IconModule],
                exports: [
                    OHHashCodeModule,
                    OHFlexModule,
                    OHAffixModule,
                    OHAlertModule,
                    OHAnchorModule,
                    OHAutocompleteModule,
                    OHAvatarModule,
                    OHBackTopModule,
                    OHBadgeModule,
                    OHButtonModule,
                    OHBreadCrumbModule,
                    OHCalendarModule,
                    OHCardModule,
                    OHCarouselModule,
                    OHCascaderModule,
                    OHCheckboxModule,
                    OHCollapseModule,
                    OHCommentModule,
                    OHDatePickerModule,
                    OHDescriptionsModule,
                    OHDividerModule,
                    OHDrawerModule,
                    OHDropDownModule,
                    OHEmptyModule,
                    OHFormModule,
                    OHGridModule,
                    OHI18nModule,
                    OHIconModule,
                    OHImageModule,
                    OHInputModule,
                    OHInputNumberModule,
                    OHLayoutModule,
                    OHLogoModule,
                    OHListModule,
                    OHMentionModule,
                    OHMenuModule,
                    OHMessageModule,
                    OHModalModule,
                    OHNoAnimationModule,
                    OHNotificationModule,
                    OHPageHeaderModule,
                    OHPaginationModule,
                    OHPopconfirmModule,
                    OHPopoverModule,
                    OHProgressModule,
                    OHRadioModule,
                    OHRateModule,
                    OHResultModule,
                    OHSelectModule,
                    OHSkeletonModule,
                    OHSliderModule,
                    OHSpaceModule,
                    OHSpinModule,
                    OHStatisticModule,
                    OHStepsModule,
                    OHSwitchModule,
                    OHTableModule,
                    OHTabsModule,
                    OHTagModule,
                    OHTimePickerModule,
                    OHTimelineModule,
                    OHToolTipModule,
                    OHTransButtonModule,
                    OHTransferModule,
                    OHTreeModule,
                    OHTreeViewModule,
                    OHTreeSelectModule,
                    OHTypographyModule,
                    OHUploadModule,
                    OHWaveModule,
                    OHResizableModule,
                    OHPipesModule,
                    OHCodeEditorModule,
                ],
                providers: [
                    ConfirmationService,
                    { provide: OH_CONFIG, useValue: ngZorroConfig },
                    { provide: OH_ICONS, useValue: icons },
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OnehealthModule, { imports: [HttpClientModule, IconModule], exports: [OHHashCodeModule,
        OHFlexModule,
        OHAffixModule,
        OHAlertModule,
        OHAnchorModule,
        OHAutocompleteModule,
        OHAvatarModule,
        OHBackTopModule,
        OHBadgeModule,
        OHButtonModule,
        OHBreadCrumbModule,
        OHCalendarModule,
        OHCardModule,
        OHCarouselModule,
        OHCascaderModule,
        OHCheckboxModule,
        OHCollapseModule,
        OHCommentModule,
        OHDatePickerModule,
        OHDescriptionsModule,
        OHDividerModule,
        OHDrawerModule,
        OHDropDownModule,
        OHEmptyModule,
        OHFormModule,
        OHGridModule,
        OHI18nModule,
        OHIconModule,
        OHImageModule,
        OHInputModule,
        OHInputNumberModule,
        OHLayoutModule,
        OHLogoModule,
        OHListModule,
        OHMentionModule,
        OHMenuModule,
        OHMessageModule,
        OHModalModule,
        OHNoAnimationModule,
        OHNotificationModule,
        OHPageHeaderModule,
        OHPaginationModule,
        OHPopconfirmModule,
        OHPopoverModule,
        OHProgressModule,
        OHRadioModule,
        OHRateModule,
        OHResultModule,
        OHSelectModule,
        OHSkeletonModule,
        OHSliderModule,
        OHSpaceModule,
        OHSpinModule,
        OHStatisticModule,
        OHStepsModule,
        OHSwitchModule,
        OHTableModule,
        OHTabsModule,
        OHTagModule,
        OHTimePickerModule,
        OHTimelineModule,
        OHToolTipModule,
        OHTransButtonModule,
        OHTransferModule,
        OHTreeModule,
        OHTreeViewModule,
        OHTreeSelectModule,
        OHTypographyModule,
        OHUploadModule,
        OHWaveModule,
        OHResizableModule,
        OHPipesModule,
        OHCodeEditorModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25laGVhbHRoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9vbmVoZWFsdGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FB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LGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT0hBZmZpeE1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvYWZmaXgnO1xyXG5pbXBvcnQgeyBPSEFsZXJ0TW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9hbGVydCc7XHJcbmltcG9ydCB7IE9IQW5jaG9yTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9hbmNob3InO1xyXG5pbXBvcnQgeyBPSEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvYXV0by1jb21wbGV0ZSc7XHJcbmltcG9ydCB7IE9IQXZhdGFyTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9hdmF0YXInO1xyXG5pbXBvcnQgeyBPSEJhY2tUb3BNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2JhY2stdG9wJztcclxuaW1wb3J0IHsgT0hCYWRnZU1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvYmFkZ2UnO1xyXG5pbXBvcnQgeyBPSEJyZWFkQ3J1bWJNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2JyZWFkY3J1bWInO1xyXG5pbXBvcnQgeyBPSEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvYnV0dG9uJztcclxuaW1wb3J0IHsgT0hDYWxlbmRhck1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvY2FsZW5kYXInO1xyXG5pbXBvcnQgeyBPSENhcmRNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2NhcmQnO1xyXG5pbXBvcnQgeyBPSENhcm91c2VsTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9jYXJvdXNlbCc7XHJcbmltcG9ydCB7IE9IQ2FzY2FkZXJNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2Nhc2NhZGVyJztcclxuaW1wb3J0IHsgT0hDaGVja2JveE1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBPSENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9jb2xsYXBzZSc7XHJcbmltcG9ydCB7IE9IQ29tbWVudE1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvY29tbWVudCc7XHJcbmltcG9ydCB7IE9ITm9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgT0hUcmFuc0J1dHRvbk1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvY29yZS90cmFucy1idXR0b24nO1xyXG5pbXBvcnQgeyBPSFdhdmVNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2NvcmUvd2F2ZSc7XHJcbmltcG9ydCB7IE9IRGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvZGF0ZS1waWNrZXInO1xyXG5pbXBvcnQgeyBPSERlc2NyaXB0aW9uc01vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvZGVzY3JpcHRpb25zJztcclxuaW1wb3J0IHsgT0hEaXZpZGVyTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9kaXZpZGVyJztcclxuaW1wb3J0IHsgT0hEcmF3ZXJNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2RyYXdlcic7XHJcbmltcG9ydCB7IE9IRHJvcERvd25Nb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgT0hFbXB0eU1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvZW1wdHknO1xyXG5pbXBvcnQgeyBPSEZvcm1Nb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2Zvcm0nO1xyXG5pbXBvcnQgeyBPSEdyaWRNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2dyaWQnO1xyXG5pbXBvcnQgeyBPSEkxOG5Nb2R1bGUsIE9ISTE4blNlcnZpY2UsIHZpX1ZOIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9pMThuJztcclxuaW1wb3J0IHsgT0hfSUNPTlMsIE9ISWNvbk1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvaWNvbic7XHJcbmltcG9ydCB7IE9ISW1hZ2VNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2ltYWdlJztcclxuaW1wb3J0IHsgT0hJbnB1dE1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvaW5wdXQnO1xyXG5pbXBvcnQgeyBPSElucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9pbnB1dC1udW1iZXInO1xyXG5pbXBvcnQgeyBPSExheW91dE1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvbGF5b3V0JztcclxuaW1wb3J0IHsgT0hMaXN0TW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9saXN0JztcclxuaW1wb3J0IHsgT0hNZW50aW9uTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9tZW50aW9uJztcclxuaW1wb3J0IHsgT0hNZW51TW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9tZW51JztcclxuaW1wb3J0IHsgT0hNZXNzYWdlTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9tZXNzYWdlJztcclxuaW1wb3J0IHsgT0hNb2RhbE1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvbW9kYWwnO1xyXG5pbXBvcnQgeyBPSE5vdGlmaWNhdGlvbk1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgT0hQYWdlSGVhZGVyTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9wYWdlLWhlYWRlcic7XHJcbmltcG9ydCB7IE9IUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IE9IUG9wY29uZmlybU1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvcG9wY29uZmlybSc7XHJcbmltcG9ydCB7IE9IUG9wb3Zlck1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvcG9wb3Zlcic7XHJcbmltcG9ydCB7IE9IUHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3Byb2dyZXNzJztcclxuaW1wb3J0IHsgT0hSYWRpb01vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvcmFkaW8nO1xyXG5pbXBvcnQgeyBPSFJhdGVNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3JhdGUnO1xyXG5pbXBvcnQgeyBPSFJlc3VsdE1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvcmVzdWx0JztcclxuaW1wb3J0IHsgT0hTZWxlY3RNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3NlbGVjdCc7XHJcbmltcG9ydCB7IE9IU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3NrZWxldG9uJztcclxuaW1wb3J0IHsgT0hTbGlkZXJNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3NsaWRlcic7XHJcbmltcG9ydCB7IE9IU3BhY2VNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3NwYWNlJztcclxuaW1wb3J0IHsgT0hTcGluTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9zcGluJztcclxuaW1wb3J0IHsgT0hTdGF0aXN0aWNNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3N0YXRpc3RpYyc7XHJcbmltcG9ydCB7IE9IU3RlcHNNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3N0ZXBzJztcclxuaW1wb3J0IHsgT0hTd2l0Y2hNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3N3aXRjaCc7XHJcbmltcG9ydCB7IE9IVGFibGVNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3RhYmxlJztcclxuaW1wb3J0IHsgT0hUYWJzTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS90YWJzJztcclxuaW1wb3J0IHsgT0hUYWdNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3RhZyc7XHJcbmltcG9ydCB7IE9IVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvdGltZS1waWNrZXInO1xyXG5pbXBvcnQgeyBPSFRpbWVsaW5lTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS90aW1lbGluZSc7XHJcbmltcG9ydCB7IE9IVG9vbFRpcE1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE9IVHJhbnNmZXJNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL3RyYW5zZmVyJztcclxuaW1wb3J0IHsgT0hUcmVlTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS90cmVlJztcclxuaW1wb3J0IHsgT0hUcmVlVmlld01vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvdHJlZS12aWV3JztcclxuaW1wb3J0IHsgT0hUcmVlU2VsZWN0TW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS90cmVlLXNlbGVjdCc7XHJcbmltcG9ydCB7IE9IVHlwb2dyYXBoeU1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvdHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IE9IVXBsb2FkTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS91cGxvYWQnO1xyXG5pbXBvcnQgeyBPSFJlc2l6YWJsZU1vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvcmVzaXphYmxlJztcclxuaW1wb3J0IHsgT0hQaXBlc01vZHVsZSB9IGZyb20gJ0BvbmVoZWFsdGgvdWkvcGlwZXMnO1xyXG5pbXBvcnQgeyBPSENvZGVFZGl0b3JNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2NvZGUtZWRpdG9yJztcclxuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIEljb25Nb2R1bGUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcclxuaW1wb3J0ICogYXMgQWxsSWNvbnMgZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XHJcbmltcG9ydCB7IE9IX0NPTkZJRywgT0hDb25maWcgfSBmcm9tICdAb25laGVhbHRoL3VpL2NvcmUvY29uZmlnJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlybWF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPSExvZ29Nb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2xvZ28nO1xyXG5pbXBvcnQgeyBPSEZsZXhNb2R1bGUgfSBmcm9tICdAb25laGVhbHRoL3VpL2ZsZXgnO1xyXG5pbXBvcnQgeyBPSEhhc2hDb2RlTW9kdWxlIH0gZnJvbSAnQG9uZWhlYWx0aC91aS9oYXNoLWNvZGUnO1xyXG5cclxuY29uc3QgYW50RGVzaWduSWNvbnMgPSBBbGxJY29ucyBhcyB7XHJcbiAgW2tleTogc3RyaW5nXTogSWNvbkRlZmluaXRpb247XHJcbn07XHJcbmNvbnN0IGljb25zOiBJY29uRGVmaW5pdGlvbltdID0gT2JqZWN0LmtleXMoYW50RGVzaWduSWNvbnMpLm1hcChcclxuICAoa2V5KSA9PiBhbnREZXNpZ25JY29uc1trZXldXHJcbik7XHJcbmNvbnN0IG5nWm9ycm9Db25maWc6IE9IQ29uZmlnID0ge1xyXG4gIG1lc3NhZ2U6IHsgb2hUb3A6IDEwIH0sXHJcbiAgbm90aWZpY2F0aW9uOiB7IG9oVG9wOiAxMCB9LFxyXG59O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbSHR0cENsaWVudE1vZHVsZSwgSWNvbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgT0hIYXNoQ29kZU1vZHVsZSxcclxuICAgIE9IRmxleE1vZHVsZSxcclxuICAgIE9IQWZmaXhNb2R1bGUsXHJcbiAgICBPSEFsZXJ0TW9kdWxlLFxyXG4gICAgT0hBbmNob3JNb2R1bGUsXHJcbiAgICBPSEF1dG9jb21wbGV0ZU1vZHVsZSxcclxuICAgIE9IQXZhdGFyTW9kdWxlLFxyXG4gICAgT0hCYWNrVG9wTW9kdWxlLFxyXG4gICAgT0hCYWRnZU1vZHVsZSxcclxuICAgIE9IQnV0dG9uTW9kdWxlLFxyXG4gICAgT0hCcmVhZENydW1iTW9kdWxlLFxyXG4gICAgT0hDYWxlbmRhck1vZHVsZSxcclxuICAgIE9IQ2FyZE1vZHVsZSxcclxuICAgIE9IQ2Fyb3VzZWxNb2R1bGUsXHJcbiAgICBPSENhc2NhZGVyTW9kdWxlLFxyXG4gICAgT0hDaGVja2JveE1vZHVsZSxcclxuICAgIE9IQ29sbGFwc2VNb2R1bGUsXHJcbiAgICBPSENvbW1lbnRNb2R1bGUsXHJcbiAgICBPSERhdGVQaWNrZXJNb2R1bGUsXHJcbiAgICBPSERlc2NyaXB0aW9uc01vZHVsZSxcclxuICAgIE9IRGl2aWRlck1vZHVsZSxcclxuICAgIE9IRHJhd2VyTW9kdWxlLFxyXG4gICAgT0hEcm9wRG93bk1vZHVsZSxcclxuICAgIE9IRW1wdHlNb2R1bGUsXHJcbiAgICBPSEZvcm1Nb2R1bGUsXHJcbiAgICBPSEdyaWRNb2R1bGUsXHJcbiAgICBPSEkxOG5Nb2R1bGUsXHJcbiAgICBPSEljb25Nb2R1bGUsXHJcbiAgICBPSEltYWdlTW9kdWxlLFxyXG4gICAgT0hJbnB1dE1vZHVsZSxcclxuICAgIE9ISW5wdXROdW1iZXJNb2R1bGUsXHJcbiAgICBPSExheW91dE1vZHVsZSxcclxuICAgIE9ITG9nb01vZHVsZSxcclxuICAgIE9ITGlzdE1vZHVsZSxcclxuICAgIE9ITWVudGlvbk1vZHVsZSxcclxuICAgIE9ITWVudU1vZHVsZSxcclxuICAgIE9ITWVzc2FnZU1vZHVsZSxcclxuICAgIE9ITW9kYWxNb2R1bGUsXHJcbiAgICBPSE5vQW5pbWF0aW9uTW9kdWxlLFxyXG4gICAgT0hOb3RpZmljYXRpb25Nb2R1bGUsXHJcbiAgICBPSFBhZ2VIZWFkZXJNb2R1bGUsXHJcbiAgICBPSFBhZ2luYXRpb25Nb2R1bGUsXHJcbiAgICBPSFBvcGNvbmZpcm1Nb2R1bGUsXHJcbiAgICBPSFBvcG92ZXJNb2R1bGUsXHJcbiAgICBPSFByb2dyZXNzTW9kdWxlLFxyXG4gICAgT0hSYWRpb01vZHVsZSxcclxuICAgIE9IUmF0ZU1vZHVsZSxcclxuICAgIE9IUmVzdWx0TW9kdWxlLFxyXG4gICAgT0hTZWxlY3RNb2R1bGUsXHJcbiAgICBPSFNrZWxldG9uTW9kdWxlLFxyXG4gICAgT0hTbGlkZXJNb2R1bGUsXHJcbiAgICBPSFNwYWNlTW9kdWxlLFxyXG4gICAgT0hTcGluTW9kdWxlLFxyXG4gICAgT0hTdGF0aXN0aWNNb2R1bGUsXHJcbiAgICBPSFN0ZXBzTW9kdWxlLFxyXG4gICAgT0hTd2l0Y2hNb2R1bGUsXHJcbiAgICBPSFRhYmxlTW9kdWxlLFxyXG4gICAgT0hUYWJzTW9kdWxlLFxyXG4gICAgT0hUYWdNb2R1bGUsXHJcbiAgICBPSFRpbWVQaWNrZXJNb2R1bGUsXHJcbiAgICBPSFRpbWVsaW5lTW9kdWxlLFxyXG4gICAgT0hUb29sVGlwTW9kdWxlLFxyXG4gICAgT0hUcmFuc0J1dHRvbk1vZHVsZSxcclxuICAgIE9IVHJhbnNmZXJNb2R1bGUsXHJcbiAgICBPSFRyZWVNb2R1bGUsXHJcbiAgICBPSFRyZWVWaWV3TW9kdWxlLFxyXG4gICAgT0hUcmVlU2VsZWN0TW9kdWxlLFxyXG4gICAgT0hUeXBvZ3JhcGh5TW9kdWxlLFxyXG4gICAgT0hVcGxvYWRNb2R1bGUsXHJcbiAgICBPSFdhdmVNb2R1bGUsXHJcbiAgICBPSFJlc2l6YWJsZU1vZHVsZSxcclxuICAgIE9IUGlwZXNNb2R1bGUsXHJcbiAgICBPSENvZGVFZGl0b3JNb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICB7IHByb3ZpZGU6IE9IX0NPTkZJRywgdXNlVmFsdWU6IG5nWm9ycm9Db25maWcgfSxcclxuICAgIHsgcHJvdmlkZTogT0hfSUNPTlMsIHVzZVZhbHVlOiBpY29ucyB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPbmVoZWFsdGhNb2R1bGUge31cclxuIl19