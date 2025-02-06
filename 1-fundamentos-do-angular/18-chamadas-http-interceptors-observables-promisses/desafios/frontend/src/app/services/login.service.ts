import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ILoginResponse} from "../interfaces/login-response.interface";
import {AUTH_TOKEN_ENABLED} from "../interceptors/auth.interceptor";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _httpClient = inject(HttpClient);

  public login(username: string, password: string): Observable<ILoginResponse> {
    const context = new HttpContext().set(AUTH_TOKEN_ENABLED, false);
    return this._httpClient.post<ILoginResponse>(
      'http://localhost:3000/login',
      {username, password},
      {context}
    ).pipe(
        map((response) => {
          localStorage.setItem('token', response.token);
          return response;
        })
      );
  }

}
