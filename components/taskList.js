const TaskList = ({ tasks }) => {
    const currentTask = tasks[0];

    return (
        <div className="task-list">
            <div className="task current-task">
                <h1>Current Task:</h1>
                <div className="current-task-body">
                    <h2>{currentTask.title}</h2>
                    <p>{currentTask.description}</p>
                    <p>Due Date: {currentTask.dueDate}</p>
                    <p>Completed: {currentTask.completed ? 'Yes' : 'No'}</p>
                </div>
            </div>
            {tasks.slice(1).map((task) => (
                <div className="task" key={task.id}>
                    <h2>{task.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default TaskList;