import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { RegistrationComponent } from './components/registration-component/registration.component';
import { RegistrationListComponent } from './components/registration-list-component/registration-list.component';
import { TreatmentHistoryComponent } from './components/treatment-history-component/treatment-history.component';
import { ServiceDesignationComponent } from './components/service-designation-component/service-designation.component';
import { UserManagementComponent } from './components/user-management-component/user-management.component';

const routes: Routes = [
  { path: '', redirectTo:'tiepnhan', pathMatch: 'full' },
  { path: 'tiepnhan', component: RegistrationComponent },
  { path: 'ds-tiepnhan', component: RegistrationListComponent},
  { path: 'lich-su-dieu-tri/:id', component: TreatmentHistoryComponent },
  { path: 'chi-dinh-dich-vu/:id', component: ServiceDesignationComponent},
  { path: 'quan-ly-nguoi-dung', component: UserManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
        