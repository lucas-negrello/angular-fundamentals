import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-entereco',
  templateUrl: './entereco.component.html',
  styleUrl: './entereco.component.scss'
})
export class EnterecoComponent {

  @Input({required:true}) pessoaForm!: FormGroup;

}
