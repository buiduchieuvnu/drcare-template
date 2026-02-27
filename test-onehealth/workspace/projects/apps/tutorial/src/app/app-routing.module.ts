import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { DefaultComponent } from './components/default-component/default.component';
import { ContactComponent } from './components/contact-component/contact.component';
import { NewsComponent } from './components/news-component/news.component';
import { HealthComponent } from './components/health-component/health.component';
import { AboutComponent } from './components/about-component/about.component';

const routes: Routes = [
  { path: '', component: DefaultComponent, pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  // { path: '**', component: EmptyRouteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news/:id', component: NewsComponent },
  { path: 'health', component: HealthComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
        