import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemDiretivaComponent } from './sem-diretiva/sem-diretiva.component';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import {HighlightDirective} from "./directives/highlight.directive";
import {DisabledDirective} from "./directives/disabled.directive";
import { StyleDirective } from './directives/style.directive';
import { ClassDirective } from './directives/class.directive';
import {ListenerDirective} from "./directives/listener.directive";
import { InputBackgroundDirectiveDirective } from './directives/input-background-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemDiretivaComponent,
    ComDiretivaComponent,
    HighlightDirective,
    DisabledDirective,
    StyleDirective,
    ClassDirective,
    ListenerDirective,
    InputBackgroundDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
