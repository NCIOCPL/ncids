export const getSlimAlert = (): HTMLElement => {
	const div = document.createElement('div');

	// language=HTML
	div.innerHTML = `
		<section
			aria-label="Site alert"
			class="usa-site-alert usa-site-alert--nci-slim"
			id="site-alert"
		>
			<div class="usa-alert">
				<div class="usa-alert__body">
					<div class="usa-alert__text">
						<strong>Short alert message.</strong> Additional context and followup
						information including
						<a class="usa-link" href="javascript:void(0);">a link</a>.
					</div>
				</div>
			</div>
		</section>
	`;
	return div;
};
