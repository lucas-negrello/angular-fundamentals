import {Component, inject, Input} from '@angular/core';
import {TodosService} from "../../../../services/todos.service";
import {Observable, of} from "rxjs";
import {Todos} from "../../../../interfaces/todos.interface";
import {ActivatedRoute} from "@angular/router";
import {AsyncPipe} from "@angular/common";
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  private readonly _todosService: TodosService = inject(TodosService);
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  protected todosList$: Observable<Todos[]> = of([]);

  private _userId: string = '';

  @Input()
  set userId(value: string) {
    this._userId = value;
  }
  get userId(): string {
    return this._userId;
  }

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(params => {
      this.userId = params['userId'];
    })
    this.todosList$ = this._todosService.search(`userId=${this.userId}`);
  }

}
