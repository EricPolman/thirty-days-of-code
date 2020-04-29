import React from "react";
import { Todo } from "./todos.store";
import { observer } from "mobx-react";

function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="todo-list-item">
      <div className="completed-button-container">
        <button onClick={() => (todo.completed = !todo.completed)}>
          {todo.completed && <span className="completed-check">✓</span>}
        </button>
      </div>
      <div>
        <label>{todo.title}</label>
        <br />
        <input
          value={todo.title}
          onChange={(event) => (todo.title = event.target.value)}
        />
      </div>
    </li>
  );
}

export default observer(TodoItem);
