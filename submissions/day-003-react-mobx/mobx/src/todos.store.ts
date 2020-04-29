import { observable, computed, autorun } from "mobx";

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export enum LoadingState {
  INITIAL,
  LOADING,
  COMPLETE,
}

export class TodosStore {
  @observable todos: Todo[] = [];
  @observable loadingState: LoadingState = LoadingState.INITIAL;

  loadTodos = () => {
    this.loadingState = LoadingState.LOADING;
    setTimeout(
      () =>
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => {
            const todos = json.slice(0, 10);
            todos.forEach((todo: Todo) => this.todos.push(todo));
            this.loadingState = LoadingState.COMPLETE;
          }),
      300
    );
  };

  addTodo = (title: string) => {
    this.todos.push({
      title,
      id: Math.round(Math.random() * 9999999 + 100000),
      userId: 1,
      completed: false,
    });
  };
}

export const todosStore = new TodosStore();
