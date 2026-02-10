import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  iconClass: string;
  color: string;
}

@Component({
  selector: 'app-tech-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tech-carousel-container">
      <div class="carousel-track">
        <div class="tech-item" *ngFor="let tech of technologies">
          <div class="tech-icon" [style.--tech-color]="tech.color">
            <i [class]="tech.iconClass"></i>
          </div>
          <span class="tech-name">{{ tech.name }}</span>
        </div>
        <!-- Duplicado para efecto infinito -->
        <div class="tech-item" *ngFor="let tech of technologies">
          <div class="tech-icon" [style.--tech-color]="tech.color">
            <i [class]="tech.iconClass"></i>
          </div>
          <span class="tech-name">{{ tech.name }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tech-carousel-container {
      overflow: hidden;
      padding: 2rem 0;
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    .carousel-track {
      display: flex;
      gap: 2rem;
      animation: scroll 35s linear infinite;
      width: max-content;
    }

    .carousel-track:hover {
      animation-play-state: paused;
    }

    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .tech-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      padding: 1.5rem 2rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      transition: all 0.3s ease;
      min-width: 120px;
    }

    .tech-item:hover {
      transform: translateY(-5px);
      background: rgba(255, 107, 107, 0.05);
      border-color: var(--tech-color);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px var(--tech-color);
    }

    .tech-icon {
      width: 50px;
      height: 50px;
      color: var(--tech-color);
      transition: transform 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tech-item:hover .tech-icon {
      transform: scale(1.1);
    }

    .tech-icon i {
      font-size: 40px;
    }

    .tech-name {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-primary);
      text-align: center;
    }

    @media (max-width: 768px) {
      .carousel-track {
        gap: 1rem;
      }
      
      .tech-item {
        padding: 1rem 1.5rem;
        min-width: 100px;
      }
      
      .tech-icon {
        width: 40px;
        height: 40px;
      }
      
      .tech-icon i {
        font-size: 32px;
      }
      
      .tech-name {
        font-size: 0.8rem;
      }
    }
  `]
})
export class TechCarouselComponent {
  technologies: TechItem[] = [
    { name: 'PHP', iconClass: 'devicon-php-plain colored', color: '#777BB4' },
    { name: 'Laravel', iconClass: 'devicon-laravel-original colored', color: '#FF2D20' },
    { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored', color: '#4FC08D' },
    { name: 'Angular', iconClass: 'devicon-angularjs-plain colored', color: '#DD0031' },
    { name: 'Java', iconClass: 'devicon-java-plain colored', color: '#007396' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored', color: '#3178C6' },
    { name: 'Astro', iconClass: 'devicon-astro-plain colored', color: '#FF5D01' },
    { name: 'Python', iconClass: 'devicon-python-plain colored', color: '#3776AB' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored', color: '#F7DF1E' },
    { name: 'Linux', iconClass: 'devicon-linux-plain colored', color: '#FCC624' },
    { name: 'AWS', iconClass: 'devicon-amazonwebservices-original colored', color: '#FF9900' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain colored', color: '#4479A1' },
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored', color: '#336791' },
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored', color: '#47A248' },
    { name: 'Git', iconClass: 'devicon-git-plain colored', color: '#F05032' },
    { name: 'Bash', iconClass: 'devicon-bash-plain colored', color: '#4EAA25' },
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored', color: '#339933' },
    { name: 'Tailwind', iconClass: 'devicon-tailwindcss-original colored', color: '#06B6D4' }
  ];
}
