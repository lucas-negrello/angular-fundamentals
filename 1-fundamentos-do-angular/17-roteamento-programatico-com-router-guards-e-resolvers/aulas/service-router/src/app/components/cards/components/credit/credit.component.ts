import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AsyncPipe} from "@angular/common";
import {CardsList, UserCardsListService} from "../../../../services/user-cards-list.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss'
})
export class CreditComponent {

  protected userCreditCardList: Observable<CardsList> = of([]);
  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _userCardsListService: UserCardsListService,
  ) {}

  ngOnInit() {
    this.userCreditCardList = this._userCardsListService.getUserCardsByType('credito');
  }

  goToCard(id: number) {
    this._router.navigate(['../', id], { relativeTo: this._route });
  }

  redirectDebit() {
    this._router.navigate(['../debit'], { relativeTo: this._route });
  }

}
