import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-big-saving',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './big-saving.component.html',
  styleUrl: './big-saving.component.css'
})
export class BigSavingComponent {
  faArrowDown = faArrowDown
}
