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
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
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
