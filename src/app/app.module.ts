import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { registerLocaleData } from '@angular/common'
import localeRu from '@angular/common/locales/ru'
import { ServiceWorkerModule } from '@angular/service-worker'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { generateInterceptor } from '~/utils/generateInterceptor'
import { SharedModule } from '~/shared/shared.module'
import { AuthInterceptor } from '~/shared/services/auth.interceptor'
import { environment } from '~/environments/environment'

registerLocaleData(localeRu, 'ru')

const AUTH_INTERCEPTOR = generateInterceptor<AuthInterceptor>(AuthInterceptor)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [AUTH_INTERCEPTOR],
  bootstrap: [AppComponent]
})
export class AppModule {
}
