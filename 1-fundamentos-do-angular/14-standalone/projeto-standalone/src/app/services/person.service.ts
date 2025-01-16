import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  getPerson() {
    return of({
      nome: 'Lucas',
      idade: 26
    })
  }
}
