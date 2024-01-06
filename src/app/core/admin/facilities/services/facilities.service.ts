import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  
  constructor(private _HttpClient: HttpClient) {}

  

  getFacilities():Observable<any>{
    return this._HttpClient.get('admin/room-facilities')
  }
  addFacility(data:any):Observable<any>{
    return this._HttpClient.post('admin/room-facilities' , {name: data})
  }
  updateFacility(data:any , id:number):Observable<any>{
    return this._HttpClient.put(`admin/room-facilities/${id}` , {name: data});
  }
}
