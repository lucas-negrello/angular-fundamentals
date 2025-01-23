import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly _http: HttpClient = inject(HttpClient);

  getUserPosts(userId: string): Observable<Post[]> {
    return this._http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
  }

}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}
