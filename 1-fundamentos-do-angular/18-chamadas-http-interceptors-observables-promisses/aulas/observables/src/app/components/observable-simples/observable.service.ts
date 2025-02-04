import {inject, Injectable} from '@angular/core';
import {map, Observable, Subscriber} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private readonly _httpClient: HttpClient = inject(HttpClient);

  obsSimples(): Observable<string> {
    return new Observable((observer: Subscriber<string>) => {
      observer.next('Obs Simples 1');
      setTimeout(() => {
        observer.next('Obs Simples 2');
      }, 3000);
      setTimeout(() => {
        observer.next('Obs Simples 3');
      }, 5000)
      observer.next('Obs Simples 4');

      //vai mandar (1, 4, 2, 3)
    })

    /*
    * Quando usamos o of(...), é como se estivessemos
    * criando uma instância de Observable e já emitindo
    * o next.
    * Normalmente é usado para criar dados Mockados e disparar valores.
    * */

    // return of('Obs Simples');
  }

  obsInterval(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {

      const interval = setInterval(() => {
        console.log('Enviando dados a cada 2s - Dentro do Observable')
        observer.next('Enviando dados a cada 2s - Dentro do .next');
      }, 2000);

      return () => {
        // Essa função é acionada quando o unsubscribe for chamado.
        console.log('Completa a subscription');
        // Apenas completar o observer não para o setInterval
        observer.complete();
        // Essa função para um interval
        clearInterval(interval);
      }
    })
  }

  // OPERADOR MAP
  getTodoInfos(id: number) {
    return this._httpClient.get(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
      map((todoResponse: any) => {
        return {
          id: todoResponse.id,
          title: todoResponse.title
        };
      })
    );
  }

  obs1() {
    return new Observable((observer: Subscriber<any>) => {
      observer.next('value 1');

      return () => {
        console.log('limpeza 1');
      }
    })
  }

  obs2() {
    return new Observable((observer: Subscriber<any>) => {
      observer.next('value 2');

      return () => {
        console.log('limpeza 2');
      }
    })
  }

}
