import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent {

  nome: string = '';
  idade: string = '';
  constructor(private readonly _route: ActivatedRoute) {}

  ngOnInit() {
    this.nome = this._route.snapshot.queryParams['name'];
    this.idade = this._route.snapshot.queryParams['age'];
  }

}
