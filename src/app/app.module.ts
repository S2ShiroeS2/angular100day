import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { InfoCountryService } from './services/InfoCountry';
import { LoggerService } from './services/loggerService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [InfoCountryService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
