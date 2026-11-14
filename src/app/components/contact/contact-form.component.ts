import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, ScrollAnimationDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
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
  private readonly recipientName = environment.emailjs.recipientName;

  onSubmit(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.showSuccess = false;
    this.showError = false;

    const templateParams = {
      to_name: this.recipientName,
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message,
      reply_to: this.formData.email
    };

    emailjs.send(this.serviceId, this.templateId, templateParams, { publicKey: this.publicKey })
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
