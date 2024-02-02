import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-signin-navbar',
  standalone: true,
  imports: [FontAwesomeModule, MatButtonModule],
  templateUrl: './signin-navbar.component.html',
  styleUrl: './signin-navbar.component.css'
})
export class SigninNavbarComponent {
  faSearch = faSearch
}
