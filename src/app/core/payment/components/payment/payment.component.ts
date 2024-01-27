import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, UntypedFormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { ToastrService } from 'ngx-toastr';



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
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  bookingId: string = '';
  totalprice:number=0;
  totalWithtax:number=0;
  constructor(private _formBuilder: FormBuilder,
    private stripeService: StripeService,
    private _location: Location,
    private _ActivatedRoute: ActivatedRoute,
    private _PaymentService: PaymentService,
    private _ToastrService: ToastrService
  ) {
    this.bookingId = this._ActivatedRoute.snapshot.params['id'];
    //  console.log(this.bookingId);
    this.getBookingdetails(this.bookingId)

  }
  ngOnInit(): void {


  }
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
   @ViewChild(MatStepper) myStepper!: MatStepper;

  private readonly fb = inject(UntypedFormBuilder);

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        lineHeight:'58px',

        '::placeholder': {
          color: '#a99e9e'
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
    const name = 'eman';
    this.stripe
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
          this._PaymentService.payBooking(this.bookingId,result.token.id).subscribe({
            next:(res)=>{
              this.myStepper.next()
              this._ToastrService.success(res.message)
  
            }, error:(err) => {
            this._ToastrService.error(err.error.message,'first message')
          }})

        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
          this._ToastrService.error('Please enter a card number')
        }
      });
  }

  isEditable = false;
 getBookingdetails(Id:string){
  this._PaymentService.getBookingDetails(Id).subscribe({
    next:(res)=>{
      console.log(res.data.booking.totalPrice);
      this.totalprice=res.data.booking.totalPrice
      this.totalWithtax=this.totalprice+this.totalprice*.1;
    }
  })
 }

  cancel() {
    this._location.back()
  }

}
