import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'',redirectTo:'home' ,pathMatch:'full'},
    {path:'home',component:HomeComponent},
    
    {
      path:"users",loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
      },
      {
        path:"rooms",loadChildren: () => import('../rooms/rooms.module').then(m => m.RoomsModule)
        },
      {
        path:"bookings",loadChildren: () => import('../bookings/bookings.module').then(m => m.BookingsModule)
        },
      {
        path:"rooms",loadChildren: () => import('../ads/ads.module').then(m => m.AdsModule)
        },
      {
        path:"facilities",loadChildren: () => import('../facilities/facilities.module').then(m => m.FacilitiesModule)
        },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
