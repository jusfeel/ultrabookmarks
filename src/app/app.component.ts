import { Component } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadingTextColor: string = "text-primary";

  constructor() {
    console.log(typeof environment);
    console.log(environment);

    this.loadingTextColor = environment.loadingTextcolor;
  }

}
