import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  tools = [
    'Azure DevOps',
    'CLI',
    'Git',
    'GitHub',
    'SQL Server',
  ]

  frontend = [
    'Angular',
    'Bootstrap',
    'SCSS / CSS',
    'TypeScript',
  ]

  additionalTechnologies = [
    'Arduino',
    'Azure',
    'Basic electronic',
    'C++',
    'Cisco Packet Tracer',
    'Esp32',
    'Linux',
    'MAUI',
    'Python',
    'Windows Form',
    'Windows Server',
    'WPF',
  ]

}
