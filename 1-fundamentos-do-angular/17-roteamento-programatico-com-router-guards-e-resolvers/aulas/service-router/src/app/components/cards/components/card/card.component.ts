import {Component, Input} from '@angular/core';
import {Observable, of} from "rxjs";
import {CardsList, ICard, UserCardsListService} from "../../../../services/user-cards-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  userCard: Observable<ICard | undefined> = of({} as ICard)

  @Input() set cardId(value: string) {
    this.userCard =  this._userCardsListService.getUserCardById(+value);
  }

  constructor(
    private readonly _userCardsListService: UserCardsListService,
  ) {}

}
