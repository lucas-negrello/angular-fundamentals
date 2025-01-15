import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {

  // O metodo updateOn do formGroup vai alterar o comportamento de todos controls
  // dele, porem, se precisarmos de um comportamento especifico em apenas um control,
  // podemos definir um updateOn naquele control, e apenas aquele control tera aquele
  // comportamento sobrescrito. Isto vale tambem para os formGroups dentro do formGroup.

  pessoaForm = new FormGroup({
    nome: new FormControl('', {validators: [Validators.required], updateOn: 'change'}),
    email: new FormControl('', [Validators.required, Validators.email]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required])
    })
  }, {
    validators: [Validators.required],
    updateOn: 'blur'
  })

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl;
  }
  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl;
  }
  get endereco(): FormGroup {
    return this.pessoaForm.get('endereco') as FormGroup;
  }
  get rua(): FormControl {
    return this.endereco?.get('rua') as FormControl;
  }
  get numero(): FormControl {
    return this.endereco?.get('numero') as FormControl;
  }

  constructor() {
    console.log(this.pessoaForm);
  }

  submit() {
    console.log(this.pessoaForm.value)
  }

  alteracaoTotal() {
    // Redefine todos valores de controls
    this.pessoaForm.setValue({
      nome: 'NomeAlt',
      email: 'EmailAlt',
      endereco: {
        rua: 'RuaAlt',
        numero: 'NumeroAlt'
      }
    })
  }

  alteracaoParcial() {
    // Altera apenas os valores desejados
    this.pessoaForm.patchValue({
      nome: 'nomePatch',
      endereco: {
        rua: 'RuaPatch'
      }
    })
  }
}
