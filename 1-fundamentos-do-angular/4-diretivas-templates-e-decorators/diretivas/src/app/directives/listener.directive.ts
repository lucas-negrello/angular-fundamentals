import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {

  @HostListener('click') onClick() {
    console.log('clicou');
  }

  @HostListener('keyup', ['$event', '"Meu Argumento"']) onKeyUp(event: KeyboardEvent, param2: string) {
    const fullText = (event.target as HTMLInputElement).value;

    console.log(fullText);
    console.log(param2);
  }

}
