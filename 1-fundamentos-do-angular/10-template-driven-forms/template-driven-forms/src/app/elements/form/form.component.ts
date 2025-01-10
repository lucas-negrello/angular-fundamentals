import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @ViewChild('form') form!: NgForm;

  ngAfterViewInit(){
    this.form.valueChanges?.subscribe(
      (value) => {
        console.log(value.name);
      }
    );
  }

  name: string | null = null;
  description: string | null = null;
  country: string = 'brasil';
  status: 'active' | 'inactive' = 'inactive';
  terms: boolean = false;

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  onReset(form: NgForm) {
    form.reset();
    console.log(form.value);
  }

}
