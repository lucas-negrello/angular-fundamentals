import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) value: string = '';
}
