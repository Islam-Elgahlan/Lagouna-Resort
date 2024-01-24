import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(private _formBuilder:FormBuilder){

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


}
