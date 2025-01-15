import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required])
    ])
  })

  constructor() {
    console.log(this.musicasForm);
    this.musicasForm.valueChanges.subscribe(
      value => console.log(value)
    );
  }

  get musicas(): FormArray {
    return this.musicasForm.get('musicas') as FormArray;
  }

  adicionarMusica() {
    this.musicas.push(
      new FormControl('', [Validators.required])
    )
  }

  removerMusica(i: number) {
    this.musicas.removeAt(i);
  }
}
