import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
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
import {
  provideNgxWebstorage,
  withLocalStorage,
  withNgxWebstorageConfig,
  withSessionStorage,
} from 'ngx-webstorage';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
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
    provideNgxWebstorage(
      withNgxWebstorageConfig({
        prefix: 'jhi',
        separator: '-',
        caseSensitive: true,
      }),
      withLocalStorage(),
      withSessionStorage()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptedHttp,
      multi: true,
    },
  ],
})
export class CommonLibraryModule {
  public static forRoot(): ModuleWithProviders<CommonLibraryModule> {
    return {
      ngModule: CommonLibraryModule,
      providers: [AuthService, AuthGuardService],
    };
  }
}
