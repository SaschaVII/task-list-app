import TaskList from "@/components/taskList";
import useLocalStorageTaskList from "@/hooks/useLocalStorageTaskList";

const Index = () => {
    const [taskList, setTaskList] = useLocalStorageTaskList();

    const handleBtnClick = () => {
        addTask();
    };

    const handleBtnClearListClick = () => {
        setTaskList([]);
    };

    const handleBtnDummyListClick = () => {
        setTaskList(
            [{
                "id": 1,
                "title": "Complete Task List App",
                "description": "Finish building and testing the task list app by end of week",
                "completed": false,
                "dueDate": "2023-03-19"
            },
            {
                "id": 2,
                "title": "Prepare for Interview",
                "description": "Research the company, practice answering interview questions, and dress professionally",
                "completed": true,
                "dueDate": "2023-03-22"
            },
            {
                "id": 3,
                "title": "Go to the Gym",
                "description": "Do 30 minutes of cardio and 20 minutes of weight lifting",
                "completed": false,
                "dueDate": "2023-03-17"
            },
            {
                "id": 4,
                "title": "Buy Groceries",
                "description": "Get bread, milk, eggs, and fruit",
                "completed": false,
                "dueDate": "2023-03-16"
            },
            {
                "id": 5,
                "title": "Read a Book",
                "description": "Read at least one chapter of 'The Catcher in the Rye'",
                "completed": true,
                "dueDate": "2023-03-18"
            }]
        );
    };

    const addTask = () => {
        const newTask = {
            "id": taskList.length,
            "title": "Lead a 7a",
            "description": "Readpoint a 7a indoor sport climb.",
            "completed": false,
            "dueDate": "2024-01-01"
        };

        setTaskList([...taskList, newTask]);
    };

    if (!taskList) return (<p>loading...</p>);

    return (
        <>
            <TaskList tasks={taskList} />
            <button onClick={handleBtnClick}>+ Add Task</button>
            <button onClick={handleBtnDummyListClick}>Fill with dummy tasks</button>
            <button onClick={handleBtnClearListClick}>Clear List</button>
        </>
    );
};

export default Index;