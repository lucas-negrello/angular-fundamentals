import { Component } from '@angular/core';
import {ActivatedRoute, Data, RouterLink} from "@angular/router";
import {Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-non-authorized',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './non-authorized.component.html',
  styleUrl: './non-authorized.component.scss'
})
export class NonAuthorizedComponent {

  data$: Observable<Data> = of();
  constructor(private readonly _route: ActivatedRoute) {}

  ngOnInit() {
    this.data$ = this._route.data;
  }

}
