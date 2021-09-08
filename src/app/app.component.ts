import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'angular100day';
	constructor(private userService: UsersService) { }
	ngOnInit() {
		this.userService.fetchDataUsers().subscribe(user => {
			console.log('fethc data user API 1: ', user);
		});
		this.userService.fetchDataUsersAnother().subscribe(user => {
			console.log('fethc data user API 2: ', user);
		});
	}
}
