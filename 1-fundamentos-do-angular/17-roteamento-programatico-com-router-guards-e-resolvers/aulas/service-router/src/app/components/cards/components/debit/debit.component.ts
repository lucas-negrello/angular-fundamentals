import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CardsList, UserCardsListService} from "../../../../services/user-cards-list.service";
import {Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './debit.component.html',
  styleUrl: './debit.component.scss'
})
export class DebitComponent {

  protected userDebitCardList: Observable<CardsList> = of([]);

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _userCardsListService: UserCardsListService,
  ) {}

  ngOnInit() {
    this.userDebitCardList = this._userCardsListService.getUserCardsByType('debito');
  }

  goToCard(id: number) {
    this._router.navigate(['../', id], { relativeTo: this._route });
  }

  // redirectCredit() {
  //   // this._router.navigate(['cards', 'credit'])
  //   this._router.navigate(['../credit'], { relativeTo: this._route });
  // }
}
