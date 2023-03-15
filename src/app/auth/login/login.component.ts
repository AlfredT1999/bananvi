import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ISignin from 'src/app/models/auth/ISignin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);
  signinForm = new FormGroup({
    email: this.email,
    password: this.password,
  }, []);

  constructor(private auth: AuthService, private router: Router) { }

  async signin() {
    try {
      let formSignin: ISignin = {
        email: this.signinForm.value.email as string,
        password: this.signinForm.value.password as string
      }

      await this.auth.signin(formSignin)

      this.router.navigate(['/'])
    } 
    catch (err) {
      console.error(err);
      return 
    }
  }
}
