import React, { useState } from 'react'
import AddingTask from "../AddingTask/AddingTask"
import TaskList from "../TasksList/TaskList"

function Todo() {
  const[todos,setTodos] = useState([])
  return (
    <div>
        <AddingTask todos = {todos} setTodos = {setTodos}/>
        <TaskList/>
    </div>
  )
}

export default Todo