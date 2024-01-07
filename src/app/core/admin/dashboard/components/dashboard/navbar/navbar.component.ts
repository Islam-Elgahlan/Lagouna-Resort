import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from 'src/app/core/auth/components/chabge-password/change-password.component';
import { LogoutComponent } from 'src/app/shared/logout/logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  userName: string = '';
  constructor(private dialog: MatDialog) {
    this.getUserName();
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
