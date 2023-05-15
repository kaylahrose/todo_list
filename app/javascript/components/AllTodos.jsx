import React from 'react';

export const AllTodos = ({todos}) => (
  <div>
    {
      todos.map((todo) => {
        return (
          <div>{todo.name}</div>
          {/* <div class="form-check" key={i}> */}
            {/* <input class="form-check-input" type="checkbox" checked={todo.complete} value="" id={`checkbox${todo.id}`} disabled /> */}
            {/* <label class="form-check-label" for={`checkbox${todo.id}`}> */}
              {/* {todo.title} */}
            {/* </label> */}
          // </div>
        )
      })
    }
  </div>
)
// comment out the work, this is styling for individual items
// pass item name to value
// getting checkbox to talk to BE
// show each todo based off of todo.name
// bring in import.link from todos.jsx
// link every todo to it's show page

// google how to do react forms, how to do html forms/checkboxes
