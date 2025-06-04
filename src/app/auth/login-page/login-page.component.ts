import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule , FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent { 

  fb = inject(FormBuilder)
  hasError = signal(false)
  isPosting = signal(false)
  router = inject(Router)
  AuthService = inject(AuthService)

  loginForm = this.fb.group({
    email: ['', [ Validators.required , Validators.email ]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onSubmit() {
    if( this.loginForm.invalid ) {
      this.hasError.set(true)
      setTimeout(() => {
        this.hasError.set(false)
      }, 2000)
    }

    const { email = '', password = '' } = this.loginForm.value

    this.AuthService.login(email!, password!).subscribe(isAuthenticated => {
      if(isAuthenticated){
        this.router.navigateByUrl('/')
        return
      }
    })

  }

}
