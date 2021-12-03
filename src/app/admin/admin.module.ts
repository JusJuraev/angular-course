import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SharedModule } from '~/shared/shared.module'
import { FormService } from '~/admin/shared/services/form.service'
import { AuthGuard } from '~/admin/shared/services/auth.guard'

import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component'
import { LoginPageComponent } from './login-page/login-page.component'
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component'
import { CreatePageComponent } from './create-page/create-page.component'
import { EditPageComponent } from './edit-page/edit-page.component'

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
          { path: 'create', component: CreatePageComponent, canActivate: [AuthGuard] },
          { path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard] }
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    FormService
  ]
})
export class AdminModule {
}
