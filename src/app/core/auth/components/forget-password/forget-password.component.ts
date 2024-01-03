import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(
    private _AuthService :AuthService,
    private _Router :Router,
    private _ToastrService :ToastrService
    ){}
  forgetForm = new FormGroup({
    email: new FormControl(null,[Validators.required , Validators.email]),
  })
  onForget(data:FormGroup){
    this._AuthService.handleForget(data.value).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success(res.message)
        
      },error:(err)=>{
  
      },complete:()=> {
        this._Router.navigate(['auth/resetPassword'])
      },
    })
  }
}
