import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input({required:true, alias:'text'}) buttonText: string = 'Button';
  @Input({required:true, alias:'style'}) buttonStyle: 'white' | 'purple' = 'white';
  @Input('disabled') isDisabled: boolean = false;
  @Output('clicked') buttonClicked = new EventEmitter<void>();

  onButtonClicked(){
    this.buttonClicked.emit();
  }

}
