import { Component } from '@angular/core';
import { AuthenticationService } from '../guardservice/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courier';
  constructor(private loginservice:AuthenticationService){}
}
