import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private _HttpClient: HttpClient) {}

  getAllAds(data:any): Observable<any> {
    return this._HttpClient.get('admin/ads', {params:data});
  }
  addAds(data:any): Observable<any> {
    return this._HttpClient.post('admin/ads',data);
  }
  updateAds(id:string,data:any): Observable<any> {
    return this._HttpClient.put(`admin/ads/${id}`,data);
  }
 

  deleteAd(id:string):Observable<any>{
    return this._HttpClient.delete(`admin/ads/${id}`)
  }
}
