import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-component-a',
    templateUrl: './component-a.component.html',
    styleUrls: ['./component-a.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentAComponent implements OnInit {
    @Input() total!: Array<number>;
    @Input() num!: number;
    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(): void {
        // console.log('on change num : ', this.num);
        console.log('on change: ', this.total);
    }
    ngDoCheck(): void {
        // console.log('Do check num : ', this.num);
        console.log('Do check: ', this.total);
    }
}
