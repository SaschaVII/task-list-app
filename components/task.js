const Task = ({ task, isCurrent }) => {
    return (
        <>
            {(isCurrent)
                ? (
                    <div className="task current-task">
                        <input type="checkbox" className="checkbox" />
                        <div className="task-body">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                        </div>
                        <div className="task-tail">
                            <div>ACTION BUTTONS ICONS</div>
                            <div>
                                <strong>Priority: {task.priority}</strong>
                            </div>
                            <div>Due Date: {task.dueDate}</div>
                        </div>
                    </div>
                )
                : (
                    <div className="task">
                        <input type="checkbox" className="checkbox" />
                        <div className="task-body">
                            <h2>{task.title}</h2>
                        </div>
                        <div className="task-tail">
                            <div>ACTION BUTTONS ICONS</div>
                            <div>
                                <strong>Priority: {task.priority}</strong>
                            </div>
                            <div>Due Date: {task.dueDate}</div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Task;