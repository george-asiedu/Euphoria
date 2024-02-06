import { Component } from '@angular/core';
import { MenNavbarComponent } from '../../navbars/men-navbar/men-navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-men-products',
  standalone: true,
  imports: [MenNavbarComponent, FooterComponent],
  templateUrl: './men-products.component.html',
  styleUrl: './men-products.component.css'
})
export class MenProductsComponent {

}
