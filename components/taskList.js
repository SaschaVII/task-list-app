import Task from "./task";
import useLocalStorageTaskList from "@/hooks/useLocalStorageTaskList";
import Button from "./button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";

const TaskList = () => {
    // * States
    const [taskList, setTaskList] = useLocalStorageTaskList();
    const router = useRouter();

    // * Calculated Values
    // sort task list by focused then priority then due date
    const sortedTaskList = taskList.sort((a, b) => b.focused - a.focused || a.priority - b.priority || compareDates(a, b));
    const uncompletedTasks = sortedTaskList.filter(x => !x.completed);
    const completedTasks = sortedTaskList.filter(x => x.completed);

    // * Event Handlers
    const handleTaskCompletion = (taskId) => {
        // set task with id matching taskId to completed
        const updatedTaskList = taskList.map(task => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTaskList(updatedTaskList);
    };

    const handleTaskDeletion = (taskId) => {
        // delete task with id matching taskId
        const updatedTaskList = taskList.filter(task => task.id !== taskId);
        setTaskList(updatedTaskList);
    };

    const handleTaskFocus = (taskId) => {
        // set task with id matching taskId to focused and all other tasks to not focused
        const updatedTaskList = taskList.map(task => {
            if (task.id === taskId) {
                task.focused = !task.focused;
            } else {
                task.focused = false;
            }
            return task;
        });
        setTaskList(updatedTaskList);
    };

    const handlePriorityChange = (taskId, newPriority) => {
        // set task with id matching taskId to newPriority
        const updatedTaskList = taskList.map(task => {
            if (task.id === taskId) {
                task.priority = newPriority;
            }
            return task;
        });
        setTaskList(updatedTaskList);
    };

    const handleTaskEdit = (taskId) => {
        // navigate to task page with id matching taskId
        router.push(`/taskDetails?id=${taskId}`);
    };

    const handleAddTaskClick = () => {
        const newTaskId = generateUniqueId();
        addTask(newTaskId);
        router.push(`/taskDetails?id=${newTaskId}`);
    };

    // * Helper Functions
    function compareDates(a, b) {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return dateA - dateB;
    };

    const addTask = (taskId) => {
        const newTask = {
            "id": taskId,
            "title": "New Task",
            "description": "",
            "completed": false,
            "dueDate": new Date(),
            "priority": 1,
            "focused": false
        };

        setTaskList([...taskList, newTask]);
    };

    const generateUniqueId = () => {
        let uniqueId = taskList.length;

        // check if id already exists otherwise keep incrementing
        while (taskList.find(x => x.id === uniqueId)) {
            uniqueId++;
        }

        return uniqueId;
    };

    if (!taskList || taskList.length === 0) return (
        <>
            <div className="px-5 py-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-200" onClick={handleAddTaskClick}>
                <FontAwesomeIcon className="mr-2 -ml-1 grow text-2xl" icon={faPlus} />
            </div>
        </>
    );
    return (
        <>
            <ul className="divide-y divide-gray-200 mb-4">
                {uncompletedTasks.length > 0 && (
                    <>
                        <h2 className="text-4xl font-bold mb-2">Pending Tasks</h2>
                        <li>
                            <Task task={uncompletedTasks[0]}
                                isCurrent={true}
                                onComplete={handleTaskCompletion}
                                onDelete={handleTaskDeletion}
                                onFocus={handleTaskFocus}
                                onPriorityChange={handlePriorityChange}
                                onEdit={handleTaskEdit} />
                        </li>
                    </>
                )}
                {uncompletedTasks.slice(1).map((task) => (
                    <li key={task.id}>
                        <Task task={task}
                            onComplete={handleTaskCompletion}
                            onDelete={handleTaskDeletion}
                            onFocus={handleTaskFocus}
                            onPriorityChange={handlePriorityChange}
                            onEdit={handleTaskEdit} />
                    </li>
                ))}
                <li>
                    <div className="px-5 py-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-200" onClick={handleAddTaskClick}>
                        <FontAwesomeIcon className="mr-2 -ml-1 grow text-2xl" icon={faPlus} />
                    </div>
                </li>
            </ul>
            <ul className="divide-y divide-gray-200">
                {completedTasks.length > 0 && <h2 className="text-4xl font-bold mb-2">Completed Tasks</h2>}
                {
                    completedTasks.map((task) => (
                        <li key={task.id}>
                            <Task task={task}
                                onComplete={handleTaskCompletion}
                                onDelete={handleTaskDeletion}
                                onEdit={handleTaskEdit} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default TaskList;