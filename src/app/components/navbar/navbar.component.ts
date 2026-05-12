import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  translate = inject(TranslateService);

  constructor() {
    this.translate.use('en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

}
