import { useState } from "react";
import "./styles.css";
import { NewTodoForm} from "./NewTodoForm"; 

export default function App() {

  const [todos, setTodos] = useState([]);


  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }



  return (
    <>
     < NewTodoForm /> 
      <h1 className="header">To Do List</h1>
      <ul className="list">
        {todos.length === 0 && "No To dos, yipee!! "}
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
            </div>
            <button onClick={() => deleteTodo(todo.id)} 
            className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}


