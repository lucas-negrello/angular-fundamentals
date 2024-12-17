import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderDirective } from './components/card/directives/base/card-header.directive';
import { CardContentDirective } from './components/card/directives/base/card-content.directive';
import { CardTitleTextDirective } from './components/card/directives/texts/card-title-text.directive';
import { CardDescriptionTextDirective } from './components/card/directives/texts/card-description-text.directive';
import { CardMediumIconDirective } from './components/card/directives/icons/card-medium-icon.directive';
import { CardLargeIconDirective } from './components/card/directives/icons/card-large-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientInfosCardComponent,
    CardItemComponent,
    CardLineComponent,
    CardTitleComponent,
    CardComponent,
    CardHeaderDirective,
    CardContentDirective,
    CardTitleTextDirective,
    CardDescriptionTextDirective,
    CardMediumIconDirective,
    CardLargeIconDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
