import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete, filter }) {
  if (tasks.length === 0) {
    const message =
      filter === 'done'
        ? 'No completed tasks yet'
        : filter === 'active'
        ? 'All tasks are done!'
        : 'No tasks yet — add one above'

    return (
      <div className="empty">
        <span className="empty-icon">{filter === 'done' ? '✓' : '○'}</span>
        <p>{message}</p>
      </div>
    )
  }

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList
