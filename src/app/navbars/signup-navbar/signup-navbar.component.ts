import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faS, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './signup-navbar.component.html',
  styleUrl: './signup-navbar.component.css'
})
export class SignupNavbarComponent {
  faSearch = faSearch
}
