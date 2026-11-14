import { Component } from '@angular/core';
import { ContactInfoComponent } from './contact-info.component';
import { ContactFormComponent } from './contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactInfoComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {}
