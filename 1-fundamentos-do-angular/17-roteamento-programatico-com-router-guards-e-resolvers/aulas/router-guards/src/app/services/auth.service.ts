import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly _http: HttpClient) {
  }

  login(username: string, password: string): Observable<{token: string}> {
    return this._http.post<{token: string}>('http://localhost:3000/login', {username, password}).pipe(
      map(resp => {
        localStorage.setItem('access-token', resp.token);
        return resp;
      })
    )
  }

  verifyToken(): Observable<{valid: boolean, user: any}> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'));
    return this._http.get<{valid: boolean, user: string}>('http://localhost:3000/verify-token', {headers});
  }

  getUserScopes(): string[] {
    const token = localStorage.getItem('access-token');
    if(!token){
      return [];
    }
    const decoded: any = jwtDecode(token);
    return decoded.scopes;
  }

  getUserWalletStatus(): string {
    const token = localStorage.getItem('access-token');
    if(!token){
      return '';
    }
    const decoded: any = jwtDecode(token);
    return decoded.walletStatus;
  }

  logout() {
    localStorage.removeItem('access-token');
  }

}
