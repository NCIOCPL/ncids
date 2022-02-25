export const getSubscribeDOM = () => {
	const div = document.createElement('div');

	div.innerHTML = `
		<form
			action='https://public.govdelivery.com/accounts/USNIHNCI/subscribers/qualify'
			aria-label='Test subscribe'
			class='usa-form'
			accept-charset='UTF-8'
			method='post'
			target='_blank'
			id='subscribe'>
			<input
				type='hidden'
				name='category_id'
				id='category_id'
				value='USNIHNCI_C25'
			/>
			<div class='usa-form-group'>
				<label class='usa-label' for='email'>
					Enter your email address
				</label>
				<input
					class='usa-input width-full'
					id='email'
					name='email'
					type='email'
					value=''
				/>
			</div>
			<button class='usa-button usa-button--accent-warm' type='submit'>
				Sign up
			</button>
		</form>
	`;

	return div;
};
