import TaskList from "@/components/taskList";
import Head from "next/head";
import Button from "@/components/button";

const Index = () => {
    // * Click Handlers
    // const handleAddTaskClick = () => addTask();
    // const handleDeleteListClick = () => setTaskList([]);

    return (
        <>
            <Head>
                <title>Task List App</title>
            </Head>

            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Task List App</h1>
            <TaskList />
            {/* <Button onClick={handleAddTaskClick}>
                <FontAwesomeIcon className="mr-2 -ml-1" icon={faPlus} />
                Add Task
            </Button>
            <Button onClick={handleDeleteListClick}>
                <FontAwesomeIcon className="mr-2 -ml-1" icon={faTrash} />
                Clear List
            </Button>
            <Button onClick={handleFillDummyDataClick}>
                <FontAwesomeIcon className="mr-2 -ml-1" icon={faWandMagicSparkles} />
                Fill with Dummy Tasks
            </Button>*/}
            {/* <button onClick={handleBtnClick}>+ Add Task</button>
            <button onClick={handleBtnDummyListClick}>Fill with dummy tasks</button>
            <button onClick={handleBtnClearListClick}>Clear List</button> */}
        </>
    );
};

export default Index;