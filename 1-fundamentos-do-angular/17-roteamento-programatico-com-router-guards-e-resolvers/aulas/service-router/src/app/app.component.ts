import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'service-router';

  constructor(private readonly _router: Router){}

  navigateInitial() {
    this._router.navigate(
      ['initial'],
      {
        queryParams: {
          isActive: true,
          isAdmin: false
        },
         queryParamsHandling: 'merge',
      });
  }

  navigateContacts() {
    this._router.navigate(['contacts']);
  }

  navigateInformations() {
    this._router.navigate(
      ['informations'],
      {
        queryParams: {
          name: 'Marcio',
          age: 30
        },
        queryParamsHandling: 'merge',
      });
  }

  navigateCards() {
    this._router.navigate(['cards']);
  }
}
