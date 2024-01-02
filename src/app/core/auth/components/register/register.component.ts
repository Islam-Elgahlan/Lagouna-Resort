import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(){}
  registerForm= new FormGroup({
    userName:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-z]{3,10}[0-9]{1,5}$/)]),
      email:new FormControl(null,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      country:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z]{2,20}$/)]),
      phoneNumber:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
      password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
      confirmPassword:new FormControl(null,[Validators.required]  ),
      profileImage:new FormControl(null,[Validators.required])
    
      },  {validators:this.creatConfirmation})
  
  creatConfirmation(form:any){
let pswrd=form?.get('password');
let confirmPswrd=form?.get('confirmPassword');
if (pswrd?.value == confirmPswrd?.value) {
  return null
} else {
  confirmPswrd?.setErrors({invalid:'notMatch'});
  return {invalid:'notMatch'}
}

  }
}
