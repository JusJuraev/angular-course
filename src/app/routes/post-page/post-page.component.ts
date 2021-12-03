import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable, switchMap } from 'rxjs'
import { Post } from '~/models/post'
import { PostsService } from '~/shared/services/posts.service'

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post$: Observable<Post>
  loading = false

  constructor (
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {
  }

  ngOnInit (): void {
    this.loading = true
    this.post$ = this.route.params.pipe(switchMap((params: Params) => {
      const id = params['id']
      return this.postsService.getPost(id)
    }))
  }

}
