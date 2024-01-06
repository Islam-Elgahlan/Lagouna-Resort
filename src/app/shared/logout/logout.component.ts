import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
constructor(public DialogRef: MatDialogRef<LogoutComponent>,
  private _Router: Router){

}

  
  onLogout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    this._Router.navigate(['/auth']);
    this.DialogRef.close();
  }
  onNoClick(): void {
    this.DialogRef.close();
  }
}
