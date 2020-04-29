import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-ngfor-app';
  productList: Array<string> = [
    'RedMi',
    'Nokia',
    'Real Me',
    'apple',
    'one plus'
  ]
}
