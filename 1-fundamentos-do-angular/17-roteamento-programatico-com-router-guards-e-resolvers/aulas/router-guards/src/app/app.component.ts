import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private readonly _authService: AuthService) {}

  login() {
    this._authService.login('user', 'user').subscribe(response => {
      console.log('Response login', response);
    })
  }

  verify() {
    this._authService.verifyToken().subscribe(response => {
      console.log('Response verifyToken', response);
    })
  }

  scopes() {
    console.log('Scopes',this._authService.getUserScopes());
  }
}
