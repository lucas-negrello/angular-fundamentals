import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  visibilities = {
    input_text: false,
    input_textarea: false,
    input_select: false,
    input_radio: false,
    input_checkbox: false,
    components: false,
    form: false,
    form_first: false,
    user_job_form: false,
    form_children: false,
    custom_validators_form: false,
    standalone_form: true,
  }

  toggle (element: string){
    if(element === 'input-text'){
      this.visibilities.input_text = !this.visibilities.input_text;
    }
    if(element === 'input-textarea'){
      this.visibilities.input_textarea = !this.visibilities.input_textarea;
    }
    if(element === 'input-select'){
      this.visibilities.input_select = !this.visibilities.input_select;
    }
    if(element === 'input-radio'){
      this.visibilities.input_radio = !this.visibilities.input_radio;
    }
    if(element === 'input-checkbox'){
      this.visibilities.input_checkbox = !this.visibilities.input_checkbox;
    }
    if(element === 'components'){
      this.visibilities.components = !this.visibilities.components;
      if(!this.visibilities.components){
        this.visibilities.input_text = false;
        this.visibilities.input_textarea = false;
        this.visibilities.input_select = false;
        this.visibilities.input_radio = false;
        this.visibilities.input_checkbox = false;
      }
    }
    if(element === 'form'){
      this.visibilities.form = !this.visibilities.form;
    }
    if(element === 'form-first'){
      this.visibilities.form_first = !this.visibilities.form_first;
    }
    if(element === 'user-job-form'){
      this.visibilities.user_job_form = !this.visibilities.user_job_form;
    }
    if(element === 'form-children'){
      this.visibilities.form_children = !this.visibilities.form_children;
    }
    if(element === 'custom-validators-form'){
      this.visibilities.custom_validators_form = !this.visibilities.custom_validators_form;
    }
    if(element === 'standalone-form'){
      this.visibilities.standalone_form = !this.visibilities.standalone_form;
    }
  }
}
