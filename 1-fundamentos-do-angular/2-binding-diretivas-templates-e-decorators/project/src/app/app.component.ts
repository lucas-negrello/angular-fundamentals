import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  inputText = 'Texto dinâmico';
  type = 'text';
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  textType() {
    this.type = 'text';
  }

  passwordType() {
    this.type = 'password';
  }

  value1() {
    this.inputText = 'value 1'
  }

  value2() {
    this.inputText = 'value 2'
  }

  log = ()=>{console.log(this.inputText)}

  handleKeyUp(event: KeyboardEvent) {
    const currentText = event.target as HTMLInputElement;
    // console.log(currentText.value);
  }

  handleInput(event: Event) {
    const currentText = event.target as HTMLInputElement;
    console.log(currentText.value)
  }

}
