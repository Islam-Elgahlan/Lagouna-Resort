import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoom } from '../interfaces/rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {

  constructor(private _HttpClient: HttpClient) {}

  addRoom(data:any):Observable<any>{
    return this._HttpClient.post('admin/rooms',data)
  }

  getFacilities():Observable<any>{
    return this._HttpClient.get('admin/room-facilities')
  }
  onGetRooms(data: any): Observable<any> {
    return this._HttpClient.get('admin/rooms',{params:data})
  }
  getRoombyId(id:string):Observable<any>{
    return this._HttpClient.get(`admin/rooms/${id}`)
  }
  updateRoom(id:string,data:any):Observable<any>{
    return this._HttpClient.put(`admin/rooms/${id}`,data)
  }
  deleteRoom(id:string):Observable<any>{
    return this._HttpClient.delete(`admin/rooms/${id}`)
  }
  
}
