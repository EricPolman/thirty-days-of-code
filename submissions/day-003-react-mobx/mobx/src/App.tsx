import React, { useState } from "react";
import "./App.css";
import { todosStore, LoadingState } from "./todos.store";
import { observer } from "mobx-react";
import TodoItem from "./TodoItem";

todosStore.loadTodos();

function App() {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="App">
      <h1>Todo List</h1>
      {todosStore.loadingState === LoadingState.INITIAL ? (
        <div>
          <div>No todos loaded yet.</div>
          <div>
            <button onClick={todosStore.loadTodos}>Load todos</button>
          </div>
        </div>
      ) : todosStore.loadingState === LoadingState.LOADING ? (
        <div>Loading...</div>
      ) : (
        <ul>
          <li className="todo-list-item todo-list-item-form">
            <div>
              <label>New item</label>
              <br />
              <input
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
              />
              <button
                onClick={() => {
                  todosStore.addTodo(newTodo);
                  setNewTodo("");
                }}
              >
                Save
              </button>
            </div>
          </li>

          {todosStore.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default observer(App);
