import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-men',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './men.component.html',
  styleUrl: './men.component.css'
})
export class MenComponent {
  faArrowRight = faArrowRight
  products: any[] = []

  constructor(private authService: AuthServiceService) {}
  ngOnInit(): void {
    this.authService.getProducts().subscribe((data: any) => {
      this.products = [
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product
      ]
    })
  }
}
