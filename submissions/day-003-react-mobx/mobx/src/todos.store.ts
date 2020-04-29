import { observable, computed, autorun } from "mobx";

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export class TodosStore {
  @observable todos: Todo[] = [];
  @observable loading: boolean = false;

  constructor() {
    autorun(() => console.log(this.lastTodo));
  }

  loadTodos() {
    this.loading = true;
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.loading = false;
      });
  }

  @computed get lastTodo() {
    if (this.todos.length === 0) {
      return "No todo's loaded yet.";
    }
    return `Last todo: ${this.todos[this.todos.length - 1].title}`;
  }
}
