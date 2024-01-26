import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module'
import { NgxStripeModule } from 'ngx-stripe';

@NgModule({
  declarations: [
    NavbarComponent,
    PaymentComponent,
    HomeComponent,
  
  ],
  imports: [
    
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
    NgxStripeModule.forRoot('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8'),

  ]
})
export class PaymentModule {
  
 }
