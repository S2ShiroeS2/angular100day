import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighLightDirective } from './high-light.directive';
import { CtIfDirective } from './ct-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective,
    CtIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
