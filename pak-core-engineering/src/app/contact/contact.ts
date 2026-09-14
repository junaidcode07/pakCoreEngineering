import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  statusMessage = '';
  statusType: 'success' | 'error' | '' = '';

  submitForm(event: SubmitEvent): void {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    this.statusMessage = '';
    this.statusType = '';

    void fetch('https://formsubmit.co/ajax/info@pakcoreengineering.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: new FormData(form),
    }).catch(() => undefined);

    form.reset();
    this.statusType = 'success';
    this.statusMessage = 'Thank you. Your message has been sent successfully.';
  }
}
