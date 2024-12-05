import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'template-variable';

  @ViewChild('meuInput') meuInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('minhaDiv') minhaDivElement!: ElementRef<HTMLDivElement>;

  updateInputText(){
    this.meuInputElement.nativeElement.value = 'Texto Atualizado!';
  }

  focus(){
    this.meuInputElement.nativeElement.focus();
  }

  mudarConteudo(){
    this.minhaDivElement.nativeElement.textContent = this.meuInputElement.nativeElement.value;
  }
}
