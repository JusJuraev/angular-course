import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SharedModule } from '~/shared/shared.module'
import { MainLayoutComponent } from '~/components/main-layout/main-layout.component'

import { PostsPageComponent } from './posts-page.component'
import { PostCardComponent } from './post-card/post-card.component'

@NgModule({
  declarations: [
    PostsPageComponent,
    PostCardComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: '', component: PostsPageComponent },
          {
            path: 'post/:id',
            loadChildren: () => import('~/routes/post-page/post-page.module')
              .then(m => m.PostPageModule)
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule,
    PostCardComponent
  ]
})
export class PostsPageModule {}
