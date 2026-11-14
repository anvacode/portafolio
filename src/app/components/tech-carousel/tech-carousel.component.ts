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
  templateUrl: './tech-carousel.component.html',
  styleUrl: './tech-carousel.component.scss'
})
export class TechCarouselComponent {
  technologies: TechItem[] = [
    { name: 'React', iconClass: 'devicon-react-original colored', color: '#61DAFB' },
    { name: 'Kotlin', iconClass: 'devicon-kotlin-plain colored', color: '#7F52FF' },
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
