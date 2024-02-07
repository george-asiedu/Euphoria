import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Products } from '../../../interfaces';
import { AuthServiceService } from '../../../service/auth-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-women-products',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './women-products.component.html',
  styleUrl: './women-products.component.css'
})
export class WomenProductsComponent {
  faHeart = faHeart
  products: any[] = []
  menProducts: Products[] = []
  error: any

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.authService.getProducts().subscribe((data: any) => {
      this.products = [
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product,
        data.data.product
      ]
    })
  }
}