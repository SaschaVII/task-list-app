import Task from "./task";

const TaskList = ({ tasks }) => {
    const uncompletedTasks = tasks.filter(x => !x.completed);
    const completedTasks = tasks.filter(x => x.completed);

    return (
        <div className="task-list">
            <h1>Tasks</h1>
            <Task task={uncompletedTasks[0]} isCurrent={true} />
            {uncompletedTasks.slice(1).map((task) => (
                <Task task={task} key={task.id} />
            ))}
            <h1>Completed Tasks</h1>
            {completedTasks.map((task) => (
                <Task task={task} key={task.id} />
            ))}
        </div>
    );
};

export default TaskList;