import { Component, OnDestroy, OnInit } from '@angular/core'
import { PostsService } from '~/shared/services/posts.service'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'
import { Post } from '~/models/post'

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
  post: Post
  pSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'] as string
      this.pSub = this.postsService.getPost(id).subscribe(post => {
        this.post = post
      })
    })
  }

  ngOnDestroy () {
    if (this.pSub) this.pSub.unsubscribe()
  }
}
