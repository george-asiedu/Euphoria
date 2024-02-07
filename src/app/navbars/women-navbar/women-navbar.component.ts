import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-women-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './women-navbar.component.html',
  styleUrl: './women-navbar.component.css'
})
export class WomenNavbarComponent {
  faSearch = faSearch
}
