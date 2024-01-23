import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NavbarComponent,
    PaymentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule
  ]
})
export class PaymentModule { }
