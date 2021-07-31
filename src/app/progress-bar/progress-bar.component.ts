import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
    private _progress = 50;
    @Input() set progress(val: number) {
        //validation input
        if(typeof val != "number") {
            const progress = Number(val);
            if(Number.isNaN(progress)) {
                this._progress = 0;
            } else {
                this._progress = progress;
            }
        }
        this._progress = val;
    }
    get progress() {
        return this._progress;
    }
    @Input() backgroundColor = '#ccc';
    @Input() progressColor = 'tomato';

    constructor() {}

    ngOnInit(): void {}
}
