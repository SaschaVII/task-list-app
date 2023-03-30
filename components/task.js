const Task = ({ task, isCurrent, onComplete }) => {
    // * Styles
    const currentStyles = "bg-blue-100 py-10";
    const notCurrentStyles = "py-2";
    const baseStyles = "px-5 py-10 flex items-center space-x-4 hover:cursor-pointer hover:bg-blue-200";
    const styles = baseStyles + (isCurrent ? ` ${currentStyles}` : ` ${notCurrentStyles}`);
    if (!onComplete) onComplete = () => { };

    // * Event Handlers
    const onClick = () => {
        onComplete(task.id);
    };

    return (
        <>
            <div className={styles} onClick={onClick}>
                {/* <div className="flex-shrink-0">
                    <input type="checkbox" />
                </div> */}
                <div className="flex-1 min-w-0">
                    <h2 className="text-md font-semibold">{task.title}</h2>
                    {isCurrent && <p className="text-sm text-gray-500">{task.description}</p>}
                </div>
                <div className="flex flex-col items-center">
                    <div>ACTION BUTTONS ICONS</div>
                    <div>
                        <strong>Priority: {task.priority}</strong>
                    </div>
                    <div>Due Date: {task.dueDate}</div>
                </div>
            </div>
        </>
    );
};

export default Task;