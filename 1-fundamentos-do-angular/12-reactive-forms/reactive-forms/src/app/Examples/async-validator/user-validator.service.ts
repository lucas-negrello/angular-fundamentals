import {Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {delay, map, Observable, of} from "rxjs";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root',
})
export class UserValidatorService implements AsyncValidator {

  constructor(private readonly usersService: UsersService) {
  }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    if(!control.dirty) return of(null);
    return this.usersService.getUsers().pipe(
      delay(1500),
      map((users) => {
        const hasUser = users.find(
          user => user.name.toLowerCase() === control.value.trim().toLowerCase()
        )
        if(hasUser) return null;
        return { userValidator: true }
      })
    );
  }
}
