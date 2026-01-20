import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, inject } from '@angular/core';
import { OHIconModule } from '@onehealth/ui/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OnehealthCoreModule } from '@onehealth/core';

import localeVi from '@angular/common/locales/vi';
import { CommonLibraryModule, OnehealthModule  } from 'dist/commonLibrary';
import { RegistrationComponent } from './components/registration-component/registration.component';
import { HeaderComponent } from './components/header-component/header.component';
import { FooterComponent } from './components/footer-component/footer.component';
import { RegistrationListComponent } from './components/registration-list-component/registration-list.component';
import { FormsModule } from '@angular/forms';
import { HisFooterModule } from '@onehealth/ui/his-footer';
import { HisHeaderModule } from '@onehealth/ui/his-header';
import { HisMenuModule } from '@onehealth/ui/his-menu';
import { OHActionBarModule } from '@onehealth/ui/action-bar';
import { SideBarComponent } from './components/sidebar-component/sidebar.component';
import { HisSideBarModule } from '@onehealth/ui/his-side-bar';
import { HeaderPanelComponent } from './components/head-panel/head-panel.component';
import { TreatmentHistoryComponent } from './components/treatment-history-component/treatment-history.component';
import { ServiceDesignationComponent } from './components/service-designation-component/service-designation.component';
import { HisActionBarModule } from '@onehealth/ui/his-action-bar';
import { UserManagementComponent } from './components/user-management-component/user-management.component';
import { ListUserComponent } from './components/list-user-component/list-user.component';
registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    RegistrationListComponent,
    SideBarComponent,
    HeaderPanelComponent,
    TreatmentHistoryComponent,
    ServiceDesignationComponent,
    UserManagementComponent,
    ListUserComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonLibraryModule,
    OnehealthModule,
    OnehealthCoreModule,
    OHIconModule,
    FormsModule,
    HisFooterModule,
    HisHeaderModule,
    HisMenuModule,
    OHActionBarModule,
    HisSideBarModule,
    HisActionBarModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/his' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
