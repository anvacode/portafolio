import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="inicio" class="hero">
      <div class="hero-content">
        <p class="greeting">{{ 'HERO.GREETING' | translate }}</p>
        <h1 class="title">
          <span class="highlight">Derwin Andrés Vacca Ropero</span>
        </h1>
        <h2 class="subtitle">{{ 'HERO.TITLE' | translate }}</h2>
        <p class="description">{{ 'HERO.SUBTITLE' | translate }}</p>
        <div class="cta-buttons">
          <a href="#proyectos" class="cta-button">
            {{ 'HERO.CTA' | translate }}
            <span class="arrow">→</span>
          </a>
          <a href="assets/cv/cv-derwin-vacca.pdf" download class="cta-button secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Descargar CV
          </a>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <span class="scroll-text">Scroll</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      position: relative;
      background: var(--bg-primary);
    }

    .hero-content {
      text-align: center;
      max-width: 800px;
      animation: fadeInUp 1s ease-out;
    }

    .greeting {
      font-size: 1.25rem;
      color: var(--accent-color);
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .title {
      font-size: clamp(3rem, 8vw, 5rem);
      font-weight: 700;
      margin-bottom: 0.5rem;
      line-height: 1.1;
    }

    .highlight {
      background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-hover) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: clamp(1.5rem, 4vw, 2rem);
      color: var(--text-secondary);
      font-weight: 400;
      margin-bottom: 1.5rem;
    }

    .description {
      font-size: 1.125rem;
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--accent-color);
      color: white;
      padding: 1rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    }

    .cta-button:hover {
      background: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    }

    .cta-button.secondary {
      background: transparent;
      color: var(--text-primary);
      border: 2px solid var(--accent-color);
      box-shadow: none;
    }

    .cta-button.secondary:hover {
      background: var(--accent-color);
      color: white;
    }

    .arrow {
      transition: transform 0.3s ease;
    }

    .cta-button:hover .arrow {
      transform: translateX(4px);
    }

    .scroll-indicator {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      opacity: 0.6;
      animation: bounce 2s infinite;
    }

    .mouse {
      width: 26px;
      height: 40px;
      border: 2px solid var(--text-secondary);
      border-radius: 13px;
      position: relative;
    }

    .wheel {
      width: 4px;
      height: 8px;
      background: var(--accent-color);
      border-radius: 2px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 2s infinite;
    }

    .scroll-text {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--text-secondary);
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }

    @keyframes scroll {
      0% {
        opacity: 1;
        top: 8px;
      }
      100% {
        opacity: 0;
        top: 20px;
      }
    }

    @media (max-width: 768px) {
      .scroll-indicator {
        display: none;
      }
    }
  `]
})
export class HeroComponent {}