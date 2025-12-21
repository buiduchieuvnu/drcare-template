import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { RegistrationComponent } from './components/registration-component/registration.component';
import { RegistrationListComponent } from './components/registration-list-component/registration-list.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent, pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration-list', component: RegistrationListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
        