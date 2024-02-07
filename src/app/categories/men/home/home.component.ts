import { Component } from '@angular/core';
import { SidenavComponent } from '../../../navbars/sidenav/sidenav.component';
import { FooterComponent } from '../../../footer/footer.component';
import { MenNavbarComponent } from '../../../navbars/men-navbar/men-navbar.component';
import { ProductsComponent } from '../products/products.component';
import { ProductDescriptionComponent } from '../product-description/product-description.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent, FooterComponent, MenNavbarComponent, ProductsComponent, ProductDescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
