import React, { useState, useEffect } from "react";
import TodoList from "./todo/TodoList";
import Context from "./Context";
import AddTodo from "./todo/AddTodo";
import Loader from "./loader";
import "./App.css";
import Modal from "./Modal/modal";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((todos) =>
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 3000)
      );
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          console.log(todo.completed);
        }
        return todo;
      })
    );
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          title,
          completed: false,
        },
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <h1>React Tutorial</h1>
        <Modal/>
        
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <h3 style={{ color: "red" }}>No Todos!</h3>
        )}
        {loading && <Loader />}
      </div>
    </Context.Provider>
  );
}

export default App;
//2055
