import TaskList from "@/components/taskList";
import { useEffect, useState } from "react";

const Index = () => {
    const [taskList, setTaskList] = useState();
    // TODO: Add loading indicator and provide a loadingState from a custom hook

    const dummyTasks =
        [
            {
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
            }
        ];

    // fetching tasks from server
    // useEffect(() => {
    //     const getTasks = async () => {
    //         const response = await fetch('/api/tasks');
    //         const result = await response.json();
    //         setTaskList(result);
    //         // console.log("🚀 ~ file: index.js:11 ~ getTasks ~ result:", result);
    //     };

    //     getTasks();
    // }, []);

    // Fill local storage with dummy data if none present
    useEffect(() => {
        console.log("localStorage: " + typeof localStorage.getItem('taskList'));
        if (Array.isArray(localStorage.getItem('taskList'))) {
            console.log("are we here???")
            const storedData = JSON.parse(localStorage.getItem('taskList'));
        } else {
            localStorage.setItem('taskList', JSON.stringify(dummyTasks));
        }
    });

    // Load data from local storage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('taskList');
        if (storedData) {
            setTaskList(JSON.parse(storedData));
        }
    }, []);

    // Save data to local storage when taskList changes
    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);


    if (!taskList) return (<p>loading...</p>);

    return (
        <>
            <TaskList tasks={taskList} />
        </>
    );
};

export default Index;