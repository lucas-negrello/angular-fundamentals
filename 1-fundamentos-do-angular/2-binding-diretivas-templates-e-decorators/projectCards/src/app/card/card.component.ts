import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {

  private _planType: string = '';

  @Input() set planType(value: string){
    this._planType = value.toUpperCase();
  }
  get planType(){
    return this._planType;
  }





  @Input({required: true}) planPrice: number = 0;

  buttonClicked(event: boolean){
    alert('Button clicked! type: ' + event + '');
  }

}
