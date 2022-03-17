export const getExampleDOM = () => {
	const div = document.createElement('div');

	div.innerHTML = `
	<header class="usa-header usa-header--nci-extended" id='nci-header'>
		<div class="usa-header--nci-navbar">
			<div class="usa-logo--nci-logo" id="extended-mega-logo">
				<em class="usa-logo--nci-logo__text">
					<a href="http://cancer.gov" title="Home" aria-label="Home">
						<img src="<img src="img/nci-logo-full.png" class="nci-logo"/>
					</a>
				</em>
			</div>
	
		</div>
		<nav aria-label="Primary navigation" class="usa-header--nci-nav">
			<div class="usa-header--nci-nav__inner">
				<button class="usa-header--nci-menu-btn">Menu</button>
				<ul class="usa-header--nci-nav__primary usa-accordion">
	
					<li class="usa-header--nci-nav__primary-item">
						<button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-mega-nav-section-one">
							<span>Current section</span>
						</button>
					</li>
					<li class="usa-header--nci-nav__primary-item">
						<button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
							<span>Second Section</span>
						</button>
					</li>
					<li class="usa-header--nci-nav__primary-item">
						<button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
							<span>Third Section</span>
						</button>
					</li>
					<li class="usa-header--nci-nav__primary-item">
					<button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
						<span>Fourth Section</span>
					</button>
				</li>
				<li class="usa-header--nci-nav__primary-item">
					<button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="extended-mega-nav-section-two">
						<span>Fifth Section</span>
					</button>
				</li>
	
			</ul>
				<div class="usa-header--nci-nav__secondary">
					<form class="usa-header--nci-search usa-search--small" role="search">
						<label class="usa-sr-only" for="extended-mega-search-field-en-small">
							Search
						</label>
						<input class="usa-input" id="extended-mega-search-field-en-small" type="search" name="search">
						<button class="usa-button" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	</header>`;

	return div;
};
