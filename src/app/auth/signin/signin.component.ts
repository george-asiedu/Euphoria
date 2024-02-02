import { Component } from '@angular/core';
import { SigninNavbarComponent } from '../../navbars/signin-navbar/signin-navbar.component';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../service/auth-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [SigninNavbarComponent, RouterLink, FormsModule, HttpClientModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email: string = ''
  password: string = ''
  rememberMe: boolean = false

  constructor(private authService: AuthServiceService) {}

  onSubmit() {
    this.authService.login(
      this.email,
      this.password,
      this.rememberMe
    ).subscribe({
        next: (response) => {
          console.log('Login Successful:', response)
        },
        error: (error) => {
          console.log('Login Error:', error)
        }
    })
  }
}
