import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {PostsService} from "../../../../services/posts.service";
import {Observable, of} from "rxjs";
import {Posts} from "../../../../interfaces/posts.interface";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  private readonly _postsService: PostsService = inject(PostsService);
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  protected postsList$: Observable<Posts[]> = of([]);

  private _userId: string = '';

  @Input()
  set userId(value: string) {
    this._userId = value;
  }
  get userId(): string {
    return this._userId;
  }

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(params => {
      this.userId = params['userId'];
    })
    this.postsList$ = this._postsService.search(`userId=${this.userId}`);
  }
}
