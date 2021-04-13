import React from "react";
import PropTypes from "prop-types";

const Button = ({
	classes = "",
	disabled = false,
	label,
	onClick,
	type = "button",
	variant = "",
	...otherProps
}) => {
	// gather up classes display classes
	let displayClasses = ["usa-button"];
	switch (variant) {
		case "secondary":
			displayClasses.push("usa-button--secondary");
			break;
		case "outline":
			displayClasses.push("usa-button--outline");
			break;
		case "big":
			displayClasses.push("usa-button--big");
			break;
		case "unstyled":
			displayClasses.push("usa-button--unstyled");
			break;
	}
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
	classes: PropTypes.string,
	disabled: PropTypes.bool,
	label: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	otherProps: PropTypes.array,
	type: PropTypes.oneOf(["button", "reset", "submit"]),
	variant: PropTypes.oneOf(["secondary", "outline", "big", "unstyled"]),
};

export default Button;
