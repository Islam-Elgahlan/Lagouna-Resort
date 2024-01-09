import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookingsHomeComponent } from './components/bookings-home/bookings-home.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';


@NgModule({
  declarations: [
    BookingsHomeComponent,
    ViewBookingComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule
  ]
})
export class BookingsModule { }
