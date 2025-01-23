import {Component, inject, Input} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {CommentsService} from "../../../../../services/comments.service";
import {Comments} from "../../../../../interfaces/comments.interface";
import {Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {

  private readonly _commentsService: CommentsService = inject(CommentsService);
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);


  protected commentsList$: Observable<Comments[]> = of([]);
  private _postId: string = '';


  @Input()
  set postId(value: string) {
    this._postId = value;
  }
  get postId(): string {
    return this._postId;
  }

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(params => {
      this.postId = params['postId'];
    })
    this.commentsList$ = this._commentsService.search(`postId=${this.postId}`);
  }

}
