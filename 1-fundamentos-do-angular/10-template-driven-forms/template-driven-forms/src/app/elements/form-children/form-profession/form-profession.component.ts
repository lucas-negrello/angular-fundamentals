import { Component } from '@angular/core';
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-profession',
  templateUrl: './form-profession.component.html',
  styleUrl: './form-profession.component.scss',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FormProfessionComponent {

}
