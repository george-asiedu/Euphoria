import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './women.component.html',
  styleUrl: './women.component.css'
})
export class WomenComponent {
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
