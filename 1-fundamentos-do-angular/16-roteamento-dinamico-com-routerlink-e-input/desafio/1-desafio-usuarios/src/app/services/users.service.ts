import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Users} from "../interfaces/users.interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<Users>{
  protected override resource: string = 'users';
}
