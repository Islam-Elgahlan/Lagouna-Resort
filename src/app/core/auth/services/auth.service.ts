import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';
  constructor(private _httpClient: HttpClient) {
    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }

  getProfile() {
    let encoded: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encoded);
    localStorage.setItem('role', decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);
    this.getRole();
  }

  getRole() {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('role')
    ) {
      this.role = localStorage.getItem('role');
    }
  }
  login(data: any): Observable<any> {
    return this._httpClient.post('admin/users/login', data);
  }
  handleRegister(data: any): Observable<any> {
    return this._httpClient.post('portal/users', data);
  }

  onResetPassword(data: any): Observable<any> {
    return this._httpClient.post('portal/users/reset-password', data);

  }
  handleForget(data:string):Observable<any>{
return this._httpClient.post('portal/users/forgot-password',data)
  }
}
