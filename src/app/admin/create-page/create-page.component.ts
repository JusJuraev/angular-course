import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { FormService } from '~/admin/shared/services/form.service'
import { Post } from '~/models/post'
import { PostsService } from '~/shared/services/posts.service'
import { AlertService } from '~/admin/shared/services/alert.service'

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form: FormGroup

  constructor (
    public formService: FormService,
    private postsService: PostsService,
    private alert: AlertService
  ) {
  }

  ngOnInit (): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      text: new FormControl('', [
        Validators.required
      ]),
      author: new FormControl('', [
        Validators.required
      ])
    })
  }

  onSubmit () {
    if (this.form.valid) {
      const post = {
        title: this.form.value.title,
        author: this.form.value.author,
        text: this.form.value.text,
        date: new Date()
      } as Post

      this.postsService.create(post).subscribe({
        next: () => {
          this.alert.success('Post created')
          this.form.reset()
        }
      })
    }
  }
}
