import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UsersService} from "./services/users.service";
import {lastValueFrom, Observable} from "rxjs";

export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // protected numero = 1299.99;
  // protected user: User = {} as User;
  // protected user$!: Observable<User>;
  // protected userCollection = [] as User[];
  // protected userCollection$!: Observable<User[]>;
  // protected userPromise: {id: number, name: string, username: string, email: string} = {} as {id: number, name: string, username: string, email: string};
  // protected userPromise$!: Promise<{id: number, name: string, username: string, email: string}>;
  // protected userObservablePromise: Promise<User> = {} as Promise<User>;
  //
  // constructor(private readonly usersService: UsersService) {
  // }
  //
  // ngOnInit(){
  //   this.user$ = this.usersService.getUserById(1);
  //   this.userCollection$ = this.usersService.getUsers();
  //   this.userPromise$ = this.usersService.getUserPromise();
  //
  //   this.usersService.getUserById(1).subscribe(
  //     user => {
  //       this.user = user;
  //     }
  //   )
  //   this.usersService.getUsers().subscribe(
  //     users => {
  //       this.userCollection = users;
  //     }
  //   )
  //   this.usersService.getUserPromise().then(
  //     promise => this.userPromise = promise
  //   );
  //   this.userObservablePromise = lastValueFrom(this.usersService.getUserById(1))
  // }
  //
  // pessoa = {
  //   nome: 'Jane',
  //   idade: 26,
  //   status: UserStatusEnum.ATIVO,
  // }
  //
  // minhaData: string = '2024-10-21T21:00:00.000Z';
  // dateData: Date = new Date(this.minhaData);
  // timestampData: number = new Date(this.minhaData).getTime();

  searchValue: any = null;

  users = [
    {
      name: "John",
      status: 1,
    },
    {
      name: "James",
      status: 1,
    },
    {
      name: "January",
      status: 1,
    },
    {
      name: "February",
      status: 2,
    }
  ];

  inactivateUser(index: number){
    this.users[index].status = 2;
  }
  addUser(){
    this.users.push({
      name: 'Joaquim',
      status: 1,
    })
  }
}
