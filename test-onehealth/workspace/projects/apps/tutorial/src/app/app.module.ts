import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, inject } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OnehealthCoreModule } from '@onehealth/core';
import { OnehealthUiMobileModule } from '@onehealth/mobile';
// import { IconHandler } from '@angular/core';

import localeVi from '@angular/common/locales/vi';
import { CommonLibraryModule, OnehealthModule  } from 'dist/commonLibrary';
import { DefaultComponent } from './components/default-component/default.component';
registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonLibraryModule,
    OnehealthUiMobileModule,
    OnehealthModule,
    // OnehealthCoreModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/tutorial' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
