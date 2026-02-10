import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  icon: string;
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
            <svg viewBox="0 0 24 24" fill="currentColor" [innerHTML]="tech.icon"></svg>
          </div>
          <span class="tech-name">{{ tech.name }}</span>
        </div>
        <!-- Duplicado para efecto infinito -->
        <div class="tech-item" *ngFor="let tech of technologies">
          <div class="tech-icon" [style.--tech-color]="tech.color">
            <svg viewBox="0 0 24 24" fill="currentColor" [innerHTML]="tech.icon"></svg>
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
      animation: scroll 30s linear infinite;
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
    }

    .tech-item:hover .tech-icon {
      transform: scale(1.1);
    }

    .tech-icon svg {
      width: 100%;
      height: 100%;
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
      
      .tech-name {
        font-size: 0.8rem;
      }
    }
  `]
})
export class TechCarouselComponent {
  technologies: TechItem[] = [
    { 
      name: 'PHP', 
      color: '#777BB4',
      icon: '<path d="M7.01 10.71h2.06c1.46 0 2.56-.32 3.3-.96.73-.64 1.1-1.53 1.1-2.67 0-1.02-.32-1.79-.96-2.3-.64-.52-1.56-.78-2.76-.78H6.12l.89 6.71zm8.58-3.63c0 1.64-.56 2.93-1.68 3.85-1.12.92-2.67 1.38-4.65 1.38H7.37l-.88 6.69H3.89l2.38-18h5.35c2.07 0 3.63.46 4.69 1.38 1.06.92 1.59 2.27 1.59 4.06l-.21 1.64zm4.66 6.22h2.25c.96 0 1.75-.19 2.36-.56.61-.37 1.02-.91 1.22-1.61.2-.7.23-1.53.09-2.49-.14-.96-.42-1.77-.84-2.43-.42-.66-.96-1.16-1.62-1.5-.66-.34-1.41-.51-2.25-.51h-2.09l-1.13 9.1h2.01zm1.93-12.1c1.58 0 2.92.35 4.02 1.06 1.1.71 1.91 1.68 2.43 2.91.52 1.23.71 2.62.57 4.17-.14 1.55-.52 2.93-1.14 4.14-.62 1.21-1.47 2.17-2.55 2.88-1.08.71-2.35 1.06-3.81 1.06h-5.67l2.85-21.23h3.3v-.01z"/>'
    },
    { 
      name: 'Laravel', 
      color: '#FF2D20',
      icon: '<path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm0 18c-4.549 0-8.25-3.701-8.25-8.25S7.451 3.75 12 3.75s8.25 3.701 8.25 8.25-3.701 8.25-8.25 8.25zm-1.5-13.5v9l7.5-4.5-7.5-4.5z"/>'
    },
    { 
      name: 'Vue.js', 
      color: '#4FC08D',
      icon: '<path d="M12 2L2 19h20L12 2zm0 3.5L18.5 17h-13L12 5.5z"/>'
    },
    { 
      name: 'Angular', 
      color: '#DD0031',
      icon: '<path d="M12 2.5L2 6l1.5 13L12 22l8.5-3L22 6l-10-3.5zm0 2.5l6 12h-2.5l-1.5-3.5h-4l-1.5 3.5H6l6-12zm-2.5 7.5h5L12 7l-2.5 5.5z"/>'
    },
    { 
      name: 'TypeScript', 
      color: '#3178C6',
      icon: '<path d="M2 2h20v20H2V2zm16.5 13.5v-1.8h-3v-1.2h1.8v-1.8h-1.8V9h3V7.2h-5.4v9.6h1.8v-2.1h1.8v1.2h3v1.8h1.8v-1.8h-1.8v.6h-1.2z"/>'
    },
    { 
      name: 'Astro', 
      color: '#FF5D01',
      icon: '<path d="M12 2L2 8.5l1.5 11L12 22l8.5-2.5L22 8.5 12 2zm0 3l7 4.5-1 8-6 1.5-6-1.5-1-8 7-4.5z"/>'
    },
    { 
      name: 'Python', 
      color: '#3776AB',
      icon: '<path d="M12 2c-2 0-4 .5-4 2v2h4v1H6c-2 0-4 1.5-4 4s2 4 4 4h2v-2c0-2 1.5-4 4-4h4c1.5 0 2-1 2-2V4c0-1.5-2-2-4-2zm-2 2c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zM7 10v3c0 2 1.5 4 4 4h4c2 0 4-.5 4-2v-2h-4v-1h6c2 0 4-1.5 4-4s-2-4-4-4h-2v2c0 2-1.5 4-4 4H7zm10 2c-.5 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1z"/>'
    },
    { 
      name: 'Linux', 
      color: '#FCC624',
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"/>'
    },
    { 
      name: 'AWS', 
      color: '#FF9900',
      icon: '<path d="M6.5 12c0-1.5 1-2.5 2.5-2.5.5 0 1 .1 1.5.3l.5-1.5c-.6-.3-1.3-.4-2-.4-2.5 0-4 1.7-4 4s1.5 4 4 4c.7 0 1.4-.1 2-.4l-.5-1.5c-.5.2-1 .3-1.5.3-1.5 0-2.5-1-2.5-2.5zm7.5-4h-2v8h2V8zm4 0h-2v8h2v-3.5c0-1.5 1-2 2-2v-2c-1 0-1.7.5-2 1.5V8z"/>'
    },
    { 
      name: 'MySQL', 
      color: '#4479A1',
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>'
    },
    { 
      name: 'PostgreSQL', 
      color: '#336791',
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>'
    },
    { 
      name: 'MongoDB', 
      color: '#47A248',
      icon: '<path d="M12 2c1.5 3 2 6.5 2 10s-1 6-2 7.5c-1-1.5-2-4-2-7.5s.5-7 2-10z"/>'
    },
    { 
      name: 'Git', 
      color: '#F05032',
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>'
    },
    { 
      name: 'Bash', 
      color: '#4EAA25',
      icon: '<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z"/>'
    },
    { 
      name: 'CCNA', 
      color: '#1BA0D7',
      icon: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>'
    },
    { 
      name: 'Scrum', 
      color: '#6DB33F',
      icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>'
    }
  ];
}
