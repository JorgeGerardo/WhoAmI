import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  paragraph = [
    'aboutme.vision',
    'aboutme.basis',
    'aboutme.infrastructure',
    'aboutme.electronic',
    'aboutme.cloud',
    'aboutme.communication',
    'aboutme.professional',
    'aboutme.greatest',
  ]
}
