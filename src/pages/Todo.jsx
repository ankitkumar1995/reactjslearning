import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import ErrorBoundaries from "../components/errorBoundaries/ErrorBoundaries";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);

  return (
    <ErrorBoundaries>
      <Suspense fallback="loading...">
        <div>
          Todo
          <div>
            <table>
              <thead>
                <td>Id</td>
                <td>Title</td>
                <td>Status</td>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>
                      <input
                        style={{ width: "15px", height: "15px" }}
                        type="checkbox"
                        checked={todo.completed}
                        onChange={(e) => {
                          setTodos(
                            todos.map((todoi) => {
                              if (todoi.id === todo.id) {
                                return {
                                  ...todo,
                                  completed: e.target.checked,
                                };
                              }
                              return todo;
                            })
                          );
                          console.log(e.target.checked);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Suspense>
    </ErrorBoundaries>
  );
};

export default Todo;
