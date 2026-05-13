import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  translate = inject(TranslateService);

  constructor() {
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(
      browserLang?.match(/en|es/) ? browserLang : 'es'
    );
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

}
