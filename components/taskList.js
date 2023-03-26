import Task from "./task";

const TaskList = ({ tasks }) => {
    const uncompletedTasks = tasks.filter(x => !x.completed);
    const completedTasks = tasks.filter(x => x.completed);
    const dummyTask = {
        "id": 0,
        "title": "Complete Task List App",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at neque non neque luctus ultricies. Aliquam mattis, metus molestie faucibus condimentum, ligula odio tempus est, eget feugiat lectus mi nec nisi. Cras tristique nec metus et commodo. Integer at diam ex. Phasellus bibendum porta purus auctor faucibus. Donec egestas nisl non posuere ultrices. Praesent vestibulum tellus et fringilla lobortis. Curabitur ultrices mi metus. Phasellus gravida venenatis feugiat. Mauris finibus, lectus in consectetur malesuada, turpis neque accumsan arcu, sed volutpat risus tellus in est. Sed venenatis elit ac rhoncus ullamcorper. Aliquam erat volutpat.",
        "completed": false,
        "priority": 1,
        "dueDate": "2023-03-19"
    };


    // if (!tasks || tasks.length === 0) return (<></>);
    return (
        <div className="task-list">
            <Task task={dummyTask} isCurrent={true} />
            <Task task={dummyTask} isCurrent={false} />
            <Task task={dummyTask} isCurrent={false} />
            <Task task={dummyTask} isCurrent={false} />
        </div>
    );
    // return (
    //     <div className="task-list">
    //         <h1>Tasks</h1>
    //         <Task task={uncompletedTasks[0]} isCurrent={true} />
    //         {uncompletedTasks.slice(1).map((task) => (
    //             <Task task={task} key={task.id} />
    //         ))}
    //         {completedTasks.length > 0 && <h1>Completed Tasks</h1>}
    //         {completedTasks.map((task) => (
    //             <Task task={task} key={task.id} />
    //         ))}
    //     </div>
    // );
};

export default TaskList;