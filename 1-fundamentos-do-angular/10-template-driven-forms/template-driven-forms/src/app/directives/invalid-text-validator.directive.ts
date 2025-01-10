import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appInvalidTextValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidTextValidatorDirective,
      multi: true,
    }
  ]
})
export class InvalidTextValidatorDirective implements Validator {

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
      const isValid = control.value?.toLowerCase().includes('lucas');

      return isValid ? null : { 'invalidText': 'Text must be lucas' }
    }

}
