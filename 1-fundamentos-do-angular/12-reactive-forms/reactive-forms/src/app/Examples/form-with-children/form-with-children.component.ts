import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-with-children',
  templateUrl: './form-with-children.component.html',
  styleUrl: './form-with-children.component.scss'
})
export class FormWithChildrenComponent {

  pessoaForm = new FormGroup({
    pessoa: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      rua: new FormControl('', []),
      numero: new FormControl('', [])
    })
  })

  ngOnInit() {

    setTimeout(() => {
      console.log('Form Touched: ', this.pessoaForm.touched);
      console.log('Pessoa Touched: ', this.pessoaForm.get('pessoa')?.touched)
    }, 3000)
  }

  enviar() {
    console.log(this.pessoaForm.status)
  }

  markTouch() {
    // esse exemplo serve para todas outras funçoes "markAs"
    this.pessoaForm.get('pessoa')?.markAsTouched({
      // marca como tocado apenas o pessoa, sem marcar como touched o form
      onlySelf: true
    })
    // para atualizar os validadores e status
    this.pessoaForm.updateValueAndValidity();
  }
}
