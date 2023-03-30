import TaskList from "@/components/taskList";
import useLocalStorageTaskList from "@/hooks/useLocalStorageTaskList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import Head from "next/head";
import Button from "@/components/button";

const Index = () => {
    const [taskList, setTaskList] = useLocalStorageTaskList();
    const isDevMode = process.env.NODE_ENV === "development";
    // const isDevMode = false;

    // * Click Handlers

    const handleAddTaskClick = () => {
        addTask();
    };

    const handleFillDummyDataClick = () => {
        fillDummyList();
    };

    const handleDeleteListClick = () => {
        setTaskList([]);
    };

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

    if (!taskList) return (<p>loading...</p>);

    return (
        <>
            <Head>
                <title>Task List App</title>
            </Head>

            <h1 className="text-5xl font-extrabold">Task List App</h1>
            <TaskList tasks={taskList} />
            <Button onClick={handleAddTaskClick}>
                <FontAwesomeIcon className="mr-2 -ml-1" icon={faPlus} />
                Add Task
            </Button>
            <Button onClick={handleDeleteListClick}>
                <FontAwesomeIcon className="mr-2 -ml-1" icon={faTrash} />
                Clear List
            </Button>
            {isDevMode &&
                <Button onClick={handleFillDummyDataClick}>
                    <FontAwesomeIcon className="mr-2 -ml-1" icon={faWandMagicSparkles} />
                    Fill with Dummy Tasks
                </Button>
            }
            {/* <button onClick={handleBtnClick}>+ Add Task</button>
            <button onClick={handleBtnDummyListClick}>Fill with dummy tasks</button>
            <button onClick={handleBtnClearListClick}>Clear List</button> */}
        </>
    );
};

export default Index;