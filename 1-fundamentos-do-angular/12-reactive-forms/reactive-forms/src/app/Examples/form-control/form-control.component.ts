import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {invalidTextValidator} from "./invalid-text-validator";

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {
  nome = new FormControl(
    {
      value: 'Inicial', // valor inicial
      disabled: false // define se o componente já é criado desabilitado
    },
    {
      nonNullable: true, // quando for resetado, nao pode ser nulo
      updateOn: 'blur', // apenas atualiza quando clicado fora do input
      validators: [
        Validators.required,
        Validators.minLength(6),
        invalidTextValidator('invalid')
      ] // validators
    }
  );

  ngOnInit() {
    // console.log(this.nome);
    this.nome.valueChanges.subscribe(
      value => {
        console.log('Value',value);
      }
    )
    this.nome.statusChanges.subscribe(
      status => {
        console.log('Status',status);
      }
    )
  }

  alterarValor(){
    this.nome.setValue('NNN');
  }

  inputAlterado(){
    // console.log(this.nome.value);
  }

  desabilitar() {
    this.nome.disable();
  }

  habilitar() {
    this.nome.enable();
  }

  resetar() {
    this.nome.reset();
  }

  resetarComValorInicial() {
    this.nome.reset('Valor Reset');
  }

  setValidators() {
    // o metodo setValidators SOBRESCREVE todos validadores
    this.nome.setValidators([]);
    this.nome.setValue('FE');
    this.nome.setValidators(Validators.minLength(6));
    // caso esse metodo nao seja chamado, ele nao irá validar
    // os valores atuais com base nos novos validadores
    this.nome.updateValueAndValidity();
  }

  addValidators() {
    // o metodo addValidators ADICIONA o validador
    this.nome.addValidators([Validators.required]);
    // caso esse metodo nao seja chamado, ele nao irá validar
    // os valores atuais com base nos novos validadores
    this.nome.updateValueAndValidity();
  }
}
