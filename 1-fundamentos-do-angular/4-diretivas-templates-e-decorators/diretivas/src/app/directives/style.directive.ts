import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  // Acessando o atributo style
  @HostBinding('attr.style') attrStyle = 'background-color: orange; color: white';

  // Acessando a propriedade style, passando uma string
  @HostBinding('style') propStyle = 'background-color: orange; color: white';

  // Acessando a propriedade style, passando um objeto
  @HostBinding('style') propStyleObj = {
    backgroundColor: 'orange',
    color: 'white'
  }

  // Acessando separadamente duas propriedades de style
  @HostBinding('style.backgroundColor') backgroundColor = 'orange';
  @HostBinding('style.color') color = 'white';

  // Nunca acessar a propriedade ngStyle, pode causar problemas

}
