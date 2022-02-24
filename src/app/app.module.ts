import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgToastModule } from 'ng-angular-popup';

import { SpinnersAngularModule } from 'spinners-angular';
import { CoreModule } from './core/core.module';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    SpinnersAngularModule,
    ShowHidePasswordModule,
    CoreModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
