import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { Subscription } from 'rxjs';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
  pdf: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimationDirective, SafeUrlPipe],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent implements OnInit, OnDestroy {
  certifications: Certification[] = [];
  selectedCert: Certification | null = null;
  private langSubscription: Subscription | null = null;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadCertifications();
    this.langSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadCertifications();
    });
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  private loadCertifications(): void {
    this.translate.get('CERTIFICATIONS.ITEMS').subscribe((res: Certification[]) => {
      this.certifications = res;
    });
  }

  openCert(cert: Certification): void {
    this.selectedCert = cert;
    document.body.style.overflow = 'hidden';
  }

  closeCert(): void {
    this.selectedCert = null;
    document.body.style.overflow = '';
  }
}
