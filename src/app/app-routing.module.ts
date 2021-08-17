import { AuthGuard } from './guards/auth-guard.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact/edit/:id',
    component: ContactEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact/edit',
    component: ContactEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
