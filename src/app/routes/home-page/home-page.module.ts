import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '~/shared/shared.module'
import { HomePageComponent } from './home-page.component'

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HomePageComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HomePageModule {}
