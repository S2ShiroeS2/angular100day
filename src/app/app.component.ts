import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    //MM-DD-YYYY (01-01-1983)
    date = '2021-8-30';
    text = "Angular Example";
    num = 123;
}
