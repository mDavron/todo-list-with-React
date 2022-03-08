import React, { useContext } from "react";
import Context from "../Context";
import { RiDeleteBin2Fill } from "react-icons/ri";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);

  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li>
      <span className={classes.join("")}>
        <input
          className="mx-2"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <b>{index + 1}</b> &nbsp;{todo.title}
      </span>
      <button
        className="btn btn-outline-primary"
        onClick={() => removeTodo(todo.id)}
      >
        <RiDeleteBin2Fill />
      </button>
    </li>
  );
}

export default TodoItem;
