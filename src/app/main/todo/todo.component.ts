import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  title: string = 'Todo App';
  inputText: string = 'todo app';
  data: any[] = [];

  addTodo(value: string) {
    if (value) {
      this.data.push({ id: this.data.length + 1, text: value, done: false });
      this.inputText = '';
    }
  }

  onInput(e: any) {
    this.inputText = e.target.value;
    console.log(e.target.value);
  }

  removeTodo(id: number) {
    this.data = this.data.filter((todo) => todo.id !== id);
  }

  toggleDone(id: number) {
    this.data = this.data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
  }
}
