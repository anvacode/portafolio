import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from 'emailjs-com';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, ScrollAnimationDirective],
  template: `
    <section id="contacto" class="contact">
      <div class="contact-wrapper">
        <div class="contact-info scroll-animate">
          <h2 class="section-title">{{ 'CONTACT.TITLE' | translate }}</h2>
          <p class="subtitle">{{ 'CONTACT.SUBTITLE' | translate }}</p>
          <div class="info-items">
            <div class="info-item">
              <span class="info-icon">💼</span>
              <div class="info-text">
                <span class="info-label">{{ 'CONTACT.INFO.AVAILABILITY_LABEL' | translate }}</span>
                <span class="info-value">{{ 'CONTACT.INFO.AVAILABILITY_VALUE' | translate }}</span>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">🌎</span>
              <div class="info-text">
                <span class="info-label">{{ 'CONTACT.INFO.LOCATION_LABEL' | translate }}</span>
                <span class="info-value">{{ 'CONTACT.INFO.LOCATION_VALUE' | translate }}</span>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">⚡</span>
              <div class="info-text">
                <span class="info-label">{{ 'CONTACT.INFO.RESPONSE_LABEL' | translate }}</span>
                <span class="info-value">{{ 'CONTACT.INFO.RESPONSE_VALUE' | translate }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper scroll-animate delay-1">
          <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-row">
              <div class="form-group floating">
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  [disabled]="isSubmitting"
                  placeholder=" "
                />
                <label for="name">{{ 'CONTACT.NAME' | translate }}</label>
                <span class="focus-border"></span>
              </div>

              <div class="form-group floating">
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  email
                  [disabled]="isSubmitting"
                  placeholder=" "
                />
                <label for="email">{{ 'CONTACT.EMAIL' | translate }}</label>
                <span class="focus-border"></span>
              </div>
            </div>

            <div class="form-group floating textarea-group">
              <textarea
                id="message"
                name="message"
                [(ngModel)]="formData.message"
                required
                rows="3"
                maxlength="1000"
                [disabled]="isSubmitting"
                placeholder=" "
              ></textarea>
              <label for="message">{{ 'CONTACT.MESSAGE' | translate }}</label>
              <span class="focus-border"></span>
              <span class="char-count">{{ formData.message.length }}/1000</span>
            </div>

            <button 
              type="submit" 
              class="submit-btn"
              [disabled]="!contactForm.form.valid || isSubmitting"
              [class.loading]="isSubmitting"
              [class.success]="showSuccess"
            >
              <span class="btn-content" *ngIf="!isSubmitting && !showSuccess">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                {{ 'CONTACT.SEND' | translate }}
              </span>
              <span class="btn-content" *ngIf="isSubmitting">
                <span class="spinner"></span>
                {{ 'CONTACT.SENDING' | translate }}
              </span>
              <span class="btn-content" *ngIf="showSuccess">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {{ 'CONTACT.SUCCESS' | translate }}
              </span>
            </button>
          </form>

          <div class="message error" *ngIf="showError">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            {{ 'CONTACT.ERROR' | translate }}
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 8rem 2rem;
      background: var(--bg-secondary);
    }

    .contact-wrapper {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info {
      position: sticky;
      top: 100px;
    }

    .section-title {
      font-size: 2.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .section-title::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background: var(--accent-color);
      margin: 1rem 0 0;
      border-radius: 2px;
    }

    .subtitle {
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .info-items {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    .info-text {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .info-icon {
      width: 50px;
      height: 50px;
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      flex-shrink: 0;
    }

    .info-label {
      font-size: 0.8rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .info-value {
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-primary);
    }

    .contact-form-wrapper {
      background: var(--bg-primary);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      padding: 2.5rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .form-group {
      position: relative;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 1.25rem 1rem 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      background: var(--bg-secondary);
      color: var(--text-primary);
      font-family: inherit;
      font-size: 1rem;
      transition: border-color 0.3s ease;
      outline: none;
    }

    .form-group textarea {
      min-height: 120px;
      resize: vertical;
    }

    .form-group label {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-secondary);
      font-size: 1rem;
      pointer-events: none;
      transition: all 0.2s ease;
      padding: 0 0.25rem;
    }

    .textarea-group label {
      top: 1.25rem;
      transform: none;
    }

    .form-group input:focus ~ label,
    .form-group input:not(:placeholder-shown) ~ label,
    .form-group textarea:focus ~ label,
    .form-group textarea:not(:placeholder-shown) ~ label {
      top: 0;
      transform: translateY(-50%);
      font-size: 0.75rem;
      color: var(--accent-color);
      background: var(--bg-secondary);
      font-weight: 500;
    }

    .textarea-group textarea:focus ~ label,
    .textarea-group textarea:not(:placeholder-shown) ~ label {
      top: -0.5rem;
      transform: none;
    }

    .focus-border {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: var(--accent-color);
      transition: all 0.3s ease;
    }

    .form-group input:focus ~ .focus-border,
    .form-group textarea:focus ~ .focus-border {
      left: 0;
      width: 100%;
    }

    .char-count {
      position: absolute;
      bottom: 0.75rem;
      right: 1rem;
      font-size: 0.75rem;
      color: var(--text-secondary);
      opacity: 0.6;
    }

    .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: var(--accent-color);
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      min-height: 52px;
    }

    .submit-btn:hover:not(:disabled) {
      background: var(--accent-hover);
      transform: translateY(-2px);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .submit-btn.success {
      background: #22c55e;
    }

    .spinner {
      width: 18px;
      height: 18px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .message {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem;
      border-radius: 10px;
      margin-top: 1.5rem;
      font-size: 0.95rem;
      animation: slideIn 0.3s ease;
    }

    .message.error {
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.2);
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 968px) {
      .contact { padding: 5rem 1.5rem; }
      .contact-wrapper { grid-template-columns: 1fr; gap: 2.5rem; }
      .contact-info { position: relative; top: 0; }
      .section-title { font-size: 1.75rem; }
      .contact-form-wrapper { padding: 2rem; }
    }

    @media (max-width: 600px) {
      .form-row { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  showSuccess = false;
  showError = false;

  private readonly serviceId = environment.emailjs.serviceId;
  private readonly templateId = environment.emailjs.templateId;
  private readonly publicKey = environment.emailjs.publicKey;

  onSubmit(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.showSuccess = false;
    this.showError = false;

    const templateParams = {
      to_name: 'Derwin',
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message,
      reply_to: this.formData.email
    };

    emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey)
      .then(() => {
        this.showSuccess = true;
        this.formData = { name: '', email: '', message: '' };
        setTimeout(() => this.showSuccess = false, 5000);
      })
      .catch(() => {
        this.showError = true;
        setTimeout(() => this.showError = false, 5000);
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}
