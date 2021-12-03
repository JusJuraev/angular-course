import { Component, OnDestroy, OnInit } from '@angular/core'
import { PostsService } from '~/shared/services/posts.service'
import { Post } from '~/models/post'
import { Subscription } from 'rxjs'
import { AlertService } from '~/admin/shared/services/alert.service'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  search = ''
  loading = false
  posts: Post[] = []
  pSub: Subscription
  dSub: Subscription

  constructor (
    public postsService: PostsService,
    private alert: AlertService
  ) {
  }

  ngOnInit (): void {
    this.loading = true
    this.pSub = this.postsService.getALl().subscribe(posts => {
      this.posts = posts
      this.loading = false
    })
  }

  remove (id: string) {
    this.dSub = this.postsService.remove(id as string).subscribe(() => {
      this.posts = this.posts.filter(p => p.id !== id)
      this.alert.success('Post deleted')
    })
  }

  ngOnDestroy () {
    if (this.pSub) this.pSub.unsubscribe()
    if (this.dSub) this.dSub.unsubscribe()
  }
}
