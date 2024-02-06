import { Component } from '@angular/core';
import { SidenavComponent } from '../../../navbars/sidenav/sidenav.component';
import { FooterComponent } from '../../../footer/footer.component';
import { MenNavbarComponent } from '../../../navbars/men-navbar/men-navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent, FooterComponent, MenNavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
