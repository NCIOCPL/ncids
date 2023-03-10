import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const NCISignUp = ({ accountId, categoryId }) => {
	const [isValid, setValidation] = useState(true);
	const [form, setInputValue] = useState({
		categoryId: categoryId ? categoryId : '',
		email: '',
	});

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setInputValue((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		if (
			form.email &&
			/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
		) {
			setValidation(() => true);
		} else {
			e.preventDefault();
			setValidation(() => false);
			setInputFocus();
		}
	};

	const useFocus = () => {
		const htmlElRef = useRef(null);
		const setFocus = () => {
			htmlElRef.current && htmlElRef.current.focus();
		};

		return [htmlElRef, setFocus];
	};

	const [inputRef, setInputFocus] = useFocus();

	return (
		<div className="usa-sign-up">
			<div className="usa-sign-up__heading">Sign up for email updates</div>
			<form
				acceptCharset="UTF-8"
				action={`https://public.govdelivery.com/accounts/${accountId}/subscribers/qualify`}
				aria-label="Footer subscribe"
				className="usa-form"
				method="post"
				noValidate
				onSubmit={handleSubmit}
				target="_blank">
				{categoryId && (
					<input
						onChange={handleOnChange}
						ref={inputRef}
						value={form.categoryId}
						className="display-none disabled"
						id="category_id"
						name="category_id"
						type="hidden"
						disabled
					/>
				)}

				<div
					className={`usa-form-group ${!isValid && 'usa-form-group--error'}`}>
					<label
						className={`usa-label ${!isValid && 'usa-label--error'}`}
						htmlFor="email">
						Enter your email address
					</label>

					{!isValid && (
						<span className="usa-error-message" id="email-error-message">
							Enter a valid email address
						</span>
					)}

					<input
						className={`usa-input  ${
							!isValid && 'usa-input--error'
						} width-full`}
						onChange={handleOnChange}
						ref={inputRef}
						value={form.email}
						aria-describedby="email-error-message"
						id="email"
						name="email"
						type="email"
					/>
				</div>
				<button className="usa-button usa-button--accent-warm" type="submit">
					Sign up
				</button>
			</form>
		</div>
	);
};

NCISignUp.propTypes = {
	accountId: PropTypes.string,
	categoryId: PropTypes.string,
};

NCISignUp.defaultProps = {
	accountId: '',
	categoryId: '',
};

export default NCISignUp;
