import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import * as moment from 'moment'
import { Task } from '~/models/task'

interface CreateResponse {
  name: string
}

@Injectable({ providedIn: 'root' })
export class TasksService {
  static url = 'https://angular-organizer-c48bf-default-rtdb.firebaseio.com/tasks'

  constructor (private http: HttpClient) {}

  load (date: moment.Moment): Observable<Task[]> {
    return this.http.get<Record<string, Task>>(`${TasksService.url}/${date.format('DD-MM-YYYY')}.json`)
      .pipe(map(tasks => {
        if (!tasks) return []
        return Object.keys(tasks).map(id => ({ ...tasks[id], id: id }))
      }))
  }

  create (task: Task): Observable<Task> {
    return this.http.post<CreateResponse>(`${TasksService.url}/${task.date}.json`, task)
      .pipe(map(res => {
        return { ...task, id: res.name }
      }))
  }

  remove (task: Task): Observable<void> {
    return this.http.delete<void>(`${TasksService.url}/${task.date}/${task.id}.json`)
  }
}
