import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from '../../../service/auth-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  faHeart = faHeart
  menProducts: any[] = []

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.authService.getMenProducts().subscribe(
      (data: any[]) => {
        this.menProducts = data
      }
    )
  }
}
