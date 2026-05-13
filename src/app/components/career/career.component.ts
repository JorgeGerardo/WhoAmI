import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CareerCardComponent } from "../career-card/career-card.component";
import { WorkExperience } from '../../interfaces/work-experience';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-career',
  imports: [NavbarComponent, CareerCardComponent, TranslateModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  mlgExperience: WorkExperience = {
    companyName: 'Master Loyalty Group',
    period: 'career.mlg.period',
    role: 'career.mlg.role',
    descriptionKey: 'career.mlg.description',

    technologies: [
      '.Net Framework',
      '.Net',
      'Angular',
      'ASP.NET',
      'Azure DevOps',
      'Bootstrap',
      'Dapper',
      'Docker',
      'Entity Framework',
      'Git',
      'Postman',
      'Scrum',
      'SQL Server',
      'TypeScript',
    ]
  };

  academic: WorkExperience = {
    companyName: 'Instituto Tecnológico Superior de Guasave',
    period: 'career.academic.period',
    role: 'career.academic.role',
    descriptionKey: 'career.academic.description',

    technologies: [
      '.NET Framework',
      '.NET',
      'Arduino',
      'Assembly',
      'C++',
      'Cisco Packet Tracer',
      'Esp32',
      'Google Data Studio',
      'Haskell',
      'Python',
      'Scrum',
      'SQL Server',
      'Unity',
      'VMware',
      'Windows Form',
      'Windows Server',
      'WPF',
    ]
  };


}
