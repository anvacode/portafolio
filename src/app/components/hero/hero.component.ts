import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(public languageService: LanguageService) {}

  get cvUrl(): string {
    return `assets/cv/cv-derwin-vacca-${this.languageService.currentLang()}.pdf`;
  }

  get cvFileName(): string {
    return `CV_Derwin_Vacca_${this.languageService.currentLang().toUpperCase()}.pdf`;
  }
}
