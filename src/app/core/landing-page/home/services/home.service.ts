import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooking } from '../interfaces/ibooking';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) { }
  getAllRooms():Observable<any>{
    return this._HttpClient.get('portal/rooms/available?page=1&size=10')
  }
  
  createNewBooking(data:IBooking):Observable<any>{
    return this._HttpClient.post('portal/booking',data)
  }
}
