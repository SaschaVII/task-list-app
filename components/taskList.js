import Task from "./task";
import useLocalStorageTaskList from "@/hooks/useLocalStorageTaskList";
import Button from "./button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

const TaskList = () => {
    // * States
    const [taskList, setTaskList] = useLocalStorageTaskList();

    const uncompletedTasks = taskList.filter(x => !x.completed);
    const completedTasks = taskList.filter(x => x.completed);

    // * Event Handlers
    const handleTaskCompletion = (taskId) => {
        // set task with id matching taskId to completed
        const updatedTaskList = taskList.map(task => {
            if (task.id === taskId) {
                task.completed = true;
            }
            return task;
        });
        setTaskList(updatedTaskList);
    };

    const handleFillDummyDataClick = () => fillDummyList();

    // * Helper Functions
    const fillDummyList = () => {
        setTaskList(
            [{
                "id": 0,
                "title": "Complete Task List App",
                "description": "Finish building and testing the task list app by end of week",
                "completed": false,
                "dueDate": "2023-03-19",
                "priority": 1
            },
            {
                "id": 1,
                "title": "Prepare for Interview",
                "description": "Research the company, practice answering interview questions, and dress professionally",
                "completed": true,
                "dueDate": "2023-03-22",
                "priority": 2
            },
            {
                "id": 2,
                "title": "Go to the Gym",
                "description": "Do 30 minutes of cardio and 20 minutes of weight lifting",
                "completed": false,
                "dueDate": "2023-03-17",
                "priority": 2
            },
            {
                "id": 3,
                "title": "Buy Groceries",
                "description": "Get bread, milk, eggs, and fruit",
                "completed": false,
                "dueDate": "2023-03-16",
                "priority": 3
            },
            {
                "id": 4,
                "title": "Read a Book",
                "description": "Read at least one chapter of 'The Catcher in the Rye'",
                "completed": true,
                "dueDate": "2023-03-18",
                "priority": 2
            }]
        );
    };

    const addTask = () => {
        const newTask = {
            "id": taskList.length,
            "title": "Lead a 7a",
            "description": "Readpoint a 7a indoor sport climb.",
            "completed": false,
            "dueDate": "2024-01-01",
            "priority": 1
        };

        setTaskList([...taskList, newTask]);
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
                    <li><Task task={uncompletedTasks[0]} isCurrent={true} onComplete={handleTaskCompletion} /></li>
                </>
            )}
            {uncompletedTasks.slice(1).map((task) => (
                <li key={task.id}><Task task={task} onComplete={handleTaskCompletion} /></li>
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