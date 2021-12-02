import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core'
import { Post } from '~/models/post'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('titleInput') titleRef: ElementRef<HTMLInputElement>

  form: FormGroup

  title = ''
  text = ''

  ngOnInit () {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
      keywords: new FormArray([])
    })
  }

  getKeywords () {
    return this.form.get('keywords') as FormArray
  }

  focusTitle () {
    this.titleRef.nativeElement.focus()
  }

  onSubmit () {
    const formData = { ...this.form.value }
    if (this.form.valid) {
      console.warn(formData)
      this.form.reset()
      // this.onAddPost.emit(formData)
    }
  }

  addKeyword () {
    const control = new FormControl('', Validators.required);
    this.getKeywords().push(control)
  }
}
