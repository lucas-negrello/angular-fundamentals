import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-array-with-group',
  templateUrl: './form-array-with-group.component.html',
  styleUrl: './form-array-with-group.component.scss'
})
export class FormArrayWithGroupComponent {

  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormGroup({
        titulo: new FormControl('', Validators.required),
        banda: new FormControl('', Validators.required),
      })
    ])
  })

  constructor() {
    console.log(this.musicasForm)
  }

  get musicas(): FormArray{
    return this.musicasForm.get('musicas') as FormArray;
  }

  adicionarMusica() {
    this.musicas.push(new FormGroup({
      titulo: new FormControl('', Validators.required),
      banda: new FormControl('', Validators.required),
    }))
  }

  removerMusica(i: number) {
    this.musicas.removeAt(i)
  }
}
