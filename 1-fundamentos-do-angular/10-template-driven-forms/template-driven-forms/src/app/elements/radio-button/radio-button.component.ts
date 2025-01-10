import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  private _radioSelection: 'css' | 'html' | 'typescript' = 'html';
  get radioSelection() {
    return this._radioSelection;
  }
  set radioSelection(value: 'css' | 'html' | 'typescript') {
    this._radioSelection = value;
  }
}
