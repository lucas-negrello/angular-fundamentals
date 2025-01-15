import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent {
  pessoaForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: this.fb.control('', { validators: [Validators.required] }),
      endereco: this.fb.group({
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]],
      }),
      musicas: this.fb.array([{
        informacao: this.fb.group({
          nome: ['', [Validators.required]],
          artista: this.fb.control('', { validators: [Validators.required] }),
        }),
      }])
    })

    console.log(this.pessoaForm.value)
  }

}
