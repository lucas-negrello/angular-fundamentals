import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component {
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  protected staticQueryParams: any = {};
  private _queryParameters: any = {};
  @Input() set queryParameters(params: any) {
    this._queryParameters = params;
  }
  get queryParameters(): any {
    return this._queryParameters;
  }

  ngOnInit() {
    this.staticQueryParams = this._activatedRoute.snapshot.queryParams;
    this._activatedRoute.queryParams.subscribe((params) => {
      this.queryParameters = params;
    })
  }

}
