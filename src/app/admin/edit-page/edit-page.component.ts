import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription, switchMap } from 'rxjs'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PostsService } from '~/shared/services/posts.service'
import { FormService } from '~/admin/shared/services/form.service'
import { Post } from '~/models/post'
import { AlertService } from '~/admin/shared/services/alert.service'

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
  post: Post
  form: FormGroup
  submitting = false
  uSub: Subscription

  constructor (
    private route: ActivatedRoute,
    private postsService: PostsService,
    public formService: FormService,
    private alert: AlertService
  ) {
  }

  ngOnInit (): void {
    this.route.params.pipe(switchMap((params: Params) => {
      const id = params['id']
      return this.postsService.getPost(id)
    }))
      .subscribe(post => {
        this.post = post
        this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          text: new FormControl(post.text, Validators.required)
        })
      })
  }

  onSubmit () {
    if (this.form.valid) {
      this.submitting = true
      this.uSub = this.postsService.update({
        ...this.post,
        title: this.form.value.title,
        text: this.form.value.text
      }).subscribe(() => {
        this.submitting = false
        this.alert.success('Post updated')
      })
    }
  }

  ngOnDestroy () {
    if (this.uSub) this.uSub.unsubscribe()
  }
}
