import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from 'src/app/shared/logout/logout.component';
import { HelperService } from 'src/app/shared/services/helper.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  showItem:boolean = true
  constructor(private _Router :Router , public _HelperService:HelperService , public translate: TranslateService){
    let token = localStorage.getItem('userToken') ;
    if (!token) {
      this.showItem = false
    }else{
      this.showItem = true
    }
    // this._HelperService.translate.setDefaultLang('en')

  }
  onChangeLang(lang:string){
    this._HelperService.onChangeLang(lang)
    // console.log(this.translate.currentLang);
    
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
