import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-custom-directive';
  showColor: any = false;

  constructor() { }

  public changeColor(): void {

    this.showColor = this.showColor;
  }
}
