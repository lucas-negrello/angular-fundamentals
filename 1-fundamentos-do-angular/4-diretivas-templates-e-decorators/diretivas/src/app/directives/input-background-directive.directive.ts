import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirectiveDirective {

  @Input('bgColor') appInputBackground: string = 'white';
  @Input('tColor') textColor: string = 'black';

  @HostBinding('style.backgroundColor') bgColor: string = '';
  @HostBinding('style.color') color: string = '';

  @HostListener('focus') onFocus(): void {
    this.bgColor = this.appInputBackground;
    this.color = this.textColor;
  }

  @HostListener('blur') onBlur(): void {
    this.bgColor = 'white';
    this.color = 'black';
  }

}
