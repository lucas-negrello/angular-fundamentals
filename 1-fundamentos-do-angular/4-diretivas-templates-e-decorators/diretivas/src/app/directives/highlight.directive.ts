import {Directive, HostBinding, HostListener} from "@angular/core";


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // Acessando a propriedade de background color em styles
  // de t0do elemento que usar essa diretiva
  @HostBinding('style.background-color') bgColor = 'transparent';

  // Acessa um mét0do do elemento, modificando ou acionando
  // alguma função/propriedade de t0do elemento que usar a diretiva
  @HostListener('mouseover') onMouseOver() {
    this.bgColor = 'orange';
  }

  @HostListener('mouseout') onMouseOut() {
    this.bgColor = 'transparent';
  }
}
