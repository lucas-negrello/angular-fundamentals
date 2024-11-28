import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({required: true}) planType: string = '';
  @Input({required: true}) planPrice: number = 0;
  @Input('style') cardStyle: 'orange' | 'purple' = 'orange';
  @Output('clicked') buttonClickedEmit = new EventEmitter<void>();

  onButtonClicked(){
    this.buttonClickedEmit.emit();
  }

}
