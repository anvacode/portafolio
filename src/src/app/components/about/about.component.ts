import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TechCarouselComponent } from '../tech-carousel/tech-carousel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimationDirective, TechCarouselComponent],
  template: `
    <section id="sobre-mi" class="about">
      <div class="container">
        <!-- Primera fila: Foto y About -->
        <div class="about-wrapper">
          <div class="about-visual scroll-animate">
            <div class="profile-container">
              <div class="profile-glow"></div>
              <div class="profile-image">
                <img src="assets/images/foto-perfil.jpg" alt="Derwin Andrés Vacca Ropero">
              </div>
              <div class="profile-ring"></div>
            </div>
            <div class="social-links">
              <a href="https://github.com/anvacode" target="_blank" class="social-btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/derwin-andrés-vacca-ropero-355210270" target="_blank" class="social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div class="about-info scroll-animate delay-1">
            <h2 class="section-title">{{ 'ABOUT.TITLE' | translate }}</h2>
            <div class="about-card">
              <p class="description">{{ 'ABOUT.DESCRIPTION' | translate }}</p>
            </div>
          </div>
        </div>
        
        <!-- Segunda fila: Carrusel de tecnologías -->
        <div class="tech-section scroll-animate delay-2">
          <h3 class="tech-section-title">
            <span class="tech-icon">⚡</span>
            {{ 'ABOUT.TECHNOLOGIES' | translate }}
          </h3>
          <app-tech-carousel></app-tech-carousel>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 8rem 2rem;
      background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
      position: relative;
      overflow: hidden;
    }

    .about::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%);
      pointer-events: none;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .about-wrapper {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 4rem;
      align-items: start;
    }

    .about-visual {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      position: sticky;
      top: 100px;
    }

    .profile-container {
      position: relative;
      width: 280px;
      height: 280px;
    }

    .profile-glow {
      position: absolute;
      inset: -10px;
      background: linear-gradient(135deg, var(--accent-color), #ff8585, #ff6b6b);
      border-radius: 50%;
      filter: blur(20px);
      opacity: 0.5;
      animation: pulse 3s ease-in-out infinite;
    }

    .profile-image {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid transparent;
      background: linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box,
                  linear-gradient(135deg, var(--accent-color), #ff8585) border-box;
      box-shadow: 0 20px 60px rgba(255, 107, 107, 0.3);
      z-index: 2;
    }

    .profile-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
      transition: transform 0.5s ease;
    }

    .profile-container:hover .profile-image img {
      transform: scale(1.05);
    }

    .profile-ring {
      position: absolute;
      inset: -20px;
      border: 2px dashed rgba(255, 107, 107, 0.3);
      border-radius: 50%;
      animation: spin 20s linear infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--bg-primary);
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      transition: all 0.3s ease;
    }

    .social-btn:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
    }

    .social-btn svg {
      width: 24px;
      height: 24px;
    }

    .about-info {
      padding-top: 2rem;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 2rem;
      background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-color) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .about-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border-color);
      border-radius: 24px;
      padding: 2.5rem;
      backdrop-filter: blur(10px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    }

    .description {
      font-size: 1.2rem;
      line-height: 1.9;
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid var(--border-color);
    }

    .tech-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .tech-icon {
      font-size: 1.5rem;
    }

    .technologies {
      margin-top: 2rem;
    }

    .tech-section {
      margin-top: 4rem;
      padding-top: 3rem;
      border-top: 1px solid var(--border-color);
    }

    .tech-section-title {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      text-align: center;
    }

    .tech-section-title .tech-icon {
      font-size: 1.8rem;
    }

    @media (max-width: 968px) {
      .about-wrapper {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .about-visual {
        position: relative;
        top: 0;
      }

      .profile-container {
        width: 220px;
        height: 220px;
      }

      .about-info {
        padding-top: 0;
      }

      .section-title {
        font-size: 2.2rem;
        text-align: center;
      }

      .about-card {
        padding: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .profile-container {
        width: 180px;
        height: 180px;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .about-card {
        padding: 1.25rem;
      }
    }
  `]
})
export class AboutComponent {}