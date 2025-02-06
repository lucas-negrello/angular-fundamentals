import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IUserRequest} from "../interfaces/user-request.interface";
import {IUpdateUserResponse} from "../interfaces/update-user-response.interface";

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private readonly _httpClient = inject(HttpClient);

  public updateUser(userInfos: IUserRequest): Observable<IUpdateUserResponse> {
    return this._httpClient.put<IUpdateUserResponse>(
      `http://localhost:3000/update-user`,
      userInfos,
    ).pipe(
      map((response) => {
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }
}
