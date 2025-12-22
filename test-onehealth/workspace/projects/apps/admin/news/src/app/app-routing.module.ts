import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { NewsComponent } from './components/news-component/news.component';
import { NewsListComponent } from './components/news-list-component/news-list.component';
import { NewsCategoryComponent } from './components/news-category-component/news-category.component';
import { NewsCreateComponent } from './components/news-create-component/news-create.component';
import { LoginAdminComponent } from './components/login-admin-component/login-admin.component';
import { LayoutAdminComponent } from './components/layout-admin-component/layout-admin.component';
import { AuthGuard } from './auth.guard';
import { NewsEditComponent } from './components/news-edit-component/news-edit.component';
import { HisComponent } from './components/his-component/his.component';
import { RegistrationComponent } from './components/registration-component/registration.component';
import { RegistrationListComponent } from './components/registration-list-component/registration-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginAdminComponent
  },
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
          { path: 'news-category', component: NewsCategoryComponent },
          { path: 'news-create', component: NewsCreateComponent },
          { path: 'edit/:id', component: NewsEditComponent }
        ]
      },

      { path: 'his', 
        component: HisComponent ,
        children: [
          
            { path: '', redirectTo:'tiepnhan', pathMatch: 'full' },
            { path: 'tiepnhan', component: RegistrationComponent },
            { path: 'ds-tiepnhan', component: RegistrationListComponent },
        ]

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
        