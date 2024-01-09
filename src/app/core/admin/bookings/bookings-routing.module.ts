import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsHomeComponent } from './components/bookings-home/bookings-home.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';

const routes: Routes = [
  {path:'',redirectTo:'bookingsHome',pathMatch:'full'},
  {path:'',component:BookingsHomeComponent},
  {path:'viewBooking',component:ViewBookingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
