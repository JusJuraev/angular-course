import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { generateInterceptor } from '~/utils/generateInterceptor'
import { SharedModule } from '~/shared/shared.module'
import { AuthInterceptor } from '~/services/auth.interceptor'
import { PostFormComponent } from '~/components/post-form/post-form.component'
import { PostComponent } from '~/components/post/post.component'
import { CounterComponent } from '~/components/counter/counter.component'

import { TodosPageComponent } from '~/routes/todos-page/todos-page.component'
import { HomePageComponent } from '~/routes/home-page/home-page.component'

const AUTH_INTERCEPTOR = generateInterceptor<AuthInterceptor>(AuthInterceptor)

@NgModule({
  declarations: [
    // components
    AppComponent,
    CounterComponent,
    PostFormComponent,
    PostComponent,
    // routes
    HomePageComponent,
    TodosPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [AUTH_INTERCEPTOR],
  bootstrap: [AppComponent]
})
export class AppModule {
}
