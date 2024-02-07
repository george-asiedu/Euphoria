import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from '../../../service/auth-service.service';
import { CommonModule } from '@angular/common';
import { Products } from '../../../interfaces';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
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
