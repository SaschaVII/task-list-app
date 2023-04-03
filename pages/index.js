import TaskList from "@/components/taskList";
import Head from "next/head";
import Button from "@/components/button";

const Index = () => {
    return (
        <>
            <Head>
                <title>Task List App</title>
            </Head>
            <div className="container mx-auto px-4 pt-5">
                <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Task List App</h1>
                <TaskList />
            </div>
        </>
    );
};

export default Index;