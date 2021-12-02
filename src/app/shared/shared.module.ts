import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { CamelCasePipe } from '~/pipes/camel-case.pipe'
import { FilterPipe } from '~/pipes/filter.pipe'
import { MomentPipe } from '~/pipes/moment.pipe'
import { LayoutComponent } from '~/components/layout/layout.component'

@NgModule({
  declarations: [
    CamelCasePipe,
    FilterPipe,
    MomentPipe,
    LayoutComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    CamelCasePipe,
    FilterPipe,
    MomentPipe,
    LayoutComponent,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
