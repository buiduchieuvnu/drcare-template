import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OHIconModule } from '@onehealth/ui/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OnehealthCoreModule } from '@onehealth/core';

import localeVi from '@angular/common/locales/vi';
import { CommonLibraryModule, OnehealthModule  } from 'dist/commonLibrary';
import { NewsComponent } from './components/news-component/news.component';
import { HeaderComponent } from './components/header-component/header.component';
import { SideBarComponent } from './components/sidebar-component/sidebar.component';
import { NewsListComponent } from './components/news-list-component/news-list.component';
import { NewsSectionComponent } from './components/news-section-component/news-section.component';

import { OH_CONFIG, OHConfig } from '@onehealth/ui/core/config';
import { NewsCreateComponent } from './components/news-create-component/news-createcomponent';
registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    NewsComponent,
    NewsListComponent,
    NewsSectionComponent,
    NewsCreateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonLibraryModule,
    OnehealthModule,
    OnehealthCoreModule,
    OHIconModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/admin' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
