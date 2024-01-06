import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from 'src/app/shared/logout/logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userName:string=''
constructor(private _MatDialog:MatDialog){
  this.getUserName()
}

getUserName(){
this.userName=localStorage.getItem('userName')!
}

openLogOutDialogue(){
  const dialogRef = this._MatDialog.open(LogoutComponent, {
    
    width: '30%',
  });
  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
    
  });
}
}


