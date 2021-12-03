import { Component, OnInit } from '@angular/core';
import { Post } from '~/models/post'
import { PostsService } from '~/shared/services/posts.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  posts$: Observable<Post[]>

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getALl()
  }

}
