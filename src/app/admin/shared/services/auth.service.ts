import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, Subject, tap } from 'rxjs'
import { AuthResponse, User } from '~/models/user'
import { environment } from '~/environments/environment'

@Injectable()
export class AuthService {
  public error$: Subject<string> = new Subject<string>()

  constructor (private http: HttpClient) {
  }

  get token(): string | null {
    const expDate = new Date(localStorage.getItem('fb-token-expires') || '')
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  login (user: User): Observable<AuthResponse | null> {
    user.returnSecureToken = true
    return this.http.post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(tap({
        next: AuthService.setToken,
        error: this.handleError.bind(this)
      }))
  }

  logout () {
    AuthService.setToken(null)
  }

  isAuthenticated ():boolean {
    return !!this.token
  }

  private handleError (error: HttpErrorResponse) {
    const { message } = error.error.error

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('You have entered invalid email')
        break

      case 'INVALID_PASSWORD':
        this.error$.next('You have entered invalid password')
        break

      case 'EMAIL_NOT_FOUND':
        this.error$.next('User not found')
        break

      default: this.error$.next(message)
    }
  }

  private static setToken (response: AuthResponse | null) {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-expires', expDate.toString())
    } else {
      localStorage.clear()
    }
  }
}
