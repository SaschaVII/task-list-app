import { faCaretDown, faCaretUp, faPen, faThumbTack, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Task = ({ task, isCurrent, onComplete, onDelete, onFocus, onEdit, onPriorityChange }) => {
    // * Styles
    const currentStyles = "bg-blue-100 py-10 shadow-lg";
    const notCurrentStyles = "py-2";
    const completedStyles = "line-through";
    const baseStyles = "px-5 py-10 flex items-center space-x-4 hover:bg-blue-200";
    const styles = baseStyles + (isCurrent ? ` ${currentStyles}` : ` ${notCurrentStyles}`);

    // * Event Handlers
    const handleCompleteTask = () => onComplete(task.id);
    const handleDeleteClick = () => onDelete(task.id);
    const handleFocusClick = () => onFocus(task.id);
    const handleEditClick = () => onEdit(task.id);
    const handlePriorityUpClick = () => onPriorityChange(task.id, task.priority - 1);
    const handlePriorityDownClick = () => onPriorityChange(task.id, task.priority + 1);

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
                    <h2 className={'text-xl font-semibold inline-block hover:text-blue-500 cursor-pointer '
                        + (task.completed && completedStyles)}
                        onClick={handleEditClick}>
                        {task.title}
                    </h2>
                    {isCurrent && <p className="text-md text-gray-500">{task.description}</p>}
                </div>
                <div className={(isCurrent) ? "flex flex-col gap-3 items-end" : "flex flex-col items-end gap-3 md:flex-row-reverse md:items-center md:gap-5"}>
                    {!task.completed && (
                        <>
                            <div className="flex">
                                <div onClick={handleFocusClick} className={"hover:text-blue-500 cursor-pointer px-3 py-1" + ((task.focused) ? " text-blue-500" : "")}>
                                    <FontAwesomeIcon icon={faThumbTack} rotation={(task.focused) ? 90 : 0} />
                                </div>
                                <div onClick={handleEditClick} className="hover:text-blue-500 cursor-pointer px-3 py-1">
                                    <FontAwesomeIcon icon={faPen} />
                                </div>
                                <div onClick={handleDeleteClick} className="hover:text-blue-500 cursor-pointer px-3 py-1">
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>
                            <div className="px-3 md:order-last">{daysFromNowString(task.dueDate)}</div>
                            <div className="flex items-center">
                                <strong className="px-3">Priority: {task.priority}</strong>
                                <div className="flex flex-col pr-3">
                                    <div className="hover:text-blue-500 cursor-pointer h-6 px-2 pt-2 flex items-center" onClick={handlePriorityUpClick}>
                                        <FontAwesomeIcon icon={faCaretUp} />
                                    </div>
                                    <div className="hover:text-blue-500 cursor-pointer h-6 px-2 pb-2 flex items-center" onClick={handlePriorityDownClick}>
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </div>
                                </div>
                            </div>
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