import { faGlasses, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, isCurrent, onComplete }) => {
    // * Styles
    const currentStyles = "bg-blue-100 py-10";
    const notCurrentStyles = "py-2";
    const baseStyles = "px-5 py-10 flex items-center space-x-4 hover:bg-blue-200";
    const styles = baseStyles + (isCurrent ? ` ${currentStyles}` : ` ${notCurrentStyles}`);
    if (!onComplete) onComplete = () => { };

    // * Event Handlers
    const handleCompleteTask = () => onComplete(task.id);
    const handleDeleteClick = () => console.log("Delete Clicked");
    const handleFocusClick = () => console.log("Focus Clicked");
    const handleEditClick = () => console.log("Edit Clicked");

    return (
        <>
            <div className={styles}>
                <div className="flex-shrink-0 hover:text-blue-500 p-2 cursor-pointer" onClick={handleCompleteTask}>
                    <FontAwesomeIcon className="text-xl" icon={(task.completed) ? faSquareCheck : faSquare} />
                </div>
                <div className="flex-1 min-w-0">
                    <h2 className="text-md font-semibold">{task.title}</h2>
                    {isCurrent && <p className="text-sm text-gray-500">{task.description}</p>}
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex">
                        <div onClick={handleDeleteClick} className="hover:text-blue-500 p-2 cursor-pointer">
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                        <div onClick={handleFocusClick} className="hover:text-blue-500 p-2 cursor-pointer">
                            <FontAwesomeIcon icon={faGlasses} />
                        </div>
                        <div onClick={handleEditClick} className="hover:text-blue-500 p-2 cursor-pointer">
                            <FontAwesomeIcon icon={faPen} />
                        </div>
                    </div>
                    <div>
                        <strong>Priority: {task.priority}</strong>
                    </div>
                    <div>Due Date: {task.dueDate}</div>
                </div>
            </div>
        </>
    );
};

export default Task;