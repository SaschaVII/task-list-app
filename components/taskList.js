import Task from "./task";

const TaskList = ({ tasks }) => {
    const uncompletedTasks = tasks.filter(x => !x.completed);
    const completedTasks = tasks.filter(x => x.completed);

    if (!tasks || tasks.length === 0) return (<></>);
    return (
        <ul>
            {uncompletedTasks.length > 0 && <h2 className="text-4xl font-bold">Pending Tasks</h2>}
            <li>
                <Task task={uncompletedTasks[0]} isCurrent={true} />
            </li>
            {uncompletedTasks.slice(1).map((task) => (
                <li key={task.id}><Task task={task} /></li>
            ))}
            {completedTasks.length > 0 && <h2 className="text-4xl font-bold">Completed Tasks</h2>}
            {
                completedTasks.map((task) => (
                    <li key={task.id}><Task task={task} /></li>
                ))
            }
        </ul >
    );
};

export default TaskList;