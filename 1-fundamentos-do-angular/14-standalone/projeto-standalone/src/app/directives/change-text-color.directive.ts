import {Directive, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appChangeTextColor]',
  standalone: true
})
export class ChangeTextColorDirective implements OnChanges {

  @Input() appChangeTextColor: string = '';
  @HostBinding('style.color') elColor: string = 'black';
  ngOnChanges(changes: SimpleChanges): void {
    this.elColor = this.appChangeTextColor;
  }
}
