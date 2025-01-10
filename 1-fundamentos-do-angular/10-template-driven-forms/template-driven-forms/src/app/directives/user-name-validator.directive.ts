import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";
import {delay, map, Observable, of} from 'rxjs';
import {UsersService} from "../services/users.service";

@Directive({
  selector: '[appUserNameValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() =>  UserNameValidatorDirective),
      multi: true,
    }
  ]
})
export class UserNameValidatorDirective implements AsyncValidator {

  constructor(private readonly usersService: UsersService) {
  }

    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      if(!control.dirty){
        return of(null);
      }

      return this.usersService.getUsers().pipe(
        delay(3000),
        map((users) => {
          const foundUser = users
            .filter((user) => user.name === control.value)
            .map(user => user.name);
          if(foundUser.length > 0){
            return null;
          }
          return { 'invalidUserName': 'The username does not exists' };
        })
      );
   }

}
