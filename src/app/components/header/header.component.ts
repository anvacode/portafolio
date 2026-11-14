import { Component, HostListener, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'inicio';

  @ViewChild('navLinks') private navLinks?: ElementRef<HTMLElement>;
  @ViewChild('menuToggle') private menuToggle?: ElementRef<HTMLElement>;

  private observer: IntersectionObserver | null = null;

  constructor(
    public themeService: ThemeService,
    public languageService: LanguageService
  ) {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupIntersectionObserver(): void {
    const sections = ['inicio', 'sobre-mi', 'experiencia', 'certificaciones', 'proyectos', 'contacto'];
    
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px'
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        this.observer?.observe(section);
      }
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen) {
      this.closeMenuWithFocus();
    }
  }

  onMenuKeydown(event: KeyboardEvent): void {
    if (!this.isMenuOpen) return;

    if (event.key === 'Tab') {
      const links = Array.from(
        this.navLinks?.nativeElement.querySelectorAll<HTMLAnchorElement>('a') ?? []
      );
      if (links.length === 0) return;

      const first = links[0];
      const last = links[links.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      setTimeout(() => {
        this.navLinks?.nativeElement.querySelector('a')?.focus();
      });
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  private closeMenuWithFocus(): void {
    this.isMenuOpen = false;
    setTimeout(() => this.menuToggle?.nativeElement.focus());
  }
}
