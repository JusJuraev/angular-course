import { Component, OnInit } from '@angular/core';
import { TodosService } from '~/services/todos.service'

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
  todoTitle = ''

  constructor (public todosService: TodosService) {}

  ngOnInit () {
    this.todosService.fetchTodos()
  }

  addTodo () {
    if (this.todoTitle.trim()) {
      this.todosService.addTodo({ title: this.todoTitle, completed: false })
        .subscribe(todo => {
          this.todosService.todos.push(todo)
          this.todoTitle = ''
        })
    }
  }
}
