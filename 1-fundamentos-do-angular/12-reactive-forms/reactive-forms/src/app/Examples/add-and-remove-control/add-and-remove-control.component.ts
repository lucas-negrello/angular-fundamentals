import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-and-remove-control',
  templateUrl: './add-and-remove-control.component.html',
  styleUrl: './add-and-remove-control.component.scss'
})
export class AddAndRemoveControlComponent implements OnInit {
  pessoaForm!: FormGroup;
  mostrarMaisInfos = false;

  ngOnInit() {
    this.pessoaForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
    });
  }

  adicionarMaisInfos() {
    this.pessoaForm.addControl('maisInfos', new FormControl('', [Validators.required]));

    this.mostrarMaisInfos = true;
  }

  removerMaisInfos() {
    this.pessoaForm.removeControl('maisInfos');

    this.mostrarMaisInfos = false;
  }

  mostrarForm() {
    console.log(this.pessoaForm);
  }
}
