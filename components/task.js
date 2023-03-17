const Task = ({ task, isCurrent }) => {
    return (
        <>
            {(isCurrent)
                ? (
                    <>
                        <div className="task current-task-body">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <p>Due Date: {task.dueDate}</p>
                        </div>
                    </>
                )
                : (
                    <div className="task">
                        <h2>{task.title}</h2>
                    </div>
                )
            }
        </>
    );
};

export default Task;