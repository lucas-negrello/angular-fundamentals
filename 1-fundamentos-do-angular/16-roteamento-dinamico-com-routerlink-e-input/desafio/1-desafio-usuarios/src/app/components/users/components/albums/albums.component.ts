import {Component, inject, Input} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {AlbumsService} from "../../../../services/albums.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {Albums} from "../../../../interfaces/albums.interface";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {

  private readonly _albumsService: AlbumsService = inject(AlbumsService);
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  protected albumsList$: Observable<Albums[]> = of([]);

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
    this.albumsList$ = this._albumsService.search(`userId=${this.userId}`);
  }
}
