import { Component } from '@angular/core';
import { WomenNavbarComponent } from '../../../navbars/women-navbar/women-navbar.component';
import { FooterComponent } from '../../../footer/footer.component';
import { SidenavComponent } from '../../../navbars/sidenav/sidenav.component';
import { WomenProductsComponent } from '../women-products/women-products.component';
import { ProductDescriptionComponent } from '../../men/product-description/product-description.component';
import { PricesComponent } from '../../men/prices/prices.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WomenNavbarComponent, FooterComponent, SidenavComponent, WomenProductsComponent, ProductDescriptionComponent, PricesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
