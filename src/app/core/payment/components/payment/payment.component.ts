import { Component, OnInit, ViewChild } from '@angular/core';

import { StripeElementsOptions } from '@stripe/stripe-js';
import {
  injectStripe,
  StripeElementsDirective,
  StripeFactoryService,
  StripePaymentElementComponent
} from 'ngx-stripe';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
 
  constructor(private factoryService: StripeFactoryService){

  }
  ngOnInit(): void {
    console.log(this.elements);
    
  }
  @ViewChild(StripeElementsDirective) elements!: StripeElementsDirective;
  stripe = this.factoryService.create('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8');
  elementsOptions: StripeElementsOptions = {
    locale: 'en',
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51OTjURBQWp069pqTHSzxfJPfsXX8dYvBN4F87aAIeUTqNJI92ghD8kszmnIbIfT1QvdrV0MmYMmbHkW6JLWx0grr007BrQjaiF'
  };
  
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  //   secCtrl: ['', Validators.required],
  //   thirdCtrl: ['', Validators.required],
  // });
  // secondFormGroup = this._formBuilder.group({
  //   Ctrl1: ['', Validators.required],
  //   Ctrl2: ['', Validators.required],
  //   Ctrl3: ['', Validators.required],
  // });
  // isEditable = false;

  submit() {
    //  this.elements.submit()
  }

}
