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

            <h1 className="text-5xl font-extrabold">Task List App</h1>
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