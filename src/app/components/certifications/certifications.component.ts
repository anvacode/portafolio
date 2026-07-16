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
  template: `
    <section id="certificaciones" class="certifications">
      <div class="container">
        <h2 class="section-title scroll-animate">{{ 'CERTIFICATIONS.TITLE' | translate }}</h2>
        
        <div class="certs-grid">
          <div class="cert-card scroll-animate" *ngFor="let cert of certifications; let i = index" [style.transition-delay]="i * 0.1 + 's'" (click)="openCert(cert)">
            <div class="cert-icon">
              <span>{{ cert.icon }}</span>
            </div>
            <h3 class="cert-name">{{ cert.name }}</h3>
            <p class="cert-issuer">{{ cert.issuer }}</p>
            <p class="cert-date" *ngIf="cert.date">{{ cert.date }}</p>
            <span class="view-badge">Ver certificado</span>
          </div>
        </div>
      </div>
    </section>

    <div class="modal-overlay" [class.visible]="selectedCert" (click)="closeCert()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3 class="modal-title">{{ selectedCert?.name }}</h3>
          <div class="modal-actions">
            <a [href]="selectedCert?.pdf" download class="download-btn" aria-label="Descargar certificado">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
            <button class="close-btn" (click)="closeCert()" aria-label="Cerrar">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        <div class="modal-body">
          <iframe *ngIf="selectedCert" [src]="'assets/' + selectedCert.pdf | safeUrl" class="pdf-viewer"></iframe>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .certifications {
      padding: 8rem 2rem;
      background: var(--bg-secondary);
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

    .certs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .cert-card {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
    }

    .cert-card:hover {
      transform: translateY(-5px);
      border-color: var(--accent-color);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .cert-icon {
      width: 60px;
      height: 60px;
      margin: 0 auto 1rem;
      background: var(--bg-secondary);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
    }

    .cert-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0 0 0.5rem;
      line-height: 1.3;
    }

    .cert-issuer {
      font-size: 0.9rem;
      color: var(--accent-color);
      margin: 0 0 0.25rem;
    }

    .cert-date {
      font-size: 0.8rem;
      color: var(--text-secondary);
      margin: 0;
    }

    .view-badge {
      display: inline-block;
      margin-top: 1rem;
      font-size: 0.75rem;
      color: var(--accent-color);
      background: rgba(255, 107, 107, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      border: 1px solid rgba(255, 107, 107, 0.2);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .cert-card:hover .view-badge {
      opacity: 1;
    }

    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      padding: 2rem;
    }

    .modal-overlay.visible {
      opacity: 1;
      visibility: visible;
    }

    .modal-content {
      background: var(--bg-primary);
      border-radius: 16px;
      width: 100%;
      max-width: 900px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transform: scale(0.95);
      transition: transform 0.3s ease;
    }

    .modal-overlay.visible .modal-content {
      transform: scale(1);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 2rem;
      border-bottom: 1px solid var(--border-color);
    }

    .modal-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-primary);
      margin: 0;
    }

    .modal-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .download-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      color: var(--text-primary);
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .download-btn:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: white;
    }

    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      color: var(--text-primary);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .close-btn:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
      color: white;
    }

    .modal-body {
      flex: 1;
      overflow: hidden;
    }

    .pdf-viewer {
      width: 100%;
      height: 70vh;
      border: none;
    }

    @media (max-width: 768px) {
      .certifications {
        padding: 5rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .certs-grid {
        grid-template-columns: 1fr;
      }

      .cert-card {
        padding: 1.5rem;
      }

      .modal-overlay {
        padding: 1rem;
      }

      .modal-content {
        max-height: 95vh;
      }

      .modal-header {
        padding: 1rem 1.5rem;
      }

      .modal-title {
        font-size: 1rem;
      }

      .pdf-viewer {
        height: 60vh;
      }
    }
  `]
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
