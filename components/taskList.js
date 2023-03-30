import Task from "./task";
import useLocalStorageTaskList from "@/hooks/useLocalStorageTaskList";
import Button from "./button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

const TaskList = () => {
    // * States
    const [taskList, setTaskList] = useLocalStorageTaskList();

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

    const handleFillDummyDataClick = () => fillDummyList();
    const handleAddTaskClick = () => addTask();

    // * Helper Functions
    function compareDates(a, b) {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return dateA - dateB;
    };

    const fillDummyList = () => {
        setTaskList(
            [{
                "id": 0,
                "title": "Complete Task List App",
                "description": "Finish building and testing the task list app by end of week",
                "completed": false,
                "dueDate": "2023-03-19",
                "priority": 1,
                "focused": false
            },
            {
                "id": 1,
                "title": "Prepare for Interview",
                "description": "Research the company, practice answering interview questions, and dress professionally",
                "completed": true,
                "dueDate": "2023-03-22",
                "priority": 2,
                "focused": false
            },
            {
                "id": 2,
                "title": "Go to the Gym",
                "description": "Do 30 minutes of cardio and 20 minutes of weight lifting",
                "completed": false,
                "dueDate": "2023-03-17",
                "priority": 2,
                "focused": false
            },
            {
                "id": 3,
                "title": "Buy Groceries",
                "description": "Get bread, milk, eggs, and fruit",
                "completed": false,
                "dueDate": "2023-03-16",
                "priority": 3,
                "focused": true
            },
            {
                "id": 4,
                "title": "Fix S1 Bugs",
                "description": "Fix all bugs listed on ClickUp for the S1 Website",
                "completed": false,
                "dueDate": "2023-04-10",
                "priority": 1,
                "focused": false
            },
            {
                "id": 5,
                "title": "Read a Book",
                "description": "Read at least one chapter of 'The Catcher in the Rye'",
                "completed": true,
                "dueDate": "2023-03-18",
                "priority": 2,
                "focused": false
            }]
        );
    };

    const addTask = () => {
        const newTask = {
            "id": generateUniqueId(),
            "title": "Lead a 7a",
            "description": "Readpoint a 7a indoor sport climb.",
            "completed": false,
            "dueDate": "2023-03-30",
            "priority": 1,
            "focused": false
        };

        console.log(newTask);

        setTaskList([...taskList, newTask]);
    };

    const generateUniqueId = () => {
        // ! this is not the best way of generating a unique id
        let uniqueId = taskList.length;

        // check if id already exists otherwise keep incrementing
        while (taskList.find(x => x.id === uniqueId)) {
            uniqueId++;
        }

        return uniqueId;
    };

    if (!taskList || taskList.length === 0) return (
        <>
            <Button onClick={handleFillDummyDataClick}>
                <FontAwesomeIcon className="mr-2 -ml-1" icon={faWandMagicSparkles} />
                Fill with Dummy Tasks
            </Button>
        </>
    );
    return (
        <ul>
            {uncompletedTasks.length > 0 && (
                <>
                    <h2 className="text-4xl font-bold">Pending Tasks</h2>
                    <li><Task task={uncompletedTasks[0]} isCurrent={true} onComplete={handleTaskCompletion} onDelete={handleTaskDeletion} onFocus={handleTaskFocus} /></li>
                </>
            )}
            {uncompletedTasks.slice(1).map((task) => (
                <li key={task.id}><Task task={task} onComplete={handleTaskCompletion} onDelete={handleTaskDeletion} onFocus={handleTaskFocus} /></li>
            ))}
            <li>
                <div className="px-5 py-7 flex items-center space-x-4 cursor-pointer hover:bg-blue-200" onClick={handleAddTaskClick}>
                    <FontAwesomeIcon className="mr-2 -ml-1 grow text-2xl" icon={faPlus} />
                </div>
            </li>
            {completedTasks.length > 0 && <h2 className="text-4xl font-bold">Completed Tasks</h2>}
            {
                completedTasks.map((task) => (
                    <li key={task.id}><Task task={task} onComplete={handleTaskCompletion} onDelete={handleTaskDeletion} /></li>
                ))
            }
        </ul >
    );
};

export default TaskList;