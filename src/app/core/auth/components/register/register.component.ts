import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  imgSrc:any;
  files: File[] = [];
  constructor(private _authService:AuthService){}
  registerForm= new FormGroup({
    userName:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-z]{3,10}[0-9]{1,5}$/)]),
      email:new FormControl(null,[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      country:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z]{2,20}$/)]),
      phoneNumber:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
      password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]),
      confirmPassword:new FormControl(null,[Validators.required]  ),
      // profileImage:new FormControl(null),
      role:new FormControl('user'),
    
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

  onSubmit(data:FormGroup){
    console.log(this.registerForm.value);

    let myData = new FormData;
    let myMap = new Map(Object.entries(data.value));
    for (const [key, value] of myMap) {
      myData.append(key, data.value[key]);
    }
    if (this.imgSrc == null) {
      // No Action
    } else {
      myData.append('profileImage', this.imgSrc, this.imgSrc.name);
    }
   console.log(myData);
   this._authService.handleRegister(myData).subscribe({
  next:(res)=>{
    console.log(res);  
    
  },error:(err)=>{

  },complete:()=> {
    
  },
})
    
  }
  

  onSelect(event:any) {
    console.log(event);
    
    this.imgSrc=event.addedFiles[0]
    console.log(this.imgSrc);
    this.files.push(...event.addedFiles);
    // this.registerForm.get('profileImage')?.setValue(this.imgSrc)
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
 
}
