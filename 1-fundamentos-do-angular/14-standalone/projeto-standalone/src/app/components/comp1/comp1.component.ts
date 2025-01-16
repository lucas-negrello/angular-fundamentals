import { Component, inject } from '@angular/core';
import {NgIf} from "@angular/common";
import {TrimPipe} from "../../pipes/trim.pipe";
import {ChangeTextColorDirective} from "../../directives/change-text-color.directive";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [NgIf, TrimPipe, ChangeTextColorDirective],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {

  private readonly personService= inject(PersonService);
  constructor() {
    this.personService.getPerson().subscribe(person => console.log(person));
  }
}
