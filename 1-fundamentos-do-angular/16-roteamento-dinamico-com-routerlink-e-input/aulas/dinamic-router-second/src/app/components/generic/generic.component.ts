import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.scss'
})
export class GenericComponent {

  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  protected staticData: any = {}
  protected data: any = {};

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      data => this.data = data
    )
    this.staticData = this._activatedRoute.snapshot.data;
  }

}
