import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface User {
  id: number;
  name: string;
  username: string;
  adress: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  }
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private readonly _http: HttpClient) { }

  getUserById(id: number): Observable<User> {
    return this._http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
  }

  getUserPromise(): Promise<{id: number, name: string, username: string, email: string}>{
    return new Promise((resolve) => {
      setTimeout(() =>
        resolve({
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        }), 3000)
    })
  }
}
