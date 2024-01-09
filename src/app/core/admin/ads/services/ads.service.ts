import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(private _HttpClient: HttpClient) {}

  getAllAds(): Observable<any> {
    return this._HttpClient.get('admin/ads');
  }

  deleteAd(id:string):Observable<any>{
    return this._HttpClient.delete(`admin/ads/${id}`)
  }
}
