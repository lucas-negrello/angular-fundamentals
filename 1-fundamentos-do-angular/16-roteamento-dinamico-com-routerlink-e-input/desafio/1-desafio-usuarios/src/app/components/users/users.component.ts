import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {Observable, of} from "rxjs";
import {Users} from "../../interfaces/users.interface";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private readonly _usersService: UsersService = inject(UsersService);
  protected users$: Observable<Users[]> = of([]);

  ngOnInit() {
    this.users$ = this._usersService.getAll();
  }
}
