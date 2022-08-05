// MegaMenu HTML Section language=HTML
export const MegaMenu = `
	<div id="megamenu-layer" class="nci-megamenu">
		<div class="grid-container">
			<div class="grid-row">
				<div class="grid-col-3 nci-megamenu__primary-pane">
					<a class="nci-megamenu__primary-link" href="/">Explore Section</a>
				</div>

				<div class="nci-megamenu__items-pane grid-col-9">
					<div class="grid-row grid-gap">
						<div class="grid-col-4">
							<ul class="nci-megamenu__list">
								<li class="nci-megamenu__list-item">
									<a class="nci-megamenu__list-item-link" href="/">Section Header</a>

									<ul class="nci-megamenu__sublist">
										<li class="nci-megamenu__sublist-item">
											<a class="nci-megamenu__sublist-item-link" href="/">Navigation link</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a class="nci-megamenu__sublist-item-link" href="/">Navigation link</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>

						<div class="grid-col-4">
							<ul class="nci-megamenu__list">
								<li class="nci-megamenu__list-item">
									<a href="/">
										Section Header
									</a>
									<ul class="nci-megamenu__sublist">
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												A very long navigation link that goes onto two lines
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												A very long navigation link that goes onto two lines
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>

						<div class="grid-col-4">
							<ul class="nci-megamenu__list">
								<li class="nci-megamenu__list-item">
									<a href="/">
										Section Header
									</a>
									<ul class="nci-megamenu__sublist">
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>

					<div class="grid-row grid-gap">
						<div class="grid-col-4">
							<ul class="nci-megamenu__list">
								<li class="nci-megamenu__list-item">
									<a href="/">
										Section Header
									</a>
									<ul class="nci-megamenu__sublist">
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												A very long navigation link that goes onto two lines
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>

						<div class="grid-col-4">
							<ul class="nci-megamenu__list">
								<li class="nci-megamenu__list-item">
									<a href="/">
										Section Header
									</a>
									<ul class="nci-megamenu__sublist">
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>

						<div class="grid-col-4">
							<ul class="nci-megamenu__list">
								<li class="nci-megamenu__list-item">
									<a href="/">
										Section Header
									</a>
									<ul class="nci-megamenu__sublist">
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												Navigation link
											</a>
										</li>
										<li class="nci-megamenu__sublist-item">
											<a href="/">
												A very long navigation link that goes onto two lines
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
`;

//Primary Navigation - no JS
export const primaryNojs = `
	<ul class="nci-header-nav__primary">
		<li class="nci-header-nav__primary-item">
			<a href="/" class="nci-header-nav__primary-link">
				<span>Current section</span>
			</a>
		</li>
		<li class="nci-header-nav__primary-item">
			<a href="/" class="nci-header-nav__primary-link">
				<span>Second Section</span>
			</a>
		</li>
		<li class="nci-header-nav__primary-item">
			<a href="/" class="nci-header-nav__primary-link">
				<span>Third Section</span>
			</a>
		</li>
		<li class="nci-header-nav__primary-item">
			<a href="/" class="nci-header-nav__primary-link">
				<span>Fourth Section</span>
			</a>
		</li>
		<li class="nci-header-nav__primary-item">
			<a href="/" class="nci-header-nav__primary-link">
				<span>Fifth Section</span>
			</a>
		</li>
		<li class="nci-header-nav__primary-item">
			<a href="/" class="nci-header-nav__primary-link">
				<span>Sixth Section</span>
			</a>
		</li>
	</ul>`;

//Primary Navigation - default
export const primary = `
		<ul class="nci-header-nav__primary">
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button"
				  aria-expanded="false"
					aria-controls="megamenu-layer">
					<span>Current section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button"
					aria-expanded="false"
					aria-controls="megamenu-layer">
					<span>Second Section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button"
					aria-expanded="false"
					aria-controls="megamenu-layer">
					<span>Third Section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button"
					aria-expanded="false"
					aria-controls="megamenu-layer">
					<span>Fourth Section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button"
					aria-expanded="false"
					aria-controls="megamenu-layer">
					<span>Fifth Section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<a href="" class="nci-header-nav-link"><span>Simple link</span></a>
			</li>
</ul>`;

//Primary Navigation - Current
export const primaryCurrent = `
		<ul class="nci-header-nav__primary">
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button usa-current"
				aria-expanded="true"
				aria-controls="megamenu-layer">
					<span>Current section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button usa-current"
					aria-expanded="false"
					aria-controls="megamenu-layer">
					<span>Second Section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button usa-current"
					aria-expanded="false"
					aria-controls="megamenu-layer">
					<span>Third Section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button usa-current"
					aria-expanded="false"
					aria-controls="megamenu-layer">
					<span>Fourth Section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<button href="/" class="nci-header-nav__primary-button usa-current"
					aria-expanded="false"
					aria-controls="megamenu-layer">
					<span>Fifth Section</span>
				</button>
			</li>
			<li class="nci-header-nav__primary-item">
				<a href="" class="nci-header-nav-link usa-current"><span>Simple link</span></a>
			</li>
</ul>`;

//Primary Navigation - Active With MegaMenu
export const primaryActiveMega = `
<ul class="nci-header-nav__primary">
<li class="nci-header-nav__primary-item">
	<button href="/" class="nci-header-nav__primary-button usa-current"
	aria-expanded="true"
	aria-controls="megamenu-layer">
		<span>Current section</span>
	</button>
	${MegaMenu}
</li>
<li class="nci-header-nav__primary-item">
	<button href="/" class="nci-header-nav__primary-button"
		aria-expanded="false"
		aria-controls="megamenu-layer">
		<span>Second Section</span>
	</button>
</li>
<li class="nci-header-nav__primary-item">
	<button href="/" class="nci-header-nav__primary-button"
		aria-expanded="false"
		aria-controls="megamenu-layer">
		<span>Third Section</span>
	</button>
</li>
<li class="nci-header-nav__primary-item">
	<button href="/" class="nci-header-nav__primary-button"
		aria-expanded="false"
		aria-controls="megamenu-layer">
		<span>Fourth Section</span>
	</button>
</li>
<li class="nci-header-nav__primary-item">
	<button href="/" class="nci-header-nav__primary-button"
		aria-expanded="false"
		aria-controls="megamenu-layer">
		<span>Fifth Section</span>
	</button>
</li>
<li class="nci-header-nav__primary-item">
	<a href="" class="nci-header-nav-link"><span>Simple link</span></a>
</li>
</ul>`;
