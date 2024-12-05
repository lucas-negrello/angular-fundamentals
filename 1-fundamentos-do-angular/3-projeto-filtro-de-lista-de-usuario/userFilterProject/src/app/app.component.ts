import {Component, OnInit} from '@angular/core';
import {IUser} from "./interfaces/user/user.interface";
import {UsersList} from "./data/users-list";
import {IFilterOptions} from "./interfaces/filter-options.interface";
import {filterUsersList} from "./utils/filter-users-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  ngOnInit(){
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1)
  }

  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions){
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
