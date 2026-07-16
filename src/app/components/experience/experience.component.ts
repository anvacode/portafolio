import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { Subscription } from 'rxjs';

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimationDirective],
  template: `
    <section id="experiencia" class="experience">
      <div class="container">
        <h2 class="section-title scroll-animate">{{ 'EXPERIENCE.TITLE' | translate }}</h2>
        
        <div class="experience-grid">
          <div class="experience-card scroll-animate" *ngFor="let exp of experiences; let i = index" [style.transition-delay]="i * 0.15 + 's'">
            <span class="period">{{ exp.period }}</span>
            <div class="card-header">
              <div class="card-info">
                <h3 class="role">{{ exp.role }}</h3>
                <p class="company">{{ exp.company }}</p>
              </div>
            </div>
            <p class="location">{{ exp.location }}</p>
            <div class="divider"></div>
            <ul class="description">
              <li *ngFor="let desc of exp.description">{{ desc }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
      padding: 8rem 2rem;
      background: var(--bg-primary);
    }

    .container {
      max-width: 1200px;
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

    .experience-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .experience-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 2rem;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      min-height: 320px;
      position: relative;
    }

    .experience-card:hover {
      border-color: var(--accent-color);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      transform: translateY(-3px);
    }

    .card-header {
      margin-bottom: 0.75rem;
      padding-right: 8rem;
    }

    .role {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }

    .company {
      font-size: 1rem;
      color: var(--accent-color);
      font-weight: 500;
      margin: 0.25rem 0 0;
    }

    .period {
      position: absolute;
      top: 2rem;
      right: 2rem;
      font-size: 0.875rem;
      color: var(--text-secondary);
      background: var(--bg-primary);
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      white-space: nowrap;
    }

    .location {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }

    .divider {
      width: 100%;
      height: 1px;
      background: var(--border-color);
      margin-bottom: 1rem;
    }

    .description {
      list-style: none;
      padding: 0;
      margin: 0;
      flex-grow: 1;
    }

    .description li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      color: var(--text-secondary);
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .description li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-weight: bold;
    }

    @media (max-width: 968px) {
      .experience {
        padding: 5rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
        margin-bottom: 2.5rem;
      }

      .experience-grid {
        grid-template-columns: 1fr;
      }

      .experience-card {
        padding: 1.5rem;
      }
    }
  `]
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experiences: Experience[] = [];
  private langSubscription: Subscription | null = null;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadExperiences();
    this.langSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadExperiences();
    });
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  private loadExperiences(): void {
    this.translate.get('EXPERIENCE.ITEMS').subscribe((res: Experience[]) => {
      this.experiences = res;
    });
  }
}
