import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private _HttpClient:HttpClient) { }
  getMyFavorites(): Observable<any> {
  
    return this._HttpClient.get('portal/favorite-rooms')
  }
  addFavorites(id:string): Observable<any> {
    return this._HttpClient.post('portal/favorite-rooms',{'roomId':id})
  }
  deleteFromFavorites(id:string): Observable<any> {
    return this._HttpClient.delete(`portal/favorite-rooms/${id}`,{body:{'roomId':id}})
  }
}
