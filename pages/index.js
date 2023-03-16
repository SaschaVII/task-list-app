import TaskList from "@/components/taskList";
import { useEffect, useState } from "react";

const Index = () => {
    const [taskList, setTaskList] = useState([]);
    // TODO: Add loading indicator and provide a loadingState from a custom hook

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('/api/tasks');
            const result = await response.json();
            setTaskList(result);
            // console.log("🚀 ~ file: index.js:11 ~ getData ~ result:", result);
        };

        getData();
    }, []);
    
    if (taskList.length === 0) return (<p>loading...</p>);

    return (
        <>
            <TaskList tasks={taskList} />
        </>
    );
};

export default Index;