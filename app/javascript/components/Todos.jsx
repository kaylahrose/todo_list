import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Loader } from "./Loader";
import { AllTodos } from "./AllTodos";

const Todos = () => {
  const [todos, setTodos] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "/todos/all_todos";
    fetch(url) // 1 // A
      .then(response => { // 2 // B
        if (response.ok) { // 3 // C
          return response.json(); // 4
        }
        throw new Error("Network response was not ok."); // D
      })
      .then(response => { // 5
        setTodos(response); // 6
        setLoading(false); // 7
      })
      .catch(() => console.log('An error occurred while fetching the todos')); // E
  }, []);

  return (
    <div className="vw-100 vh-100 primary-color d-flex justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Todo</h1>
          <p className="lead">
            All to-do lists.
          </p>
          <hr className="my-4" />
          {
            loading ? <Loader /> : (
              <div>
                <AllTodos todos={todos} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Todos;