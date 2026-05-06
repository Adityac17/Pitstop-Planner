import { useState } from 'react'

function TaskInput({ onAdd }) {
  const [value, setValue] = useState('')

  const handleAdd = () => {
    if (!value.trim()) return
    onAdd(value)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="input-area">
      <input
        className="task-input"
        type="text"
        placeholder="Add a new task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-btn" onClick={handleAdd}>
        + Add
      </button>
    </div>
  )
}

export default TaskInput
