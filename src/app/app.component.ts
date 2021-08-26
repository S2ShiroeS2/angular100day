import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDanger = false;
  isWarning = false;
  classBox = ['red-border', 'yellow-background']
}
