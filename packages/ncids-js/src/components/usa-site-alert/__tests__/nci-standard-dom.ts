export const getStandardAlert = () => {
	const div = document.createElement('div');

	// language=HTML
	div.innerHTML = `
		<section
			aria-label="Site alert"
			class="usa-site-alert usa-site-alert--nci-standard usa-site-alert--nci-info"
			id="site-alert"
		>
			<div class="usa-alert">
				<div class="usa-alert__body">
					<div class="usa-alert__nci-header">
						<h3 class="usa-alert__heading">COVID-19 resources.</h3>
					</div>

					<div class="usa-alert__nci-content" id="site-alert-content">
						<ul class="usa-alert__nci-list">
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
