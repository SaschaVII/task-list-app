import { useRouter } from 'next/router';
import useLocalStorageTaskList from "@/hooks/useLocalStorageTaskList";

const TaskDetails = () => {
    const router = useRouter();
    const [taskList, setTaskList] = useLocalStorageTaskList();
    const currentTask = taskList.find(x => x.id === Number(router.query.id));

    // if task not found, return error message
    if (!currentTask) return <p>Task not found!</p>;

    // if task found, return task details
    return (
        <>
            <h2>Title: {currentTask.title}</h2>
            <p>Description: {currentTask.description}</p>
            <p>Due Date: {currentTask.dueDate}</p>
            <p>Priority: {currentTask.priority}</p>
        </>
    );
};

export default TaskDetails;