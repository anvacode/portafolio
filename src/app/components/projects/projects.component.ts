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
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
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
      'biblioteca',
      'warehouse',
      'autotronicars_soa_2',
      'portafolio'
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