import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-component-a',
    templateUrl: './component-a.component.html',
    styleUrls: ['./component-a.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentAComponent implements OnInit {
    @Input() total!: Array<number>;
    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(): void {
        console.log('on change: ', this.total);
    }
    ngDoCheck(): void {
        console.log('Do check: ', this.total);
    }
}
