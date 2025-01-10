import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-job-form',
  templateUrl: './user-job-form.component.html',
  styleUrl: './user-job-form.component.scss'
})
export class UserJobFormComponent {


  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
