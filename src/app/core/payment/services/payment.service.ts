import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }



  payBooking(bookingId:string,tok:string):Observable<any>{
return this._HttpClient.post(`portal/booking/${bookingId}/pay`,{'token':tok})
  }
}
