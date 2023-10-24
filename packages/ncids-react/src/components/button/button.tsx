import React, { HTMLProps, FC } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
	label: string;
	classes?: string;
	disabled?: boolean;
	onClick?: () => void;
	type?: 'button' | 'reset' | 'submit';
	variant?: 'secondary' | 'outline' | 'big' | 'unstyled';
}

const Button: FC<ButtonProps> = ({
	label,
	classes,
	disabled,
	onClick,
	type,
	variant,
	...otherProps
}) => {
	// gather display classes
	const displayClasses = ['usa-button'];
	switch (variant) {
		case 'secondary':
			displayClasses.push('usa-button--secondary');
			break;
		case 'outline':
			displayClasses.push('usa-button--outline');
			break;
		case 'big':
			displayClasses.push('usa-button--big');
			break;
		case 'unstyled':
			displayClasses.push('usa-button--unstyled');
			break;
	}
	// add classes from props
	if (classes != null) {
		displayClasses.push(classes);
	}

	return (
		<button
			type={type}
			className={displayClasses.join(' ')}
			disabled={disabled}
			onClick={onClick}
			{...otherProps}>
			{label}
		</button>
	);
};

export default Button;
