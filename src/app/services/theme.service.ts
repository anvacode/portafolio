import { Injectable, signal, effect } from '@angular/core';

type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'portfolio-theme';
  theme = signal<Theme>(this.getStoredTheme());

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      localStorage.setItem(this.STORAGE_KEY, currentTheme);
      this.applyTheme(currentTheme);
    });
  }

  private getStoredTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem(this.STORAGE_KEY) as Theme) || 'dark';
  }

  private applyTheme(theme: Theme): void {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(): void {
    this.theme.update(current => current === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }
}