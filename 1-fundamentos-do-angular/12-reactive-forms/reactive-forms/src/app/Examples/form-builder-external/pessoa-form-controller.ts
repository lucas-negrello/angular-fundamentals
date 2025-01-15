import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

export class PessoaFormController {
  pessoaForm!: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: this.fb.control('', { validators: [Validators.required] }),
      endereco: this.fb.group({
        rua: ['', [Validators.required]],
        numero: ['', [Validators.required]],
      }),
      musicas: this.fb.array([
        this.fb.group({
          nome: ['', [Validators.required]],
          artista: this.fb.control('', { validators: [Validators.required] }),
        }),
      ])
    })
  }

  get musicas(): FormArray{
    return this.pessoaForm.get('musicas') as FormArray;
  }

  pushMusicas() {
    this.musicas.push(
      this.fb.group({
        nome: ['', [Validators.required]],
        artista: ['', [Validators.required]],
      })
    )
  }

  removeMusicas(i: number){
    this.musicas.removeAt(i);
  }

}
