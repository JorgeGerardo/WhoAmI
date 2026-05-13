import { Component, input } from '@angular/core';
import { WorkExperience } from '../../interfaces/work-experience';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-career-card',
  imports: [TranslateModule],
  templateUrl: './career-card.component.html',
  styleUrl: './career-card.component.scss'
})
export class CareerCardComponent {
  experience = input.required<WorkExperience>();
}
