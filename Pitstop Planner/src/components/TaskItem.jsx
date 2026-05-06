function TaskItem({ task, index, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div
        className={`checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => onToggle(task.id)}
        role="checkbox"
        aria-checked={task.completed}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onToggle(task.id)}
      />

      <span className={`task-text ${task.completed ? 'done' : ''}`}>
        {task.text}
      </span>

      <span className="task-num">
        #{String(index + 1).padStart(2, '0')}
      </span>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        ×
      </button>
    </li>
  )
}

export default TaskItem
