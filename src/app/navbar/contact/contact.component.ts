import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {
    
  }

  contact() {

  }
}
