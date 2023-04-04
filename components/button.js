const Button = ({ children, className, onClick, type }) => {
    const stylesPrimary = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2";
    const stylesDanger = "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2";
    let styles = stylesPrimary;
    if (type === "danger") { styles = stylesDanger; }

    styles += " " + className;

    return (
        <button className={styles} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;