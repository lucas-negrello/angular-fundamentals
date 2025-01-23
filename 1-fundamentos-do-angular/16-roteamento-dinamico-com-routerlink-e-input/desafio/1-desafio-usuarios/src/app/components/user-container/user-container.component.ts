import {Component, inject, Input} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {Users} from "../../interfaces/users.interface";

@Component({
  selector: 'app-user-container',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './user-container.component.html',
  styleUrl: './user-container.component.scss'
})
export class UserContainerComponent {
  private readonly _usersService: UsersService = inject(UsersService);
  protected user: Users = {} as Users;

  private _userId: string = '';

  @Input()
  set userId(value: string) {
    this._userId = value;
  }
  get userId(): string {
    return this._userId;
  }

  ngOnInit() {
    this._usersService.get(this.userId).subscribe(
      user => {
        this.user = user;
      }
    )
  }
}
