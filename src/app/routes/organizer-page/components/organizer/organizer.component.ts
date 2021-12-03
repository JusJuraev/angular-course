import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { DateService } from '~/shared/services/date.service'
import { TasksService } from '~/shared/services/tasks.service'
import { Task } from '~/models/task'

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit, OnDestroy {
  form: FormGroup
  tasks: Task[]
  loading = false
  sub: Subscription

  constructor (
    public dateService: DateService,
    private tasksService: TasksService
  ) {}

  ngOnInit (): void {
    this.sub = this.dateService.date.subscribe(value => {
      this.loading = true
      return this.tasksService.load(value)
        .subscribe(tasks => {
          this.tasks = tasks
          this.loading = false
        })
    })

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }

  ngOnDestroy () {
    this.sub.unsubscribe()
  }

  submit () {
    if (this.form.valid) {
      const { title } = this.form.value

      const task: Task = {
        title,
        date: this.dateService.date.value.format('DD-MM-YYYY')
      }

      this.tasksService.create(task)
        .subscribe(task => {
          this.tasks.push(task)
          this.form.reset()
        })
    }
  }

  remove (task: Task) {
    this.tasksService.remove(task)
      .subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== task.id)
      })
  }
}
