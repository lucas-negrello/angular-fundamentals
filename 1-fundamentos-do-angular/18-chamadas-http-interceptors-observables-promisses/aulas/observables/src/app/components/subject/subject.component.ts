import { Component } from '@angular/core';
import {SubjectService} from "./subject.service";
import {ConsumidorComponent} from "./components/consumidor/consumidor.component";

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [
    ConsumidorComponent
  ],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {

  showConsumidor: boolean = false;
  constructor(
    private readonly _subjectService: SubjectService
  ) {}

  dispararObs(number: number) {
    this._subjectService.emitValue(number);
  }
}
