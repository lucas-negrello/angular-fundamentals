import {NgModule} from "@angular/core";
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {UserDetailsComponent} from './user-details/user-details.component';
import {FilterComponent} from './filter/filter.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent
  ],
  imports: [
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    UserDetailsComponent,
    FilterComponent
  ],
  providers: []
})
export class ComponentsModule { }
