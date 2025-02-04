import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromisesService {

  constructor(private readonly _httpClient: HttpClient) { }

  // A promise faz toda logica, e ao final, executa o resolve()
  // Tem 3 estados: Pending, fulfilled, rejected (pode ir de pending para fulfill ou pending para reject)

  promiseSimples() {
    return new Promise((resolve, reject) => {
      console.log('promiseSimples'); // 1
      resolve('promiseResolved'); // 3
      console.log('finalPromise'); // 2
    })
  }

  promiseRejected() {
    return new Promise((resolve, reject) => {
      console.log('promiseRejected');
      reject(new Error('promiseRejected'));
    })
  }

  getUsers() {
    // first value from recebe apenas o primeiro valor (transforma um observable em uma promise)s
    return firstValueFrom(this._httpClient.get(`https://jsonplaceholder.typicode.com/users`));
  }

  getTodos() {
    return firstValueFrom(this._httpClient.get(`https://jsonplaceholder.typicode.com/todos`));
  }
  getUserTodos(userId: string) {
    return firstValueFrom(this._httpClient.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`));
  }
}
