import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import IUserAuth from 'src/app/models/auth/ISignup';
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
    Validators.minLength(9),
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

  constructor(private auth: AuthService, private router: Router) { }

  async signup() {
    try { 
      let formSignup: IUserAuth = {
        catUserRolId: "",
        infoUserGivenName: this.signupForm.value.givenname as string,
        infoUserSurname: this.signupForm.value.surname as string,
        infoUserEmail: this.signupForm.value.email as string,
        infoUserPhoneNumber: this.signupForm.value.phoneNumber as string,
        infoUserAddress: "",
        infoUserActive: true,
        infoUserToken: "",
        infoUserPasswordHash: "",
        infoUserPasswordSalt: "",
        password: this.signupForm.value.password as string
      }
      
      await this.auth.signup(formSignup)
      
      this.router.navigate(['/'])
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }
}
