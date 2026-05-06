import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Rewatch The Miami Grand Prix', completed: true },
    { id: 2, text: 'Listen to the post-race debrief podcast', completed: false },
    { id: 3, text: 'Analyze telemetry data for Verstappen Q3 lap', completed: false },
  ])
  const [filter, setFilter] = useState('all') // 'all' | 'active' | 'done'

  const addTask = (text) => {
    if (!text.trim()) return
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'done') return task.completed
    return true
  })

  const totalCount = tasks.length
  const doneCount = tasks.filter((t) => t.completed).length
  const activeCount = totalCount - doneCount

  return (
    <div className="app">
      <header className="header">
        <h1>Pitstop Planner</h1>
        <p className="subtitle"> Quick check-ins for what needs to get done.</p>
      </header>

      <TaskInput onAdd={addTask} />

      <div className="filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({totalCount})
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active ({activeCount})
        </button>
        <button
          className={`filter-btn ${filter === 'done' ? 'active' : ''}`}
          onClick={() => setFilter('done')}
        >
          Done ({doneCount})
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        filter={filter}
      />

      {totalCount > 0 && (
        <div className="stats">
          <div className="stat">
            <span className="stat-num">{totalCount}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-num">{activeCount}</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat">
            <span className="stat-num">{doneCount}</span>
            <span className="stat-label">Done</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
