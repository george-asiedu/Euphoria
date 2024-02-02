import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-signin-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './signin-navbar.component.html',
  styleUrl: './signin-navbar.component.css'
})
export class SigninNavbarComponent {
  faSearch = faSearch
}
