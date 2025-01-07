import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DATE_PIPE_DEFAULT_OPTIONS} from "@angular/common";
import {LOCALE_ID} from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserStatusPipe} from "./pipes/user-status.pipe";
import {TruncatePipe} from "./pipes/truncate.pipe";

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from "@angular/common";


registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    UserStatusPipe,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: {
        dateFormat: "dd/MM/YYYY",
        timezone: "+0000",
      }
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
