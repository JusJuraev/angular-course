import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '~/admin/shared/services/auth.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor (
    private auth: AuthService,
    private router: Router
  ) {}

  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token as string
        }
      })
    }
    return next.handle(req)
      .pipe(catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.auth.logout()
          this.router.navigate(['admin', 'login'], {
            queryParams: {
              redirect: this.router.url
            }
          })
        }
        return throwError(() => error)
      }))
  }
}
