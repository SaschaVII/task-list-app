const Button = ({ children, className }) => {
    const styles = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 " + className;

    return (
        <button className={styles}>
            {children}
        </button>
    );
}

export default Button;