import { Provider, Type } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

export const generateInterceptor = <T>(useClass: Type<T>): Provider => ({
  multi: true,
  provide: HTTP_INTERCEPTORS,
  useClass
})
