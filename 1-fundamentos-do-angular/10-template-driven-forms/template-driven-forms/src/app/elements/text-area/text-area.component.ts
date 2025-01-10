import {Component} from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent {
  private _initial: string = 'Valor inicial';
  get initial(): string { return this._initial; }
  set initial(value: string) { this._initial = value; }

  onChange(text: string) {
    this.initial = text.toLowerCase();
  }

  showText(){
    console.log(this.initial)
  }
}
