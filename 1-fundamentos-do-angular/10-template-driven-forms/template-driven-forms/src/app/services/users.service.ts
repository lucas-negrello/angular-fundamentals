import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<{name: string}[]> {
    return this.http.get<{name: string}[]>('https://jsonplaceholder.typicode.com/users');
  }

}
