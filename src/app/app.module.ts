import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, HTTP_PROVIDERS } from '@angular/http';
import {ReactiveFormsModule} from "@angular/forms";
import { LandingComponent } from './landing/landing.component';

import { HttpService } from './http.service';
// import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
    // routing
  ],
  providers: [HTTP_PROVIDERS, HttpService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
