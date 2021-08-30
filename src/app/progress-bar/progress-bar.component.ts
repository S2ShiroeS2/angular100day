import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
    @Input() backgroundColor = '#ccc';
    @Input() progressColor = 'tomato';
    @Input() progress = 50;

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        if('progress' in changes) {
            if(typeof changes['progress'].currentValue !== 'number') {
                const progress = Number(changes['progress'].currentValue);
                if(Number.isNaN(progress)) {
                    this.progress = 0;
                } else {
                    this.progress = progress;
                }
            }
        }
    }

    ngOnInit(): void {}
}
