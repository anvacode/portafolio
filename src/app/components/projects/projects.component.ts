import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GithubService } from '../../services/github.service';
import { Project } from '../../models/project.model';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimationDirective],
  template: `
    <section id="proyectos" class="projects">
      <div class="container">
        <h2 class="section-title scroll-animate">{{ 'PROJECTS.TITLE' | translate }}</h2>
        
        <div class="projects-grid" *ngIf="!isLoading">
          <div class="project-card scroll-animate" *ngFor="let project of projects; let i = index" [style.transition-delay]="i * 0.1 + 's'">
            <div class="project-header">
              <h3 class="project-title">{{ project.name }}</h3>
              <div class="project-stats">
                <span class="stars">⭐ {{ project.stargazers_count }}</span>
                <span class="language" *ngIf="project.language">{{ project.language }}</span>
              </div>
            </div>
            
            <p class="project-description">
              {{ project.description || 'Sin descripción' }}
            </p>

            <div class="project-topics" *ngIf="project.topics?.length">
              <span class="topic" *ngFor="let topic of project.topics.slice(0, 4)">
                {{ topic }}
              </span>
            </div>

            <div class="project-links">
              <a [href]="project.html_url" target="_blank" rel="noopener noreferrer" class="link-btn">
                {{ 'PROJECTS.VIEW_CODE' | translate }}
              </a>
              <a 
                *ngIf="project.homepage" 
                [href]="project.homepage" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="link-btn primary"
              >
                {{ 'PROJECTS.VIEW_PROJECT' | translate }}
              </a>
            </div>
          </div>
        </div>

        <div class="loading" *ngIf="isLoading">
          <div class="spinner"></div>
          <p>{{ 'PROJECTS.LOADING' | translate }}</p>
        </div>

        <div class="empty-state" *ngIf="!isLoading && projects.length === 0">
          <p>No hay proyectos para mostrar.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 2rem;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border-color: var(--accent-color);
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .project-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }

    .project-stats {
      display: flex;
      gap: 1rem;
      font-size: 0.875rem;
      color: var(--text-secondary);
    }

    .stars {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .language {
      background: var(--bg-primary);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }

    .project-description {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      flex-grow: 1;
    }

    .project-topics {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .topic {
      font-size: 0.75rem;
      background: var(--bg-primary);
      color: var(--accent-color);
      padding: 0.25rem 0.75rem;
      border-radius: 50px;
      border: 1px solid var(--border-color);
    }

    .project-links {
      display: flex;
      gap: 1rem;
    }

    .link-btn {
      flex: 1;
      text-align: center;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.875rem;
      transition: all 0.3s ease;
      border: 1px solid var(--border-color);
      color: var(--text-primary);
      background: transparent;
    }

    .link-btn:hover {
      background: var(--bg-primary);
      border-color: var(--accent-color);
      color: var(--accent-color);
    }

    .link-btn.primary {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: white;
    }

    .link-btn.primary:hover {
      background: var(--accent-hover);
    }

    .loading {
      text-align: center;
      padding: 4rem;
    }

    .spinner {
      width: 50px;
      height: 50px;
      border: 3px solid var(--border-color);
      border-top-color: var(--accent-color);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .empty-state {
      text-align: center;
      padding: 4rem;
      color: var(--text-secondary);
    }

    @media (max-width: 768px) {
      .projects {
        padding: 5rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  isLoading = true;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    // Configura tu nombre de usuario de GitHub
    this.githubService.setUsername('anvacode');
    
    // Lista de repositorios específicos que quieres mostrar
    const reposToShow = [
      'english-ai-learning-app',
      'agrigest',
      'autotronicars',
      'biblioteca',
      'educational-website'
    ];

    this.githubService.getSpecificRepositories(reposToShow).subscribe({
      next: (projects) => {
        this.projects = projects;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading projects:', error);
        this.isLoading = false;
      }
    });
  }
}