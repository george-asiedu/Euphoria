import { Component } from '@angular/core';
import { WomenNavbarComponent } from '../../../navbars/women-navbar/women-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WomenNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
