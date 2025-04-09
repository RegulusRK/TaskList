import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{textDecoration: todo.isComplete ? "line-through" : ""}}>
    <div className="content">
      <p>{todo.text}</p>
    </div>
    <div className="category">
      <p>({todo.category})</p>
    </div>
    <div>
      
      <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
      <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
    </div>
  </div>
  )
}

export default Todo