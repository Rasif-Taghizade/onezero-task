// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick, type = 'button', className = '' }) => {
    return (
        <button className={`btn ${className}`} type={type} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
