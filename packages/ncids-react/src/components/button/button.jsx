import React from "react";
import PropTypes from "prop-types";

const Button = ({
	label,
	classes = "",
	type = "button",
	disabled = false,
	onClick,
	...otherProps
}) => {
	// gather up classes display classes
	let displayClasses = ["usa-button"];
	// add classes from props
	displayClasses.push(classes);

	return (
		<button
			type={type}
			className={displayClasses.join(" ")}
			disabled={disabled}
			onClick={onClick}
			{...otherProps}
		>
			{label}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.node.isRequired,
	classes: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	type: PropTypes.oneOf(["button", "reset", "submit"]),
	otherProps: PropTypes.array,
};

export default Button;
