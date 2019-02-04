import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormFieldComponent } from './dynamic-form/form-field.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';


@NgModule({
  declarations: [
    AppComponent, DynamicFormComponent, FormFieldComponent,  ControlMessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
