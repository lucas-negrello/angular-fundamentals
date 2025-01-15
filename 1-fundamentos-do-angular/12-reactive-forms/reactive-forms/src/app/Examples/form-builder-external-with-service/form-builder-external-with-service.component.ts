import { Component } from '@angular/core';
import {PessoaFormControllerService} from "./pessoa-form-controller-service.service";

@Component({
  selector: 'app-form-builder-external-with-service',
  templateUrl: './form-builder-external-with-service.component.html',
  styleUrl: './form-builder-external-with-service.component.scss'
})
export class FormBuilderExternalWithServiceComponent {

  private _pessoaForm!: PessoaFormControllerService;

  constructor(private readonly pessoaFormControllerService: PessoaFormControllerService) {
    this._pessoaForm = this.pessoaFormControllerService;
  }

  get pessoaForm(){
    return this._pessoaForm;
  }
  set pessoaForm(value: any){
    this._pessoaForm = value;
  }

}
