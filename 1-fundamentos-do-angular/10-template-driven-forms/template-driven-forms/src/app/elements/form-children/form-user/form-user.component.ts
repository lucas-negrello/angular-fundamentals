import { Component } from '@angular/core';
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class FormUserComponent {

}
