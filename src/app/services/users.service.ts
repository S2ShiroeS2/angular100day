import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	private API_URL_01 = 'https://randomuser.me/api/?results=10';
	private API_URL_02 = 'https://randomuser.me/api/?results=5';

	constructor(private http: HttpClient) { }

	fetchDataUsers(): Observable<any> {
		return (
			this.http.get(this.API_URL_01).pipe(
				catchError(this.handleError)
			)
		)
	}

	fetchDataUsersAnother(): Observable<any> {
		return (
			this.http.get(this.API_URL_02).pipe(
				catchError(this.handleError)
			)
		)
	}

	handleError(error: HttpErrorResponse): Observable<any> {
		let errorMess = 'Unknown Error';
		if (error.error instanceof ErrorEvent) {
			//Client-side error
			errorMess = `Error: ${error.error.message}`;
		} else {
			//Server-side error
			errorMess = `Error code: ${error.status}\nMessage: ${error.message}`;
		}
		console.log('Error: ', errorMess);
		return throwError(errorMess);
	}
}
