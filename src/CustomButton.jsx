import PropTypes from "prop-types";

function CustomButton({
    text,
    onClick,
    className,
    icon,
    disabled = false,
    type = 'button',
    variant = 'primary',
    size = 'medium',
    id
}) {
    
    const baseStyles = "font-medium rounded-lg text-center transition-all duration-300";

    const variantStyles = {
        primary: "bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
    }

    const sizeStyles = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2 text-base w-48 h-12",
        large: "px-6 py-3 text-lg w-64 h-16",
    }

    return (
        <button
          id={id}
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {/* Display icon and text */}
          {icon && <span className="mr-2">{icon}</span>}
          {text}
        </button>
    );
}

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    icon: PropTypes.node,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['primary']).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    id: PropTypes.string
}

export default CustomButton;
