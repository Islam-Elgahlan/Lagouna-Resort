import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from 'src/app/shared/logout/logout.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  showItem:boolean = true
  constructor(private _Router :Router){
    let token = localStorage.getItem('userToken') ;
    if (!token) {
      this.showItem = false
    }else{
      this.showItem = true
    }
  }
  logOut(){
    localStorage.clear();
    window.location.reload()

    // localStorage.removeItem('userToken');
    // localStorage.removeItem('role');
    // localStorage.removeItem('userName');
    // localStorage.removeItem('userEmail');
    }  
}
