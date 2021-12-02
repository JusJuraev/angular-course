export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface AuthResponse {
  email: string
  expiresIn: string
  displayName: string
  idToken: string
  kind: string
  localId: string
  registered: boolean
}
