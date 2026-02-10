import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  template: `
    <section id="contacto" class="contact">
      <div class="container">
        <h2 class="section-title">{{ 'CONTACT.TITLE' | translate }}</h2>
        <p class="subtitle">{{ 'CONTACT.SUBTITLE' | translate }}</p>
        
        <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
          <div class="form-group">
            <label for="name">{{ 'CONTACT.NAME' | translate }}</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="formData.name"
              required
              [disabled]="isSubmitting"
            />
          </div>

          <div class="form-group">
            <label for="email">{{ 'CONTACT.EMAIL' | translate }}</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="formData.email"
              required
              email
              [disabled]="isSubmitting"
            />
          </div>

          <div class="form-group">
            <label for="message">{{ 'CONTACT.MESSAGE' | translate }}</label>
            <textarea
              id="message"
              name="message"
              [(ngModel)]="formData.message"
              required
              rows="5"
              [disabled]="isSubmitting"
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="submit-btn"
            [disabled]="!contactForm.form.valid || isSubmitting"
          >
            <span *ngIf="!isSubmitting">{{ 'CONTACT.SEND' | translate }}</span>
            <span *ngIf="isSubmitting">{{ 'CONTACT.SENDING' | translate }}</span>
          </button>
        </form>

        <div class="message success" *ngIf="showSuccess">
          {{ 'CONTACT.SUCCESS' | translate }}
        </div>

        <div class="message error" *ngIf="showError">
          {{ 'CONTACT.ERROR' | translate }}
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 8rem 2rem;
      background: var(--bg-secondary);
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
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

    .subtitle {
      text-align: center;
      color: var(--text-secondary);
      margin-bottom: 3rem;
      font-size: 1.125rem;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 500;
      color: var(--text-primary);
      font-size: 0.9rem;
    }

    .form-group input,
    .form-group textarea {
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      background: var(--bg-primary);
      color: var(--text-primary);
      font-family: inherit;
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--accent-color);
      box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
    }

    .form-group input:disabled,
    .form-group textarea:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      background: var(--accent-color);
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 1rem;
    }

    .submit-btn:hover:not(:disabled) {
      background: var(--accent-hover);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .message {
      text-align: center;
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1.5rem;
      animation: slideIn 0.3s ease;
    }

    .message.success {
      background: rgba(34, 197, 94, 0.1);
      color: #22c55e;
      border: 1px solid rgba(34, 197, 94, 0.2);
    }

    .message.error {
      background: rgba(239, 68, 68, 0.1);
      color: #ef4444;
      border: 1px solid rgba(239, 68, 68, 0.2);
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .contact {
        padding: 5rem 1.5rem;
      }

      .section-title {
        font-size: 2rem;
      }
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

  // Configuración de EmailJS
  private readonly SERVICE_ID = 'service_kv4c1ga';
  private readonly TEMPLATE_ID = 'template_l9y8qdt';
  private readonly USER_ID = '5gOonvtnv4v37Vf5b';

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

    console.log('Enviando datos:', templateParams);

    emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, this.USER_ID)
      .then((response) => {
        console.log('Email enviado:', response);
        this.showSuccess = true;
        this.formData = { name: '', email: '', message: '' };
        setTimeout(() => this.showSuccess = false, 5000);
      })
      .catch((error) => {
        console.error('Error detallado:', error);
        this.showError = true;
        setTimeout(() => this.showError = false, 5000);
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }
}