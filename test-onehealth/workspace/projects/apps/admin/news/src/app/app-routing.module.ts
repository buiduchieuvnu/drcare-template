import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { NewsComponent } from './components/news-component/news.component';
import { CalendarComponent } from './components/calendar-component/calendar.component';
import { NewsListComponent } from './components/news-list-component/news-list.component';
import { NewsSectionComponent } from './components/news-section-component/news-section.component';
import { NewsCreateComponent } from './components/news-create-component/news-createcomponent';
import { LoginAdminComponent } from './components/login-admin-component/login-admin.component';
import { LayoutAdminComponent } from './components/layout-admin-component/layout-admincomponent';
import { AuthGuard } from './auth.guard';

// const routes: Routes = [
  // { path: '', component: NewsComponent, pathMatch: 'full' },
  // {
  //   path: 'news', component: NewsComponent,
  //   children: [
  //     { path: '', redirectTo: 'news-list', pathMatch: 'full' },
  //     { path: 'news-list', component: NewsListComponent },
  //     { path: 'news-section', component: NewsSectionComponent },
  //     { path: 'news-create', component: NewsCreateComponent },
  //   ]
  // },
  // { path: 'calendar', component: CalendarComponent },
  // { path: 'login', component: LoginAdminComponent },
  // ];
const routes: Routes = [

  // LOGIN
  {
    path: 'login',
    component: LoginAdminComponent
  },

  // ADMIN (BỊ GUARD)
  {
    path: '',
    component: LayoutAdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: NewsComponent, pathMatch: 'full' },

      {
        path: 'news',
        component: NewsComponent,
        children: [
          { path: '', redirectTo: 'news-list', pathMatch: 'full' },
          { path: 'news-list', component: NewsListComponent },
          { path: 'news-section', component: NewsSectionComponent },
          { path: 'news-create', component: NewsCreateComponent }
        ]
      },

      { path: 'calendar', component: CalendarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
        