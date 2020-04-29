import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodosStore, Todo } from "./todos.store";
import { observe, reaction } from "mobx";

const todosStore = new TodosStore();

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    todosStore.loadTodos();
    observe(todosStore.todos, () => {
      console.log("setting todos");
      setTodos([...todosStore.todos]);
    });
    reaction(
      () => todosStore.todos.length,
      () => {
        console.log("Length of todos changed");
      }
    );
  }, []);

  return (
    <div className="App">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
