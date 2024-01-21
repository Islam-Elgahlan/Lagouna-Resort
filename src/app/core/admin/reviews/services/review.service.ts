import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private _HttpClient: HttpClient) {}
  onGetRooms(data: any): Observable<any> {
    return this._HttpClient.get('portal/room-reviews/',{})
  }
}