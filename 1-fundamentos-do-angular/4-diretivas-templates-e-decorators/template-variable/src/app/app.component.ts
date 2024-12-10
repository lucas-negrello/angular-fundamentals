import {Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FilhoComponent} from "./filho/filho.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'template-variable';

  @ViewChild('meuInput') meuInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('minhaDiv') minhaDivElement!: ElementRef<HTMLDivElement>;
  @ViewChild('filhoComp') filhoCompElement!: FilhoComponent;

/* Primeira Aula

  updateInputText(){
    this.meuInputElement.nativeElement.value = 'Texto Atualizado!';
  }

  focus(){
    this.meuInputElement.nativeElement.focus();
  }
*/

/* Segunda Aula

  mudarConteudo(){
    this.minhaDivElement.nativeElement.textContent = this.meuInputElement.nativeElement.value;
  }
*/

/* Terceira Aula

  hello(){
    this.filhoCompElement.dizerOi();
    this.filhoCompElement.message = 'Eu disse OI'
  }
*/

/* Quarta Aula

  @ViewChild('meuInput') meuInput!: ElementRef<HTMLInputElement>;

  constructor() { // Executa primeiro
    console.log('Constructor');
  }

  ngOnInit() { // Executa após o contructor
    console.log('ngOnInit');
    // Daria erro pois o componente nao foi renderizado ainda.
    // this.meuInput.nativeElement.focus();

  }

  // Executa após todos binds serem resolvidos
  ngAfterViewInit() { // Executa após o ngOnInit
    console.log('ngAfterViewInit');
    this.meuInput.nativeElement.focus();

  }
*/

/* Quinta Aula

  buttonsList = [
    'Botao 1',
    'Botao 2',
    'Botao 3',
  ];

  @ViewChildren('meuButton') buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>

  ngAfterViewInit() {
    console.log(this.buttonsEl);

    // const primeiro = this.buttonsEl.toArray()[0];
    // primeiro.nativeElement.style.backgroundColor = 'blue';

    // Quando muda a estrutura do ViewChildren, atualiza os valores
    this.buttonsEl.changes.subscribe(result => {
      console.log(result);
    })
  }

  changeColor(event: Event){
    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'Orange';
    btnElement.style.color = 'white';
  }

  resetButtons() {
    this.buttonsEl.forEach(button => {
      button.nativeElement.style.color = 'black';
      button.nativeElement.style.backgroundColor = '';
    })
  }

  first(){

    // pegar com referencia a ordenação

    //   const primeiro = this.buttonsEl.get(0);
    //   console.log(primeiro);

    // pegar com referência a classe

    // const primeiro = this.buttonsEl.find((btn) => (
    //   btn.nativeElement.className === 'btn-0'
    // ));
    // console.log(primeiro);

    // pegar com referencia ao array

    const primeiro = this.buttonsEl.toArray()[0];

    console.log(primeiro)
  }

  remove(){
    this.buttonsList.shift();
  }
*/

}
