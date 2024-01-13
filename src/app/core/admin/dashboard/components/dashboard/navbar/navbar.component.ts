import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from 'src/app/core/auth/components/chabge-password/change-password.component';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { LogoutComponent } from 'src/app/shared/logout/logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{
  userName: string = '';
  
  constructor(private dialog: MatDialog) {
    
  }
ngOnInit(): void {
  this.getUserName()
}
  getUserName() {
    this.userName = localStorage.getItem('userName')!;
  }
  openLogOutDialogue() {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '30%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {},
      width: '40%',
    });
  }
}
