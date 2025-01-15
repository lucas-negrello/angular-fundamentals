import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './Examples/form-control/form-control.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AsyncValidatorComponent } from './Examples/async-validator/async-validator.component';
import {HttpClientModule} from "@angular/common/http";
import { FormGroupComponent } from './Examples/form-group/form-group.component';
import { FormArrayComponent } from './Examples/form-array/form-array.component';
import { FormArrayWithGroupComponent } from './Examples/form-array-with-group/form-array-with-group.component';
import { FormBuilderComponent } from './Examples/form-builder/form-builder.component';
import { FormBuilderExternalComponent } from './Examples/form-builder-external/form-builder-external.component';
import { FormBuilderExternalWithServiceComponent } from './Examples/form-builder-external-with-service/form-builder-external-with-service.component';
import { FormWithChildrenComponent } from './Examples/form-with-children/form-with-children.component';
import { EnterecoComponent } from './Examples/form-with-children/components/entereco/entereco.component';
import {FormComChamadaHttpComponent} from "./Examples/form-com-chamada-http/form-com-chamada-http.component";
import {CrossValidatorComponent} from "./Examples/cross-validator/cross-validator.component";
import {AddAndRemoveControlComponent} from "./Examples/add-and-remove-control/add-and-remove-control.component";

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    AsyncValidatorComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormArrayWithGroupComponent,
    FormBuilderComponent,
    FormBuilderExternalComponent,
    FormBuilderExternalWithServiceComponent,
    FormWithChildrenComponent,
    EnterecoComponent,
    FormComChamadaHttpComponent,
    CrossValidatorComponent,
    AddAndRemoveControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
