import { Directive } from '@angular/core';

@Directive({
  selector: `app-card-text-title, [appCardTextTitle]`,
  host: { 'class': 'ca-u-card-text-title' }
})
export class CardTextTitleDirective {

}
