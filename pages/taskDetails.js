import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useLocalStorageTaskList from "@/hooks/useLocalStorageTaskList";
import Button from '@/components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faCircle, faCircleNotch, faFloppyDisk, faSpinner, faStroopwafel, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskDetails = () => {
    const router = useRouter();
    const [taskList, setTaskList] = useLocalStorageTaskList();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const currentTask = taskList.find(x => x.id === Number(router.query.id));
        if (currentTask) {
            setFormData({
                id: currentTask.id,
                title: currentTask.title,
                description: currentTask.description,
                priority: Number(currentTask.priority),
                dueDate: currentTask.dueDate,
                completed: currentTask.completed,
                focused: currentTask.focused
            });
        }
    }, [router.query.id, taskList, router]);

    // * Event Handlers
    const handleBack = () => {
        router.push("/");
    };

    const handleSave = () => {
        const newTask = { ...formData };

        const updatedTaskList = taskList.map(task => {
            if (task.id === newTask.id) {
                task = newTask;
            }
            return task;
        });

        setTaskList(updatedTaskList);
        alert("Task saved!");
        router.push("/");
    };

    const handleDelete = () => {
        const updatedTaskList = taskList.filter(task => task.id !== formData.id);
        setTaskList(updatedTaskList);
        alert("Task deleted!");
        router.push("/");
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSave();
        }
    };

    const handleTextareaKeyDown = (event) => {
        event.stopPropagation();

        // fire save event except for when enter and shift are pressed together
        if (event.key === "Enter" && !event.shiftKey) {
            handleSave();
        }
    };

    // display loading message whilst form data is being populated
    if (!formData.hasOwnProperty("id")) return (
        <div className="container mx-auto px-4 pt-5 text-xl">
            <FontAwesomeIcon className="mr-2 animate-spin" icon={faCircleNotch} />
            Loading...
        </div>
    );

    // if task found, return task details
    return (
        <div className="container mx-auto px-4 pt-5">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Task Details</h1>
            <form className="mb-4" onKeyDown={handleKeyDown}>
                <label className="block mb-2" htmlFor="title">Title</label>
                <input className="w-full mb-4 p-2 border border-gray-300 rounded"
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange} />

                <label className="block mb-2" htmlFor="description">Description</label>
                <textarea className="w-full mb-4 p-2 border border-gray-300 rounded"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    onKeyDown={handleTextareaKeyDown} />

                <label className="block mb-2" htmlFor="dueDate">Due Date</label>
                <input className="w-full mb-4 p-2 border border-gray-300 rounded"
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange} />

                <label className="block mb-2" htmlFor="priority">Priority</label>
                <input className="w-full mb-4 p-2 border border-gray-300 rounded"
                    type="number"
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange} />
            </form>
            <Button onClick={handleSave}>
                <FontAwesomeIcon className="mr-2" icon={faFloppyDisk} />
                Save
            </Button>
            <Button type="danger" onClick={handleDelete}>
                <FontAwesomeIcon className="mr-2" icon={faTrash} />
                Delete
            </Button>
            <Button type="secondary" onClick={handleBack} className="float-right">
                <FontAwesomeIcon className="mr-2" icon={faArrowLeftLong} />
                Back
            </Button>
        </div>
    );
};

export default TaskDetails;