import { Component } from '@angular/core';
import { AuthenticationService } from './shared/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private authService: AuthenticationService) { }
}
