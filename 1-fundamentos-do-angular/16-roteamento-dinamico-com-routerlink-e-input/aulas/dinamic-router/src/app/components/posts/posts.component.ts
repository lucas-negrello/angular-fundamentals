import {Component, inject, Input} from '@angular/core';
import {Post, PostsService} from "../../services/posts.service";
import {Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  private readonly _postsService: PostsService = inject(PostsService);
  postsList$: Observable<Post[]> = of([]);
  private _userId: string = '';
  // @Input() userId: string = '';
  @Input()
  set userId(value: string){
    this._userId = value;
    this.postsList$ = this._postsService.getUserPosts(value);
  }
  get userId(): string {
    return this._userId;
  }

  ngOnInit() {
    // this.postsList$ = this._postsService.getUserPosts(this.userId)
  }
}
