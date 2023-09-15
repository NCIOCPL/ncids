export const getExampleDOM = (): HTMLElement => {
	const div = document.createElement('div');

	div.innerHTML = `
	<div class="container">
	<button class="button">
		Top Level
	</button>
		<ul class="nci-nav">
			<li class="primary-item">
				<button class="button">
					Current section
				</button>
			</li>
			<li class="primary-item">
				<button class="button">
					Second Section
				</button>
			</li>
			<li class="primary-item">
				<button class="button">
					Third Section
				</button>
			</li>
			<li class="primary-item">
			<button class="button">
				Fourth Section
			</button>
		</li>
		<li class="primary-item">
			<button class="button">
				Fifth Section
			</button>
		</li>
	</ul>
	</div>`;

	return div;
};
