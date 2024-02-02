import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SignupNavbarComponent } from '../../navbars/signup-navbar/signup-navbar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupNavbarComponent, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
