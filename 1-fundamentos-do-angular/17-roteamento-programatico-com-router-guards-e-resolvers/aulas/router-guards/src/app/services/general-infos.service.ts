import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneralInfosService {

  constructor(private readonly _http: HttpClient) { }

  private headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));

  getIncidents(): Observable<{ day: number }> {
    return this._http.get<{ day: number }>('http://localhost:3000/incidents', {headers: this.headers});
  }

  getPendingPayments(): Observable<{ pending: number }> {
    return this._http.get<{ pending: number }>('http://localhost:3000/pending-payments', {headers: this.headers});
  }

  getNewAccounts(): Observable<{ accounts: number }> {
    return this._http.get<{ accounts: number }>('http://localhost:3000/new-accounts', {headers: this.headers});
  }

  getActiveUsers(): Observable<{ users: number }> {
    return this._http.get<{ users: number }>('http://localhost:3000/active-users', {headers: this.headers});
  }
}
