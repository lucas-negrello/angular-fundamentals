import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Albums} from "../interfaces/albums.interface";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService extends BaseService<Albums>{
  protected override resource: string = 'albums';
}
