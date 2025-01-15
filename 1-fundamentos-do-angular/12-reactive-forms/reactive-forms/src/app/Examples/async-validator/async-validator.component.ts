import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserValidatorService} from "./user-validator.service";

@Component({
  selector: 'app-async-validator',
  templateUrl: './async-validator.component.html',
  styleUrl: './async-validator.component.scss'
})
export class AsyncValidatorComponent {

  constructor(private readonly userValidatorService: UserValidatorService) {}

  // Para nao perder a referencia do this no validator, devemos usar SEMPRE o .bind(this.validatorName)

  nome = new FormControl('', {
    asyncValidators: [this.userValidatorService.validate.bind(this.userValidatorService)],
    updateOn: 'blur'
  });



}
