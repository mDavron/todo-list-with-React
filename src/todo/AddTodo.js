// import React, { useState } from "react";
// import "./AddTodo.css";

// function AddTodo({onCreate}) {
//   const [value, setValue] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if((value.trim )) {
//         onCreate(value)

//         setValue('')
//     }
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button>Add</button>
//     </form>
//   );
// }

// export default AddTodo;

import React, { useState } from "react";

const useInputValue = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
};

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
    }
    input.clear();
  };
  return (
    <form onSubmit={submitHandler}>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Add Todo"
          {...input.bind}
        />
        <button class="btn btn-outline-secondary" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
