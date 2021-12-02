import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { delay, Observable } from 'rxjs'
import { Todo } from '~/models/todo'

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor (private http: HttpClient) {}

  todos: Todo[] = []
  loading = false

  addTodo (todo: Omit<Todo, 'id'>): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
  }

  completeTodo (id: number) {
    const foundTodoIndex = this.todos.findIndex(todo => todo.id === id)
    const updatedTodo = { ...this.todos[foundTodoIndex], completed: true }
    this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, updatedTodo)
      .subscribe(todo => {
        this.todos[foundTodoIndex] = todo
      })
  }

  deleteTodo (id: number) {
    this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id)
      })
  }

  fetchTodos () {
    this.loading = true
    const params = new HttpParams().append('_limit', '15')
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', { params })
      .pipe(delay(500))
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }
}
