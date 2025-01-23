import {Component, inject, Input} from '@angular/core';
import {PostsService} from "../../../../services/posts.service";
import {Posts} from "../../../../interfaces/posts.interface";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private readonly _postsService: PostsService = inject(PostsService);

  protected post: Posts = {} as Posts;
  private _postId: string = '';

  @Input()
  set postId(value: string) {
    this._postId = value;
  }
  get postId(): string {
    return this._postId;
  }

  ngOnInit() {
    this._postsService.get(this.postId).subscribe(
      post => this.post = post,
    )
  }
}
