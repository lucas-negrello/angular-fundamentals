import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  // Acessando o atributo class
  @HostBinding('attr.class') attrClass = 'meu-texto meu-size';

  // Acessando a propriedade class, passando uma string
  @HostBinding('className') className = 'meu-texto meu-size';

  // Acessando a propriedade class, passando um objeto
  @HostBinding('class') classObj = {
    'meu-texto': true,
    'meu-size': true
  };

  // Nunca acessar a propriedade ngClass, pode causar problemas

}
