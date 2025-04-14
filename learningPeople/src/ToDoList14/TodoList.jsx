import React, { useState } from "react"

const ToDoList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTasks] = useState("")

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask])
      setNewTasks("")
    }
  }

  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove))
  }

  const handleMoveTaskUp = (index) => {
    if (index === 0) return
    const updatedTasks = [...tasks]
    [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]]
    setTasks(updatedTasks)
  }

  const handleMoveTaskDown = (index) => {
    if (index === tasks.length - 1) return
    const updatedTasks = [...tasks]
    [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
    setTasks(updatedTasks)
  }

  return (
    <div className="todo-list">
      <h2>My To-Do List</h2>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTasks(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <div style={{ display: "inline-block", marginLeft: "10px" }}>
              <button onClick={() => handleMoveTaskUp(index)}>⬆️</button>
              <button onClick={() => handleMoveTaskDown(index)}>⬇️</button>
              <button onClick={() => handleRemoveTask(index)}>❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
