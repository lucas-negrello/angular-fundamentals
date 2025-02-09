import {Component, ViewChild} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent {
  @ViewChild('inputFormControl') inputFormControl!: NgModel;

  form = {
    input: '',
    status: false
  }
  ngAfterViewInit(): void {
    console.log(this.inputFormControl);
    if(this.inputFormControl.valueChanges){
      this.inputFormControl.valueChanges.subscribe(
        value => {
          this.form.input = value;
        }
      )
    }
    if(this.inputFormControl.statusChanges){
      this.inputFormControl.statusChanges.subscribe(
        status => {
          if(status && status === "INVALID"){
            this.form.status = false;
          }
          else{
            this.form.status = true;
          }
          console.log(this.form);
        }
      )
    }

  }

  title = 'template-driven-forms';

  jsontitle = {
    title: this.title
  }

}
