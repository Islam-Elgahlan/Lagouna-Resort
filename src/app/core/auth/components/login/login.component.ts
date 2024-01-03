import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private _AuthService :AuthService,
    private _Router :Router,
    private _ToastrService :ToastrService
    ){}
  loginForm = new FormGroup({
    email: new FormControl(null,[Validators.required , Validators.email]),
    password: new FormControl(null,[Validators.required , Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)])
  })
  onLogin(data:FormGroup){
    console.log(data.value)
    this._AuthService.login(data.value).subscribe((res)=>{
      localStorage.setItem('userToken', res.data.token);

      localStorage.setItem('role', res.data.user.role);
      // console.log(res.data.user.role);
      this._ToastrService.success(res.data.user.userName , 'message')

      this._Router.navigate(['/admin/dashboard'])

    },(error)=>{
      this._ToastrService.error(error.error.message , 'error')
    })
  }
}
