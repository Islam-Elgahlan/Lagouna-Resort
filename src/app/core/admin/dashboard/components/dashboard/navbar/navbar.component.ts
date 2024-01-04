import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName:string=''
constructor(){
  this.getUserName()
}

getUserName(){
this.userName=localStorage.getItem('userName')!
}
}
