import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appDepartmentQuantityValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DepartmentQuantityValidatorDirective,
      multi: true,
    }
  ]
})
export class DepartmentQuantityValidatorDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {


      if(control.value.departamento === 'IT' && +control.value.quantidade > 10){
        return { 'InvalidITQuantity': 'The max quantity is 10' }
      }
      if(control.value.departamento === 'RH' && +control.value.quantidade > 20){
        return { 'InvalidRHQuantity': 'The max quantity is 20' }
      }

      return null;
    }

}
