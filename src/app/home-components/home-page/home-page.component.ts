import { Component } from '@angular/core';
import { MainNavbarComponent } from '../../navbars/main-navbar/main-navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { SliderComponent } from '../slider/slider.component';
import { ExploreComponent } from '../explore/explore.component';
import { NewArrivalsComponent } from '../new-arrivals/new-arrivals.component';
import { BigSavingComponent } from '../big-saving/big-saving.component';
import { MenComponent } from '../men/men.component';
import { WomenComponent } from '../women/women.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainNavbarComponent, 
    FooterComponent, 
    SliderComponent, 
    ExploreComponent, 
    NewArrivalsComponent,
    BigSavingComponent,
    MenComponent,
    WomenComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
