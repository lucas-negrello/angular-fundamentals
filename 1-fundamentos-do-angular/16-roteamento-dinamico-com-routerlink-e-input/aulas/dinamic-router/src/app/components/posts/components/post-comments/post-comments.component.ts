import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-comments',
  standalone: true,
  imports: [],
  templateUrl: './post-comments.component.html',
  styleUrl: './post-comments.component.scss'
})
export class PostCommentsComponent {

  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  @Input() set postId(value: string) {
    console.log(value);
  }

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe(params => {
      console.log(params)
    })
  }
}
