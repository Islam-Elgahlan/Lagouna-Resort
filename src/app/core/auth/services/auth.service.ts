import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  handleRegister(data:any):Observable<any>{
return this._httpClient.post('portal/users',data)
  }
}
