import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Posts} from "../interfaces/posts.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService<Posts>{
  protected override resource: string = 'posts';
}
