import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translate = inject(TranslateService);

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
