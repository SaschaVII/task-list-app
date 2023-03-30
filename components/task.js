const Task = ({ task, isCurrent }) => {
    return (
        <>
            {(isCurrent)
                ? (
                    <div className="px-5 py-10 flex items-center space-x-4 bg-blue-100 hover:cursor-pointer hover:bg-blue-200">
                        <div className="flex-shrink-0">
                            <input type="checkbox" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div>ACTION BUTTONS ICONS</div>
                            <div>
                                <strong>Priority: {task.priority}</strong>
                            </div>
                            <div>Due Date: {task.dueDate}</div>
                        </div>
                    </div>
                )
                : (
                    <div className="px-5 py-2 flex items-center space-x-4 hover:cursor-pointer hover:bg-blue-200">
                        <div className="flex-shrink-0">
                            <input type="checkbox" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2>{task.title}</h2>
                        </div>
                        <div className="flex flex-col items-center">
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