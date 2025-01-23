import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Todos} from "../interfaces/todos.interface";

@Injectable({
  providedIn: 'root'
})
export class TodosService extends BaseService<Todos>{
  protected override resource: string = 'todos';
}
