import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

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
  exports: [
    CamelCasePipe,
    FilterPipe,
    MomentPipe,
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class SharedModule {}
