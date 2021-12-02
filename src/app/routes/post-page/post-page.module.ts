import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PostPageComponent } from './post-page.component'

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: PostPageComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PostPageModule {

}
