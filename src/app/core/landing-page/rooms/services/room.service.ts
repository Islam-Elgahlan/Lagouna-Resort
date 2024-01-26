import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _HttpClient:HttpClient) { }

  getAllRooms(data: any): Observable<any> {
    return this._HttpClient.get('portal/rooms/available',{params:data})
  }
  getRoombyId(id:string):Observable<any>{
    return this._HttpClient.get(`portal/rooms/${id}`)
  }
  createComment(data:any):Observable<any>{
    return this._HttpClient.post('portal/room-comments',data)
  }
  viewComment(id:string):Observable<any>{
    return this._HttpClient.get(`portal/room-comments/${id}`)
  }
  createReview(data:any):Observable<any>{
    return this._HttpClient.post('portal/room-reviews',data)
  }
  viewReview(id:string):Observable<any>{
    return this._HttpClient.get(`portal/room-reviews/${id}`)
  }
  createBooking(data:any):Observable<any>{
    return this._HttpClient.post('portal/booking',data)
  }

}
