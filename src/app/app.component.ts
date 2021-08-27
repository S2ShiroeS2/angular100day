import { Component, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checked = true;

  @ViewChild('toggleComp') toggleComp!: ToggleComponent;

  @ViewChildren(ToggleComponent) toggleList!: QueryList<ToggleComponent>;

  toggleInside() {
    this.toggleComp.toggle();
  }
}
