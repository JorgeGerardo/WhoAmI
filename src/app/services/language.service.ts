import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translate = inject(TranslateService);
  private _currentLanguage = signal('en');
  currentLanguage = this._currentLanguage.asReadonly()

  constructor() {
    const browserLang = this.translate.getBrowserLang();
    let language = browserLang?.match(/en|es/) ? browserLang : 'es'
    this.translate.use(language);
    this._currentLanguage.set(language);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this._currentLanguage.set(lang);
  }

}
