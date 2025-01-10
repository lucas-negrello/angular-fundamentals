import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { TextAreaComponent } from './elements/text-area/text-area.component';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { SelectComponent } from './elements/select/select.component';
import {HttpClientModule} from "@angular/common/http";
import { RadioButtonComponent } from './elements/radio-button/radio-button.component';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { FormComponent } from './elements/form/form.component';
import { UserJobFormComponent } from './elements/user-job-form/user-job-form.component';
import { FormChildrenComponent } from './elements/form-children/form-children.component';
import { MainFormComponent } from './elements/form-children/main-form/main-form.component';
import { FormUserComponent } from './elements/form-children/form-user/form-user.component';
import { FormProfessionComponent } from './elements/form-children/form-profession/form-profession.component';
import { CustomValidatorsComponent } from './elements/custom-validators/custom-validators.component';
import { InvalidTextValidatorDirective } from './directives/invalid-text-validator.directive';
import { DepartmentQuantityValidatorDirective } from './directives/department-quantity-validator.directive';
import { UserNameValidatorDirective } from './directives/user-name-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    TextAreaComponent,
    InputTextComponent,
    SelectComponent,
    RadioButtonComponent,
    CheckboxComponent,
    FormComponent,
    UserJobFormComponent,
    FormChildrenComponent,
    MainFormComponent,
    FormUserComponent,
    FormProfessionComponent,
    CustomValidatorsComponent,
    InvalidTextValidatorDirective,
    DepartmentQuantityValidatorDirective,
    UserNameValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
