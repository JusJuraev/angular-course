import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { CamelCasePipe } from '~/pipes/camel-case.pipe'
import { FilterPipe } from '~/pipes/filter.pipe'
import { MomentPipe } from '~/pipes/moment.pipe'
import { LayoutComponent } from '~/components/layout/layout.component'
import { MainLayoutComponent } from '~/components/main-layout/main-layout.component'

@NgModule({
  declarations: [
    CamelCasePipe,
    FilterPipe,
    MomentPipe,
    LayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    CamelCasePipe,
    FilterPipe,
    MomentPipe,
    LayoutComponent,
    MainLayoutComponent,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
