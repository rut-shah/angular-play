import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: blue;
    };
    h1 {
      color:red;
    }
  `]
})
export class AppComponent {
  title = 'angular-new';
}
