import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	AsyncValidatorFn,
	FormBuilder,
	FormControl,
	FormGroup,
	NgForm,
	ValidationErrors,
	ValidatorFn,
	Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
	signInForm!: FormGroup;
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.signInForm = this.formBuilder.group({
			username: [
				'',
				Validators.compose([
					Validators.required,
					Validators.minLength(6),
					Validators.pattern(/^[a-z]{6,32}$/i),
				]),
			],
			password: [
				'',
				Validators.compose([
				  Validators.required,
				  Validators.minLength(6),
				  Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
				]),
			  ],
			rememberMe: false,
		});
	}

	onSubmit() {
		console.log(this.signInForm);
	}
}
