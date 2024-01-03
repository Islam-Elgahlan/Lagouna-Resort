import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  hide: boolean = true;
  constructor(private _AuthService: AuthService) {}
  resetPasswordForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
    seed: new FormControl(null),
    confirmPassword: new FormControl(null),
  });
  resetPassword(data: FormGroup) {
    console.log(data.value);
    this._AuthService.onResetPassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {},
      complete: () => {},
    });
  }
}
