import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private readonly _authService: AuthService, private readonly _router: Router) {
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
  })

  handleLogin(): void {
    this._authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: (response) => {
        this._router.navigate(['dashboard']);
        console.log(response)
      },
      error: (error) => {
        if(error.status === 401) {
          this.loginForm.setErrors({ invalidCredentials: true });
        } else {
          this.loginForm.setErrors({ generalError: true });
        }
      }
    })
  }

}
