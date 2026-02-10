import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="nav">
        <a href="#inicio" class="logo">Portfolio</a>
        
        <div class="nav-links" [class.active]="isMenuOpen">
          <a href="#inicio" (click)="closeMenu()">{{ 'HEADER.HOME' | translate }}</a>
          <a href="#sobre-mi" (click)="closeMenu()">{{ 'HEADER.ABOUT' | translate }}</a>
          <a href="#proyectos" (click)="closeMenu()">{{ 'HEADER.PROJECTS' | translate }}</a>
          <a href="#contacto" (click)="closeMenu()">{{ 'HEADER.CONTACT' | translate }}</a>
        </div>

        <div class="controls">
          <button 
            class="control-btn" 
            (click)="toggleTheme()"
            [attr.aria-label]="themeService.theme() === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          >
            <span class="icon">{{ themeService.theme() === 'dark' ? '☀️' : '🌙' }}</span>
          </button>
          
          <button 
            class="control-btn language-btn" 
            (click)="toggleLanguage()"
          >
            {{ languageService.currentLang() === 'es' ? 'EN' : 'ES' }}
          </button>

          <button 
            class="menu-toggle" 
            (click)="toggleMenu()"
            [class.active]="isMenuOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1rem 2rem;
      background: transparent;
      transition: all 0.3s ease;
    }

    .header.scrolled {
      background: var(--bg-primary);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent-color);
      text-decoration: none;
      letter-spacing: -0.5px;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-links a {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 500;
      position: relative;
      padding: 0.5rem 0;
      transition: color 0.3s ease;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-color);
      transition: width 0.3s ease;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-links a:hover {
      color: var(--accent-color);
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .control-btn {
      background: transparent;
      border: 1px solid var(--border-color);
      color: var(--text-primary);
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .control-btn:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: white;
    }

    .icon {
      font-size: 1.1rem;
    }

    .language-btn {
      font-weight: 600;
      min-width: 40px;
    }

    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .menu-toggle span {
      display: block;
      width: 25px;
      height: 2px;
      background: var(--text-primary);
      transition: all 0.3s ease;
    }

    .menu-toggle.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    .menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: var(--bg-primary);
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }

      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }

      .menu-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  constructor(
    public themeService: ThemeService,
    public languageService: LanguageService
  ) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}