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
import { OHI18nModule, OHI18nService, vi_VN } from '@onehealth/ui/i18n';
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
import { IconDefinition, IconModule } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { OH_CONFIG, OHConfig } from '@onehealth/ui/core/config';
import { ConfirmationService } from './confirmation.service';
import { OHLogoModule } from '@onehealth/ui/logo';
import { OHFlexModule } from '@onehealth/ui/flex';
import { OHHashCodeModule } from '@onehealth/ui/hash-code';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);
const ngZorroConfig: OHConfig = {
  message: { ohTop: 10 },
  notification: { ohTop: 10 },
};

@NgModule({
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
})
export class OnehealthModule {}
