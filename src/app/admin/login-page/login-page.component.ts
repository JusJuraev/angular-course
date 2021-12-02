import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { AuthService } from '~/admin/shared/services/auth.service'
import { User } from '~/models/user'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup
  submitting = false

  constructor (public authService: AuthService, private router: Router) {
  }

  ngOnInit (): void {
    this.form = new FormGroup({
      email: new FormControl('jus.juraev@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  controlHasError (controlName: string): boolean {
    return !!this.form.get(controlName)?.invalid && !!this.form.get(controlName)?.touched
  }

  getControlError (controlName: string, errorType: string): string {
    return this.form.get(controlName)?.errors?.[errorType]
  }

  onSubmit () {
    if (this.form.valid) {
      const { email, password } = this.form.value
      this.submitting = true

      const user: User = { email, password }
      this.authService.login(user).subscribe({
        next: () => {
          this.submitting = false
          this.form.reset()
          this.router.navigate(['admin', 'dashboard'])
        },
        error: () => {
          this.submitting = false
        }
      })
    }
  }
}
