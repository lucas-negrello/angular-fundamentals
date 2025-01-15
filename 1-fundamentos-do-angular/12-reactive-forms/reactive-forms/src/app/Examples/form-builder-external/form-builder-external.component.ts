import {Component, OnInit} from '@angular/core';
import {PessoaFormController} from "./pessoa-form-controller";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form-builder-external',
  templateUrl: './form-builder-external.component.html',
  styleUrl: './form-builder-external.component.scss'
})
export class FormBuilderExternalComponent extends PessoaFormController implements OnInit {

  constructor(
    private readonly _fb: FormBuilder,
  ) {
    super(_fb);
  }

  ngOnInit() {
    console.log(this.pessoaForm.value)
  }

}
