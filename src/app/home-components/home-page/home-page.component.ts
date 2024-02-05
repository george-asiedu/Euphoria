import { Component } from '@angular/core';
import { MainNavbarComponent } from '../../navbars/main-navbar/main-navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MainNavbarComponent, FooterComponent, SliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
