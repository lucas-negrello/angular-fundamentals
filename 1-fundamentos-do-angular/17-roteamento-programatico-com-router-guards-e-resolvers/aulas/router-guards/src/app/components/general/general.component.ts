import { Component } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {
  data$: Observable<Data> = of({});

  constructor(private readonly _route: ActivatedRoute) {}

  ngOnInit() {
    this.data$ = this._route.data;
  }
}
