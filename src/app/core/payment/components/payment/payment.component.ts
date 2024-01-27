import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder,UntypedFormBuilder, Validators } from '@angular/forms';


import {
  injectStripe,
  StripeElementsDirective,
  StripeCardComponent,
  StripeService
} from 'ngx-stripe';
import {
  StripeElementsOptions,
  StripeCardElementOptions
} from '@stripe/stripe-js';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
 
  constructor(private _formBuilder:FormBuilder,private stripeService:StripeService){

  }
  ngOnInit(): void {
   
    
  }
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  private readonly fb = inject(UntypedFormBuilder);

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  checkoutForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  // Replace with your own public key
  stripe = injectStripe('pk_test_51OTjURBQWp069pqTmqhKZHNNd3kMf9TTynJtLJQIJDOSYcGM7xz3DabzCzE7bTxvuYMY0IX96OHBjsysHEKIrwCK006Mu7mKw8');

  createToken() {
    const name ='eman';
    this.stripe
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
          
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secCtrl: ['', Validators.required],
    thirdCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    Ctrl1: ['', Validators.required],
    Ctrl2: ['', Validators.required],
    Ctrl3: ['', Validators.required],
  });
  isEditable = false;

  submit() {
    //  this.elements.submit()
  }

}
