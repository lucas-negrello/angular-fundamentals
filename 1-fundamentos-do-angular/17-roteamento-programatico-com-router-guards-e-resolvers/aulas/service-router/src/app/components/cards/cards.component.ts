import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) {}

  navigateDebit(){
    this._router.navigate(['debit'], { relativeTo: this._route });
  }

  navigateCredit(){
    this._router.navigate(['credit'], { relativeTo: this._route });
  }
}
