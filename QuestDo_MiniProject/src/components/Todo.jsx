import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../styles/Todo.css'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const buttonStyle = {
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    backgroundColor: task.completed ? 'green' : 'transparent',
    border: '1px solid black',
    cursor: 'pointer',
  }

  return (
    <div className="Todo">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          style={buttonStyle}
          onClick={() => toggleComplete(task.id)}
        ></button>
        <p
          className={`${task.completed ? 'completed' : ''}`}
          style={{ marginLeft: '10px', flex: 1 }}
        >
          {task.task}
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}
