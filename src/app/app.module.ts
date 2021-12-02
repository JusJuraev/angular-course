import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { generateInterceptor } from '~/utils/generateInterceptor'
import { SharedModule } from '~/shared/shared.module'
import { AuthInterceptor } from '~/services/auth.interceptor'

const AUTH_INTERCEPTOR = generateInterceptor<AuthInterceptor>(AuthInterceptor)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [AUTH_INTERCEPTOR],
  bootstrap: [AppComponent]
})
export class AppModule {
}
