import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OHIconModule } from '@onehealth/ui/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OnehealthCoreModule } from '@onehealth/core';

import localeVi from '@angular/common/locales/vi';
import { CommonLibraryModule, OnehealthModule } from 'dist/commonLibrary';
import { NewsComponent } from './components/news-component/news.component';
import { HeaderComponent } from './components/header-component/header.component';
import { SideBarComponent } from './components/sidebar-component/sidebar.component';
import { NewsListComponent } from './components/news-list-component/news-list.component';
import { NewsCategoryComponent } from './components/news-category-component/news-category.component';

import { OH_CONFIG, OHConfig } from '@onehealth/ui/core/config';
import { NewsCreateComponent } from './components/news-create-component/news-create.component';
import { LayoutAdminComponent } from './components/layout-admin-component/layout-admin.component';
import { LoginAdminComponent } from './components/login-admin-component/login-admin.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { NewsEditComponent } from './components/news-edit-component/news-edit.component';

import { HisFooterModule } from '@onehealth/ui/his-footer';
import { HisHeaderModule } from '@onehealth/ui/his-header';
import { HisMenuModule } from '@onehealth/ui/his-menu';
import { OHActionBarModule } from '@onehealth/ui/action-bar';
import { FooterComponent } from './components/footer-component/footer.component';
import { HisSideBarModule } from '@onehealth/ui/his-side-bar';
import { HeaderPanelComponent } from './components/head-panel/head-panel.component';

import { OHCkeditorModule } from '@onehealth/ui/ckeditor';
registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    NewsComponent,
    NewsListComponent,
    NewsCategoryComponent,
    NewsEditComponent,
    NewsCreateComponent,
    LayoutAdminComponent,
    LoginAdminComponent,
    FooterComponent,
    HeaderPanelComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonLibraryModule,
    OnehealthModule,
    OnehealthCoreModule,
    OHIconModule,
    OHCkeditorModule,
    FormsModule,
    ReactiveFormsModule,
    HisFooterModule,
    HisHeaderModule,
    HisMenuModule,
    OHActionBarModule,
    HisSideBarModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/admin' }
  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
