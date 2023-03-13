import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import IUserAuth from 'src/app/models/IUserAuth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  givenname = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  surname = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(13),
    Validators.maxLength(13)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);

  // A form group is a group of form controls:
  signupForm = new FormGroup({
    givenname: this.givenname,
    surname: this.surname,
    email: this.email,
    password: this.password,
    phoneNumber: this.phoneNumber
  }, []);

  constructor(private auth: AuthService) {

  }

  async signup() {
    try { 
      await this.auth.createUser(this.signupForm.value as IUserAuth);
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }
}
