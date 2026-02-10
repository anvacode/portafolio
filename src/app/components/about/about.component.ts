import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="sobre-mi" class="about">
      <div class="container">
        <h2 class="section-title">{{ 'ABOUT.TITLE' | translate }}</h2>
        
        <div class="about-content">
          <div class="about-text">
            <p class="description">{{ 'ABOUT.DESCRIPTION' | translate }}</p>
          </div>

          <div class="technologies">
            <h3>{{ 'ABOUT.TECHNOLOGIES' | translate }}</h3>
            <div class="tech-grid">
              <div class="tech-item" *ngFor="let tech of technologies">
                <span class="tech-name">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 8rem 2rem;
      background: var(--bg-secondary);
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 3rem;
      text-align: center;
      color: var(--text-primary);
    }

    .section-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: var(--accent-color);
      margin: 1rem auto 0;
      border-radius: 2px;
    }

    .about-content {
      display: grid;
      gap: 3rem;
    }

    .about-text {
      text-align: center;
    }

    .description {
      font-size: 1.125rem;
      line-height: 1.8;
      color: var(--text-secondary);
      max-width: 700px;
      margin: 0 auto;
    }

    .technologies h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      text-align: center;
      color: var(--text-primary);
    }

    .tech-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .tech-item {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      padding: 0.75rem 1.5rem;
      border-radius: 50px;
      transition: all 0.3s ease;
    }

    .tech-item:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
      transform: translateY(-2px);
    }

    .tech-item:hover .tech-name {
      color: white;
    }

    .tech-name {
      font-weight: 500;
      color: var(--text-primary);
      transition: color 0.3s ease;
    }

    @media (max-width: 768px) {
      .about {
        padding: 5rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `]
})
export class AboutComponent {
  technologies = [
    'PHP', 'Laravel', 'Vue.js', 'Angular', 'JavaScript', 'TypeScript', 'Astro',
    'Python', 'HTML5', 'CSS3', 'Bash', 'Linux', 'Ubuntu Server',
    'Git', 'MySQL', 'PostgreSQL', 'MariaDB', 'MongoDB', 'phpMyAdmin',
    'AWS', 'CCNA', 'Scrum'
  ];
}