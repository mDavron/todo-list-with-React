import React from "react";
import TodoItem from "./TodoItem";
import "./todo.css";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            index={index}
            key={todo.id}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
