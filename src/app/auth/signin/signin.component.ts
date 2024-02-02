import { Component } from '@angular/core';
import { SigninNavbarComponent } from '../../navbars/signin-navbar/signin-navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [SigninNavbarComponent, RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}
