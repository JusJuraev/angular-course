import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PostPageComponent } from './post-page.component'
import { CommonModule } from '@angular/common'
import { SharedModule } from '~/shared/shared.module'

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: PostPageComponent }
    ]),
    CommonModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class PostPageModule {

}
