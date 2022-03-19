import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interpolationExample';
  public siteUrl = window.location.href;
name = 'Zahid Chand'
  greating()
  {
    return "Hello " +this.name;
  }
}
