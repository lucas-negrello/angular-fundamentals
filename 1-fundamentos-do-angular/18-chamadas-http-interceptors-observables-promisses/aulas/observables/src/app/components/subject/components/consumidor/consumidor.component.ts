import { Component } from '@angular/core';
import {SubjectService} from "../../subject.service";
import {Observable, of} from 'rxjs';
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-consumidor',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './consumidor.component.html',
  styleUrl: './consumidor.component.scss'
})
export class ConsumidorComponent {

  valueChanged$: Observable<number> = of(0);
  constructor(private readonly _subjectService: SubjectService) {}

  ngOnInit() {
    this.valueChanged$ = this._subjectService.valueChanged();
  }

}
