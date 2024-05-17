export const defaultSiteAlert = (): HTMLElement => {
	const div = document.createElement('div');

	// language=HTML
	div.innerHTML = `
		<section
			aria-label="Site alert"
			class="usa-site-alert"
		>
			<div class="usa-alert">
				<div class="usa-alert__body">
					<div class="usa-alert__nci-header">
						<span class="usa-alert__heading">COVID-19 resources.</span>
					</div>
					<div class="usa-alert__nci-content">
						<ul class="usa-list">
							<li>
								<a class="usa-link" href="javascript:void(0);">
									What people with cancer should know
								</a>
							</li>
							<li>
								<a class="usa-link" href="javascript:void(0);">
									Get the latest public health information from CDC
								</a>
							</li>
							<li>
								<a class="usa-link" href="javascript:void(0);">
									Guidance for cancer researchers
								</a>
							</li>
							<li>
								<a class="usa-link" href="javascript:void(0);">
									Get the latest research information from NIH
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	`;
	return div;
};
