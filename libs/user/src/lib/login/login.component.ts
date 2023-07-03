import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from '../store/login.service';
import { Router } from '@angular/router';

// interface LoginInfo {
//   username: string;
//   password: string;
// }

@Component({
  selector: 'org-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  search = new FormControl('');

  loginForm = new FormGroup({
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(16),
    ]),
  });

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService
      .login(
        this.loginForm.value.username as string,
        this.loginForm.value.password as string
      )
      .subscribe((token) => {
        console.log(token);
        this.loginService.isLoggedIn = true;
        this.router.navigate(['/product']);
      });
  }
}
