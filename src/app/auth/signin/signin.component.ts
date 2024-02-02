import { Component } from '@angular/core';
import { SigninNavbarComponent } from '../../navbars/signin-navbar/signin-navbar.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [SigninNavbarComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}
