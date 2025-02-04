import { Component } from '@angular/core';
import {ObservableService} from "./observable.service";
import {Subscription, switchMap, take} from "rxjs";

@Component({
  selector: 'app-observable-simples',
  standalone: true,
  imports: [],
  templateUrl: './observable-simples.component.html',
  styleUrl: './observable-simples.component.scss'
})
export class ObservableSimplesComponent {

  subs!: Subscription;
  subs2!: Subscription;


  constructor(private readonly _observableService: ObservableService) {}

  ngOnInit() {
    // Observable Simples
    /*
    this._observableService.obsSimples(); // cria uma nova instancia de observable
    this._observableService.obsSimples(); // cria uma nova instancia de observable
    this._observableService.obsSimples(); // cria uma nova instancia de observable
    this._observableService.obsSimples(); // cria uma nova instancia de observable
    this._observableService.obsSimples(); // cria uma nova instancia de observable
    // Ao final, teriamos 5 instancias de observable. Porem só criar uma instancia
    // não emite os valores daquele observable. É necessário se inscrever nele.
    this._observableService.obsSimples().subscribe((value) => {console.log(value)})
    */

    // Observable Timeout
    /*
    this.subs = this._observableService.obsInterval().subscribe(
      value => console.log(value)
    );
    */

    // Observable TodoList
    /*
    this._observableService.getTodoInfos(1).subscribe((response) => {
      console.log(response);
    });
    */

    // Switch Map
    /*
    this.subs2 = this._observableService.obs1().pipe(
      switchMap((valueObs1) => {
        // alguma lógica
        console.log(valueObs1);
        return this._observableService.obs2();
      })
    ).subscribe((value) => {
      console.log(value); // A subscription retorna o valor da última inscrição.
    });
    // O switchMap não faz o complete automaticamente, portanto, precisamos
    // nos desinscrever do observer
    */

    // Take

    this.subs2 = this._observableService.obs1().pipe(
      switchMap((valueObs1) => {
        // alguma lógica
        console.log(valueObs1);
        return this._observableService.obs2();
      }),
      take(1)
      // Recebe de parametros quantos emits serão enviados
      // até se desinscrever (após um emit ele se desinscreve)
      // Caso sejam mandados menos valores que o take, ele não vai
      // se desinscrever.
    ).subscribe((value) => {
      console.log(value);
    });

  }

  unsubscribeInterval(): void {
    this.subs?.unsubscribe();
  }

  unsubscribeSwitchMap(): void {
    this.subs2?.unsubscribe();
  }

}
