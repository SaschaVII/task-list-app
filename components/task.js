import { faGlasses, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, isCurrent, onComplete, onDelete }) => {
    // * Styles
    const currentStyles = "bg-blue-100 py-10";
    const notCurrentStyles = "py-2";
    const completedStyles = "line-through";
    const baseStyles = "px-5 py-10 flex items-center space-x-4 hover:bg-blue-200";
    const styles = baseStyles + (isCurrent ? ` ${currentStyles}` : ` ${notCurrentStyles}`);
    if (!onComplete) onComplete = () => { };

    // * Event Handlers
    const handleCompleteTask = () => onComplete(task.id);
    const handleDeleteClick = () => onDelete(task.id);
    const handleFocusClick = () => console.log("Focus Clicked");
    const handleEditClick = () => console.log("Edit Clicked");

    // * Helper Functions
    const calculateDaysFromNow = (date) => {
        const today = new Date();
        const dueDate = new Date(date);
        const diffTime = dueDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const daysFromNowString = (date) => {
        const days = calculateDaysFromNow(date);
        return (days === 0) ? "Due Today" : (days === 1) ? "Due Tomorrow" : `Due in ${days} days`;
    };

    return (
        <>
            <div className={styles}>
                <div className="flex-shrink-0 hover:text-blue-500 p-2 cursor-pointer" onClick={handleCompleteTask}>
                    <FontAwesomeIcon className="text-xl" icon={(task.completed) ? faSquareCheck : faSquare} />
                </div>
                <div className="flex-1 min-w-0">
                    <h2 className={'text-md font-semibold ' + (task.completed && completedStyles)}>{task.title}</h2>
                    {isCurrent && <p className="text-sm text-gray-500">{task.description}</p>}
                </div>
                <div className="flex flex-col items-center">
                    {!task.completed && (
                        <>
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
                            <div>{daysFromNowString(task.dueDate)}</div>
                        </>
                    )}
                    {task.completed && (
                        <div className="flex">
                            <div onClick={handleDeleteClick} className="hover:text-blue-500 p-2 cursor-pointer">
                                <FontAwesomeIcon icon={faTrash} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Task;