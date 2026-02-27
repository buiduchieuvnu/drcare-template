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
import { DefaultComponent } from './components/default-component/default.component';
import { HealthComponent } from './components/health-component/health.component';
import { ContactComponent } from './components/contact-component/contact.component';
import { NewsComponent } from './components/news-component/news.component';
import { HeaderComponent } from './components/header-component/header.component';
import { FooterComponent } from './components/footer-component/footer.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about-component/about.component';
registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    FooterComponent,
    HealthComponent,
    ContactComponent,
    NewsComponent,
    AboutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CommonLibraryModule,
    OnehealthModule,
    OnehealthCoreModule,
    OHIconModule,
    FormsModule
  ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/tutorial' }
    { provide: APP_BASE_HREF, useValue: '/' }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
