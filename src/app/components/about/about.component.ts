import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TechCarouselComponent } from '../tech-carousel/tech-carousel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimationDirective, TechCarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {}