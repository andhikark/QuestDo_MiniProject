import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import axios from 'axios';
import "../styles/TodoWrapper.css";

export const TodoWrapper = () => {
  const [todos, setTodos] =   useState([]);

  const addTodo = (todo) => {
    const now = new Date();
    const created_at = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const completed = 0;
    const taskData = {
      user_id: '<user_id>', // Replace with the actual user ID
      name: todo,
      created_at,
      completed,
    };
  
    axios.post('/task', taskData)
      .then(response => {
        // Handle the successful response
        console.log(response.data);
        // Update the todos state with the new task
        setTodos([
          ...todos,
          { id: response.data.insertId, task: todo, completed: false, isEditing: false },
        ]);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };
  

  const deleteTodo = (id) => {
    axios.delete(`/task/${id}`)
      .then(response => {
        // Handle the successful response
        console.log(response.data);
        // Update the todos state by removing the deleted task
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };
  

  const toggleComplete = (id) => {
    axios.patch(`/task/${id}`)
      .then(response => {
        // Handle the successful response
        console.log(response.data);
        // Update the todos state with the completed task
        setTodos(
          todos.map(todo =>
            todo.id === id ? { ...todo, completed: true } : todo
          )
        );
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };
  

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    const taskData = {
      name: task,
    };
  
    axios.put(`/task/${id}`, taskData)
      .then(response => {
        // Handle the successful response
        console.log(response.data);
        // Update the todos state with the updated task name
        setTodos(
          todos.map(todo =>
            todo.id === id ? { ...todo, task } : todo
          )
        );
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };
  


  return (
    <div className="TodoWrapper">
      <h1 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.75rem, '}}>What is our quest today?</h1>
      <TodoForm addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
