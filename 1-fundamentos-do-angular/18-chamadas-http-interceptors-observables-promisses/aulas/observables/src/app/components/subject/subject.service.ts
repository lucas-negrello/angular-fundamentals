import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  // private readonly valueChanged$: Subject<number> = new Subject<number>();
  private readonly valueChanged$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  valueChanged(): Observable<number> {
    return this.valueChanged$.asObservable();
  }

  emitValue(number: number) {
    this.valueChanged$.next(number);
  }



}
