import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { DefaultComponent } from './components/default-component/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent, pathMatch: 'full' },
  { path: 'default', component: DefaultComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
