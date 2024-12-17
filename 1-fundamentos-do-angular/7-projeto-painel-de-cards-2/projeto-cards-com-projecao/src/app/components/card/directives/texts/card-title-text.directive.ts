import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardTitleText]',
  host: { 'class': 'ca-c-card__title-text' }
})
export class CardTitleTextDirective {}
