import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IContact from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  tema = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  mensaje = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  contactForm = new FormGroup({
    mensaje: this.mensaje,
    tema: this.tema,
    email: this.email
  }, []);

  constructor(private contactService: ContactService) { }

  async contact() {
    try {
      let contact: IContact = {
        email: this.contactForm.value.email as string,
        tema: this.contactForm.value.tema as string,
        mensaje: this.contactForm.value.mensaje as string
      }  

      await this.contactService.send(contact)
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }
}
