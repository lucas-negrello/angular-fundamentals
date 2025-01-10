import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  private _isActive: boolean = false;
  get isActive() {
    return this._isActive;
  }
  set isActive(value: boolean) {
    this._isActive = value;
  }

}
