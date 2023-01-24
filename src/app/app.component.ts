import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isActive: Boolean = false;
  public cityName: string = '';
  /**
   * handle
   */
  public handle(event?) {
    this.isActive = !this.isActive;
  }
}
