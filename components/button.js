const Button = ({ children, className, onClick, type }) => {
    const stylesPrimary = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2";
    const stylesDanger = "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2";
    const stylesSecondary = "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800";

    let styles = "";
    switch (type) {
        case "primary":
            styles = stylesPrimary;
            break;
        case "secondary":
            styles = stylesSecondary;
            break;
        case "danger":
            styles = stylesDanger;
            break;
        default:
            styles = stylesPrimary;
            break;
    }

    styles += " " + className;

    return (
        <button className={styles} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;