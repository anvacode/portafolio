import { Injectable, signal, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'portfolio-language';
  currentLang = signal<Language>(this.getStoredLanguage());

  constructor(private translate: TranslateService) {
    const lang = this.currentLang();
    this.translate.setDefaultLang('es');
    this.translate.use(lang);

    effect(() => {
      const currentLang = this.currentLang();
      localStorage.setItem(this.STORAGE_KEY, currentLang);
      this.translate.use(currentLang);
    });
  }

  private getStoredLanguage(): Language {
    if (typeof window === 'undefined') return 'es';
    return (localStorage.getItem(this.STORAGE_KEY) as Language) || 'es';
  }

  toggleLanguage(): void {
    this.currentLang.update(current => current === 'es' ? 'en' : 'es');
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
  }
}