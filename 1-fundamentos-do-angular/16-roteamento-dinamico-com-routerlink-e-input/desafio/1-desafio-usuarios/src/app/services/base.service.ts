import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  private readonly _http: HttpClient = inject(HttpClient);

  protected baseUrl = 'https://jsonplaceholder.typicode.com';

  protected resource: string = '';

  public getAll(): Observable<T[]> {
    return this._http.get<T[]>(`${this.baseUrl}/${this.resource}`);
  }

  public get(id: string | number): Observable<T> {
    return this._http.get<T>(`${this.baseUrl}/${this.resource}/${id}`);
  }

  public search(params: any): Observable<T[]> {
    return this._http.get<T[]>(`${this.baseUrl}/${this.resource}?${params}`);
  }
}
