import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    numArr!: Array<number>;
    count: number = 0;

    ngOnInit(): void {
        this.numArr = [];
    }

    Increase() {
        this.count++
        this.numArr.push(this.count);
    }
}
