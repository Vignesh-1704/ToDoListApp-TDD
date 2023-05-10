import React, { useState } from 'react'

function AddingTask({todos,setTodos}) {

  const [todo,setToDo] = useState("")

const handleClear = () => {
  setTodos();
  setToDo("")
}


  return (
    <div>
      <input id = "sample_input" type="text" placeholder="Add your Task here." value={todo} onChange={(e)=>setToDo(e.target.value)}></input>
      <button onClick={()=>handleClear()}>Add</button>
    </div>
  )
}

export default AddingTask