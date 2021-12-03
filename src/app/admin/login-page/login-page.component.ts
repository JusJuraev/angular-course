import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { AuthService } from '~/admin/shared/services/auth.service'
import { FormService } from '~/admin/shared/services/form.service'
import { User } from '~/models/user'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup
  submitting = false
  redirect: string

  constructor (
    public authService: AuthService,
    public formService: FormService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit (): void {
    this.route.queryParams.subscribe((query: Params) => {
      this.redirect = query['redirect']
    })

    this.form = new FormGroup({
      email: new FormControl('jus.juraev@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit () {
    if (this.form.valid) {
      const { email, password } = this.form.value
      this.submitting = true

      const user: User = { email, password }
      this.authService.login(user).subscribe({
        next: () => {
          const returnUrl = this.redirect || '/admin/dashboard'

          this.submitting = false
          this.form.reset()
          this.router.navigateByUrl(returnUrl)
        },
        error: () => {
          this.submitting = false
        }
      })
    }
  }
}
