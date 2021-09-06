import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
	declarations: [AppComponent, SignInComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
