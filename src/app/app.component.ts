import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Editor = ClassicEditor;
  data = '';
  title = 'angular100day';
  config = {
    toolbar: ['heading', '|', 'bold', 'italic', 'customButton'],
    language: 'en'
  }
}
