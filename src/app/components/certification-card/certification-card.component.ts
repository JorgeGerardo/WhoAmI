import { Component, inject, input } from '@angular/core';
import { Certification } from '../../interfaces/certification';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-certification-card',
  imports: [TranslateModule],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss'
})
export class CertificationCardComponent {
  certification = input.required<Certification>();
  language = inject(LanguageService);

  get formattedDate(): string {

    const currentLang = this.language.currentLanguage();

    return new Date(this.certification().date)
      .toLocaleDateString(currentLang, {
        year: 'numeric',
        month: 'long'
      });

  }
}
