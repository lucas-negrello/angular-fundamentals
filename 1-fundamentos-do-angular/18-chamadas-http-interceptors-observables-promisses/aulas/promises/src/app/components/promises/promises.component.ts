import { Component } from '@angular/core';
import {PromisesService} from "./promises.service";

@Component({
  selector: 'app-promises',
  standalone: true,
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.scss'
})
export class PromisesComponent {

  constructor(private readonly _promisesService: PromisesService) {
  }

  ngOnInit() {

    console.log(1)

    this._promisesService.promiseSimples()
      .then((value) => console.log('then: ', value));
    // .then recebe a resposta do resolve

    this._promisesService.promiseRejected()
      .then()
      .catch((error) => console.log(error))
      .finally(() => console.log('finally'));
    // .catch recebe a resposta do reject
    // .finally é sempre executado
    // a promise é sempre assincrona
    // resolve todos codigos sincronos e depois o codigo assincrono

    console.log(2)
  }

  promiseAll() {
    // Só cai no .then caso todas executem com sucesso
    Promise.all([
      this._promisesService.getUsers(),
      this._promisesService.getTodos()
    ])
      .then(
      response => { console.log(response); },
    )
      .catch(error => console.log(error))
      .finally(() => console.log('finally'));
  }

  promiseRace() {
    // Executa apenas a promise mais rapida (primeira a retornar)
    // Se alguma deu erro, ele cai no catch
    Promise.race([
      this._promisesService.getUsers(),
      this._promisesService.getTodos()
    ])
      .then(
      response => { console.log(response); },
    )
      .catch(error => console.log(error))
      .finally(() => console.log('finally'));
  }

  promiseAny() {
    // Executa apenas a promise mais rapida (primeira a retornar)
    // Se alguma deu erro, ele ignora, e renderiza a mais rapida com sucesso
    Promise.any([
      this._promisesService.getUsers(),
      this._promisesService.getTodos()
    ])
      .then(
        response => { console.log(response); },
      )
      .catch(error => console.log(error))
      .finally(() => console.log('finally'));
  }

  promiseAllSettled(){
    // resolve as promises.
    // retorna um array com um objeto para cada promise, contendo o status (fulfilled, rejected) e o valor em value

    Promise.allSettled([
      this._promisesService.getUsers(),
      this._promisesService.getTodos()
    ])
      .then(
        response => { console.log(response); },
      )
      .catch(error => console.log(error))
      .finally(() => console.log('finally'));
  }

  async userTodos(){
    // especifica que deve ocorrer uma espera antes de continuar a execução
    // deve estar dentro de um tryCatch para pegar os erros da requisição
    // os codigos async sao executados de forma sincrona com o await

    try {
      console.log('user todos');
      const usersList: any[] = await this._promisesService.getUsers() as any[];
      const userTodos: any[] = await this._promisesService.getUserTodos(usersList[0].id) as any[];
      console.log('response user todos', userTodos)
    } catch (e) {
      console.log(e)
    }


    // this._promisesService.getUsers().then((response: any) => {
    //   this._promisesService.getUserTodos(response[0].id).then((userTodos) => {
    //     console.log(userTodos);
    //   })
    // })
  }
}

