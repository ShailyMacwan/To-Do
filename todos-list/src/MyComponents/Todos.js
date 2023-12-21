import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
  return (
    <div className='container my-3'>
      <h1>My Todos</h1>
      {props.todos===0 ? "No TODOS to display" : 
      props.todos.map((todo)=>{
        return (
        <TodoItem todo={todo} onDelete={props.onDelete}/>
        )
      })
    }
    </div>
  )
}
