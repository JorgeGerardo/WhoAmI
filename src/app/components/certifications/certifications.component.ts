import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CertificationCardComponent } from "../certification-card/certification-card.component";
import { Certification } from '../../interfaces/certification';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-certifications',
  imports: [NavbarComponent, CertificationCardComponent, TranslateModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  certifications = data;
}

export const data: Certification[] = [
  {
    titleKey: 'certifications.angular17.title',
    date: new Date('2025-05-30'),
    platform: 'Platzi',
    tecnologies: ['Angular', 'TypeScript'],
    pdfUrl: '/WhoAmI/certifications/diploma-angular 17.pdf'
  },
  {
    titleKey: 'certifications.angularForms.title',
    date: new Date('2025-05-25'),
    platform: 'Platzi',
    tecnologies: ['Angular', 'Reactive Forms', 'TypeScript'],
    pdfUrl: '/WhoAmI/certifications/diploma-angular-forms.pdf'
  },
  {
    titleKey: 'certifications.unitTestingCsharp.title',
    date: new Date('2025-05-02'),
    platform: 'Platzi',
    tecnologies: ['C#', 'Unit Testing', '.NET'],
    pdfUrl: '/WhoAmI/certifications/diploma-unit-testing-csharp.pdf'
  },
  {
    titleKey: 'certifications.cleanCodeCsharp.title',
    date: new Date('2025-03-16'),
    platform: 'Platzi',
    tecnologies: ['C#', 'Clean Code'],
    pdfUrl: '/WhoAmI/certifications/diploma-clean-code-csharp.pdf'
  },
  {
    titleKey: 'certifications.solidCsharp.title',
    date: new Date('2025-02-15'),
    platform: 'Platzi',
    tecnologies: ['C#', 'SOLID', 'OOP'],
    pdfUrl: '/WhoAmI/certifications/diploma-solid-csharp-net.pdf'
  },
  {
    titleKey: 'certifications.apisNet.title',
    date: new Date('2024-11-18'),
    platform: 'Platzi',
    tecnologies: ['ASP.NET Core', 'C#', 'REST API'],
    pdfUrl: '/WhoAmI/certifications/diploma-apis-net.pdf'
  },
  {
    titleKey: 'certifications.entityFramework.title',
    date: new Date('2024-11-18'),
    platform: 'Platzi',
    tecnologies: ['Entity Framework Core', 'SQL Server', 'C#'],
    pdfUrl: '/WhoAmI/certifications/diploma-entity-framework.pdf'
  },
  {
    titleKey: 'certifications.tailwindCss.title',
    date: new Date('2024-02-27'),
    platform: 'Platzi',
    tecnologies: ['Tailwind CSS', 'CSS'],
    pdfUrl: '/WhoAmI/certifications/diploma-tailwind-css-2020.pdf'
  },
  {
    titleKey: 'certifications.gitGithub.title',
    date: new Date('2024-02-21'),
    platform: 'Platzi',
    tecnologies: ['Git', 'GitHub'],
    pdfUrl: '/WhoAmI/certifications/diploma-git-github.pdf'
  },
  {
    titleKey: 'certifications.angularApis.title',
    date: new Date('2023-11-06'),
    platform: 'Platzi',
    tecnologies: ['Angular', 'REST API', 'HttpClient'],
    pdfUrl: '/WhoAmI/certifications/diploma-angular-apis.pdf'
  },
  {
    titleKey: 'certifications.rxjs.title',
    date: new Date('2023-11-03'),
    platform: 'Platzi',
    tecnologies: ['RxJS', 'Reactive Programming', 'Angular'],
    pdfUrl: '/WhoAmI/certifications/diploma-programacion-reactiva-rxjs.pdf'
  },
  {
    titleKey: 'certifications.angularTailwind.title',
    date: new Date('2023-10-17'),
    platform: 'Platzi',
    tecnologies: ['Angular', 'Tailwind CSS'],
    pdfUrl: '/WhoAmI/certifications/diploma-angular-tailwind.pdf'
  },
  {
    titleKey: 'certifications.emergent-tecnologies.title',
    date: new Date('2022-01-01'),
    platform: 'EmTech',
    tecnologies: ['Python', 'Google Data Studio'],
    pdfUrl: '/WhoAmI/certifications/https://alumni.emtech.digital/html/emtechs/Emtech-S1291/pub-Emtech-S1291.php'
  },
  {
    titleKey: 'certifications.az900.title',
    date: new Date('2021-08-25'),
    platform: 'Microsoft',
    tecnologies: ['Azure', 'Python', 'Html', 'CSS'],
    pdfUrl: '/WhoAmI/certifications/Azure fundamentals Cert941234328812.pdf'
  },
];