import { observable, computed, autorun } from "mobx";

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export class TodosStore {
  @observable todos: Todo[] = [];

  constructor() {
    autorun(() => console.log(this.lastTodo));
  }

  loadTodos() {
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => json.forEach((todo: Todo) => this.todos.push(todo))),
      1000
    );
  }

  @computed get lastTodo() {
    if (this.todos.length === 0) {
      return "No todo's loaded yet.";
    }
    return `Last todo: ${this.todos[this.todos.length - 1].title}`;
  }
}
