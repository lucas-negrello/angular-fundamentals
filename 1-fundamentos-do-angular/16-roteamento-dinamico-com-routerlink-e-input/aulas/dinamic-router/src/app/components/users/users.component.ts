import {Component, inject} from '@angular/core';
import {User, UsersService} from "../../services/users.service";
import {Observable, of} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private readonly _userService: UsersService = inject(UsersService);

  usersList$: Observable<User[]> = of([]);

  ngOnInit() {
    this.usersList$ = this._userService.getUsers();
  }
}
