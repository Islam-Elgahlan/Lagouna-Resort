import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  constructor(private _HttpClient: HttpClient) {}

  onGetAllBookings(data:any): Observable<any> {
    return this._HttpClient.get('admin/booking' , {params:data});
  }
  deleteBooking(id:string): Observable<any> {
    return this._HttpClient.delete(`admin/booking/${id}`);
  }
}
