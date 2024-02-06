import { Component } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lime-light',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './lime-light.component.html',
  styleUrl: './lime-light.component.css'
})
export class LimeLightComponent {
  faHeart = faHeart
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
