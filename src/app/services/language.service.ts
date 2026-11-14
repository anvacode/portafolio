import { Injectable, signal, effect, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'portfolio-language';
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  currentLang = signal<Language>(this.getStoredLanguage());

  constructor(private translate: TranslateService) {
    const lang = this.currentLang();
    this.translate.setDefaultLang('es');
    this.translate.use(lang);

    effect(() => {
      const currentLang = this.currentLang();
      localStorage.setItem(this.STORAGE_KEY, currentLang);
      this.translate.use(currentLang);
      this.updatePageMeta();
    });
  }

  private getStoredLanguage(): Language {
    if (typeof window === 'undefined') return 'es';
    return (localStorage.getItem(this.STORAGE_KEY) as Language) || 'es';
  }

  private updatePageMeta(): void {
    this.translate.get('SEO.TITLE').subscribe((title: string) => {
      this.title.setTitle(title);
    });
    this.translate.get('SEO.DESCRIPTION').subscribe((description: string) => {
      this.meta.updateTag({ name: 'description', content: description });
    });
  }

  toggleLanguage(): void {
    this.currentLang.update(current => current === 'es' ? 'en' : 'es');
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
  }
}
