import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { IUser } from '../../../users/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  userId: string = '';
  userData!:IUser
constructor(private _AuthService:AuthService){}
ngOnInit(): void {
  this.userId=localStorage.getItem('Id')!;
  this.getCurrentprofile(this.userId)
}
getCurrentprofile(id:string){
 
  this._AuthService.getCurrentProfile(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.userData=res.data.user
    }
  })
  }
}
