import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'element-ref';

  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  constructor(private readonly _elementRef: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this._elementRef);
    const divEl = this._elementRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement;
    divEl.textContent = 'Sou a outra Div';
    divEl.classList.add('minha-outra-div');
    divEl.style.backgroundColor = 'blue';
    divEl.style.color = 'white';

    divEl.addEventListener('click', () => {
      console.log('Div clicada')
    });
  }

  ngAfterViewInit() {
    this.divEl.nativeElement.style.backgroundColor = 'orange';
    this.divEl.nativeElement.textContent = 'sou uma div';
    this.divEl.nativeElement.classList.add('minhaDiv');
  }

}
