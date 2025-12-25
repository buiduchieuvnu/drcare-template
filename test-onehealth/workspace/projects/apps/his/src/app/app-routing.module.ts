import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { RegistrationComponent } from './components/registration-component/registration.component';
import { RegistrationListComponent } from './components/registration-list-component/registration-list.component';

const routes: Routes = [
  { path: '', redirectTo:'tiepnhan', pathMatch: 'full' },
  { path: 'tiepnhan', component: RegistrationComponent },
  { path: 'ds-tiepnhan', component: RegistrationListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
        