import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './signup-navbar.component.html',
  styleUrl: './signup-navbar.component.css'
})
export class SignupNavbarComponent {
  faSearch = faSearch
}
