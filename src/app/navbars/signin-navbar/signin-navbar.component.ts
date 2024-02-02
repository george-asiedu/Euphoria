import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-signin-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './signin-navbar.component.html',
  styleUrl: './signin-navbar.component.css'
})
export class SigninNavbarComponent {
  faSearch = faSearch
}
