import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AccountMenuComponent } from './account-menu/account-menu.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountMenuComponent,
    AccountCardComponent,
    TransactionComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
