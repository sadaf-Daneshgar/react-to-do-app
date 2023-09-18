import { useState } from 'react';
import './style.css';

function TodoList() {
  const [newtodo, setNewtodo] = useState('');
  const [todos, setTodos] = useState([]);
  function handleBtn(e) {
    e.preventDefault();

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newtodo, completed: false },
    ]);

    setNewtodo('');
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => currentTodos.map((todo) => (todo.id === id
      ? { ...todo, completed } : todo)));
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleBtn}>
          <div className="todo">
            <h1>To Do List</h1>
          </div>
          <input
            type="text"
            value={newtodo}
            onChange={(e) => setNewtodo(e.target.value)}
            placeholder="Add Todo...."
            className="input"
          />
          <br />
          <button type="submit" className="addbtn">
            Add
          </button>
        </form>
        <ul className="newtodo">
          {todos.map((todo) => (
            <li key={todo.id}>
              <span className="check-span">
                <input
                  type="checkbox"
                  className="checkb"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </span>
              <span className="buttons">
                <button className="action-btn" type="button">
                  Edit
                </button>
                <button
                  className="action-btn"
                  type="button"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
