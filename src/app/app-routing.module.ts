import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { adminGuard } from './core/Guards/admin.guard';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule)
  },
  {

    path: 'admin',
    canActivate:[adminGuard],
    loadChildren: () => import('./core/admin/admin.module').then(m => m.AdminModule)
  },
  {

    path: 'payment',
  
    loadChildren: () => import('./core/payment/payment.module').then(m => m.PaymentModule)
  },
  {path:'**',component:NotfoundComponent}
];
const RouterOptions:ExtraOptions = {
  scrollPositionRestoration:'enabled',
  anchorScrolling:'enabled'
}
@NgModule({
  imports: [RouterModule.forRoot(routes,RouterOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
