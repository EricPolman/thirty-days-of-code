import React, { useState, useEffect } from "react";
import "./App.css";
import { TodosStore, Todo } from "./todos.store";
import { observe, reaction } from "mobx";

const todosStore = new TodosStore();

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    observe(todosStore.todos, () => {
      setTodos([...todosStore.todos]);
      setLoading(false);
    });
    todosStore.loadTodos();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
