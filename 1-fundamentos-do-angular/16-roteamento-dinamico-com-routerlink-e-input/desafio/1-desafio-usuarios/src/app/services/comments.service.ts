import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Comments} from "../interfaces/comments.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends BaseService<Comments>{
  protected override resource: string = 'comments';
}
