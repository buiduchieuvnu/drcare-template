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
import { NewsComponent } from './components/news-component/news.component';
import { HeaderComponent } from './components/header-component/header.component';
import { SideBarComponent } from './components/sidebar-component/sidebar.component';
registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    NewsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonLibraryModule,
    OnehealthModule,
    OnehealthCoreModule,
    OHIconModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/admin' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
