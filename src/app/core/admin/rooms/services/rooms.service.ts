import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRoom } from '../interfaces/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private _HttpClient:HttpClient) { }

  addRoom(data:any):Observable<any>{
    return this._HttpClient.post('admin/rooms',data)
  }

  getFacilities():Observable<any>{
    return this._HttpClient.get('admin/room-facilities')
  }
}
