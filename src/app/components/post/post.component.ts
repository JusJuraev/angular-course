import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Post } from '~/models/post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post
  @Output() removePost: EventEmitter<number> = new EventEmitter<number>()

  onDeletePost () {
    this.removePost.emit(this.post.id)
  }
}
