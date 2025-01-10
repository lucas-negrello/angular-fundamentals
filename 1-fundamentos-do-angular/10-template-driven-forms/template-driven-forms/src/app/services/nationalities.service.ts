import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

export interface Nationality {
  name: {
    common: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NationalitiesService {

  constructor(private http: HttpClient) { }

  getAllNacionalities(): Observable<Nationality[]> {
    return this.http.get<Nationality[]>('https://restcountries.com/v3.1/all');
  }

  getAllNacionalitiesNames(): Observable<string[]> {
    return this.http.get<Nationality[]>('https://restcountries.com/v3.1/all').pipe(
      map(response => response.map(nationality => nationality.name.common))
    );
  }
}
