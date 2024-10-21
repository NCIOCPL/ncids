import { closeButton } from './nci-header-close';

// Default Mobile Navigation
export const mobileItems = `
<div class="nci-header-mobilenav active" tabindex="-1" role="dialog" 
aria-modal="true" id="nci-header-mobilenav" aria-live="polite" aria-busy="false">
	${closeButton}
	<div class="nci-is-loading hidden"></div>
	<nav class="nci-header-mobilenav__nav">
		<ul class="nci-header-mobilenav__list">
			<li class="nci-header-mobilenav__list-item">
				<a class="nci-header-mobilenav__list-link" href="file:///Users/tharpol/code/ncids-example-sites/ncids-webpack/dist/index.html#" data-options="0">
					Current section
				</a>
			</li>
			<li class="nci-header-mobilenav__list-item">
				<a class="nci-header-mobilenav__list-link" href="file:///Users/tharpol/code/ncids-example-sites/ncids-webpack/dist/index.html#" data-options="0">
					Second Section
				</a>
			</li>
			<li class="nci-header-mobilenav__list-item">
				<a class="nci-header-mobilenav__list-link" href="file:///Users/tharpol/code/ncids-example-sites/ncids-webpack/dist/index.html#" data-options="0">
					Third Section
				</a>
			</li>
			<li class="nci-header-mobilenav__list-item">
				<a class="nci-header-mobilenav__list-link" href="file:///Users/tharpol/code/ncids-example-sites/ncids-webpack/dist/index.html#" data-options="0">
					Fourth Section
				</a>
			</li>
			<li class="nci-header-mobilenav__list-item">
				<a class="nci-header-mobilenav__list-link" href="file:///Users/tharpol/code/ncids-example-sites/ncids-webpack/dist/index.html#" data-options="0">
					Fifth Section
				</a>
			</li>
		</ul>
	</nav>
</div>`;

// Default Mobile Navigation
export const mobile = `
<div class="nci-header-mobilenav active" tabindex="-1" role="dialog" 
aria-modal="true" id="nci-header-mobilenav" aria-live="polite" aria-busy="false">
	${closeButton}
	<div class="nci-is-loading hidden"></div>
	<nav class="nci-header-mobilenav__nav">
		<ul class="nci-header-mobilenav__list">
			<li data-options="0"
			data-isroot="false"
			data-path="/about"
			id="ab8c94e7-02f5-5656-be3b-3568fbdfd105"
			class="nci-header-mobilenav__list-node">
				<button class="nci-header-mobilenav__list-label">Current Section</button>
			</li>
			<li data-options="0"
			data-isroot="false"
			data-path="/example"
			id="ab8c94e7-02f5-5656-be3b-3568fbdfd105"
			class="nci-header-mobilenav__list-node">
				<button class="nci-header-mobilenav__list-label">Second Section</button>
			</li>
			<li data-options="0"
			data-isroot="false"
			data-path="/example"
			id="ab8c94e7-02f5-5656-be3b-3568fbdfd105"
			class="nci-header-mobilenav__list-node">
				<button class="nci-header-mobilenav__list-label">Third Section</button>
			</li>
			<li data-options="0"
			data-isroot="false"
			data-path="/example"
			id="ab8c94e7-02f5-5656-be3b-3568fbdfd105"
			class="nci-header-mobilenav__list-node">
				<button class="nci-header-mobilenav__list-label">Fourth Section</button>
			</li>
			<li data-options="0"
			data-isroot="false"
			data-path="/example"
			id="ab8c94e7-02f5-5656-be3b-3568fbdfd105"
			class="nci-header-mobilenav__list-node">
				<button class="nci-header-mobilenav__list-label">Fifth Section</button>
			</li>
		</ul>
	</nav>
</div>`;

// Default Mobile Navigation - First Level
export const mobileFirstLevel = `
<div class="nci-header-mobilenav active" tabindex="-1" role="dialog" 
aria-modal="true" id="nci-header-mobilenav" aria-live="polite" aria-busy="false">
	${closeButton}
	<div class="nci-is-loading hidden"></div>
	<nav class="nci-header-mobilenav__nav">
		<ul class="nci-header-mobilenav__list">
			<li data-options="0"
			data-isroot="false"
			data-path="/about"
			class="nci-header-mobilenav__list-node active">
			<button class="nci-header-mobilenav__list-msg">Main Menu</button>
			</li>
			<li class="nci-header-mobilenav__list-holder">
				<ul class="nci-header-mobilenav__list">
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a class="nci-header-mobilenav__list-link"
						href="/about-cancer">Explore Section</a>
					</li>
					<li data-options="0"
					data-isroot="false" data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Second Section</button>
					</li>
					<li data-options="0"
					data-isroot="false" data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Third Section Link With Long Title Example</button>
					</li>
					<li data-options="0"
					data-isroot="false"
					data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Fourth Section</button>
					</li>
					<li data-options="0"
					data-isroot="false"
					data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Fifth Section</button>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</div>`;

// Default Mobile Navigation - Hover
export const mobileHover = `
<div class="nci-header-mobilenav active" tabindex="-1" role="dialog" 
aria-modal="true" id="nci-header-mobilenav" aria-live="polite" aria-busy="false">
	${closeButton}
	<div class="nci-is-loading hidden"></div>
	<nav class="nci-header-mobilenav__nav">
		<ul class="nci-header-mobilenav__list">
			<li data-options="0"
			data-isroot="false"
			data-path="/about"
			class="nci-header-mobilenav__list-node active">
				<button class="nci-header-mobilenav__list-msg">Main Menu</button>
			</li>
			<li class="nci-header-mobilenav__list-holder">
				<ul class="nci-header-mobilenav__list">
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a class="nci-header-mobilenav__list-link"
						href="/about-cancer">Explore Section</a>
					</li>
					<li data-options="0"
					data-isroot="false"
					data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label hover">Second Section</button>
					</li>
					<li data-options="0"
					data-isroot="false"
					data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Third Section Link With Long Title Example</button>
					</li>
					<li data-options="0"
					data-isroot="false"
					data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Fourth Section</button>
					</li>
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
					<a aria-current="page"
					class="nci-header-mobilenav__list-link hover"
					href="/about">Example Page</a>
				</li>

				</ul>
			</li>
		</ul>
	</nav>
</div>`;

// Default Mobile Navigation - Second Level
export const mobileSecondLevel = `
<div class="nci-header-mobilenav active" tabindex="-1" role="dialog" 
aria-modal="true" id="nci-header-mobilenav" aria-live="polite" aria-busy="false">
	${closeButton}
	<div class="nci-is-loading hidden"></div>
	<nav class="nci-header-mobilenav__nav">
		<ul class="nci-header-mobilenav__list">
			<li data-options="0"
			data-isroot="false"
			data-path="/about"
			class="nci-header-mobilenav__list-node active">
			<button class="nci-header-mobilenav__list-msg">Back</button>
			</li>
			<li class="nci-header-mobilenav__list-holder">
				<ul class="nci-header-mobilenav__list">
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a class="nci-header-mobilenav__list-link"
						href="/about-cancer">Explore Second Section</a>
					</li>
					<li data-options="0"
					data-isroot="false"
					data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Third Section</button>
					</li>
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a aria-current="page"
						class="nci-header-mobilenav__list-link"
						href="/about">An Example Navigation Link With A Long Label</a>
					</li>
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a aria-current="page"
						class="nci-header-mobilenav__list-link"
						href="/about">Medium Example Text Link</a>
					</li>
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a aria-current="page"
						class="nci-header-mobilenav__list-link"
						href="/about">Example Link</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</div>`;

// Default Mobile Navigation - Active Section
export const mobileActiveSection = `
<div class="nci-header-mobilenav active" tabindex="-1" role="dialog" 
aria-modal="true" id="nci-header-mobilenav" aria-live="polite" aria-busy="false">
	${closeButton}
	<div class="nci-is-loading hidden"></div>
	<nav class="nci-header-mobilenav__nav">
		<ul class="nci-header-mobilenav__list">
			<li data-options="0"
			data-isroot="false"
			data-path="/about"
			class="nci-header-mobilenav__list-node active">
				<button class="nci-header-mobilenav__list-msg">Back</button>
			</li>
			<li class="nci-header-mobilenav__list-holder">
				<ul class="nci-header-mobilenav__list">
					<li data-options="0" class="nci-header-mobilenav__list-item">
						<a class="nci-header-mobilenav__list-link"
						href="/about-cancer">Explore Section</a>
					</li>
					<li data-options="0"
					data-isroot="false"
					data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Second Section</button>
					</li>
					<li data-options="0"
					data-isroot="false" data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Third Section</button>
					</li>
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a aria-current="page"
						class="nci-header-mobilenav__list-link current"
						href="/about">Active Page</a>
					</li>
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a aria-current="page"
						class="nci-header-mobilenav__list-link"
						href="/about">Inactive Page</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</div>`;

// Default Mobile Navigation - Active Section-Root
export const mobileActiveSectionRoot = `
<div class="nci-header-mobilenav active" tabindex="-1" role="dialog" 
aria-modal="true" id="nci-header-mobilenav" aria-live="polite" aria-busy="false">
	${closeButton}
	<div class="nci-is-loading hidden"></div>
	<nav class="nci-header-mobilenav__nav">
		<ul class="nci-header-mobilenav__list">
			<li data-options="0"
			data-isroot="false"
			data-path="/about"
			class="nci-header-mobilenav__list-node active">
			<button class="nci-header-mobilenav__list-msg">Back</button>
			</li>
			<li class="nci-header-mobilenav__list-holder">
				<ul class="nci-header-mobilenav__list">
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a class="nci-header-mobilenav__list-link current"
						href="/about-cancer">Explore Section</a>
					</li>
					<li data-options="0"
					data-isroot="false"
					data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Second Section With a Longer Section Name</button>
					</li>
					<li data-options="0"
					data-isroot="false" data-path="/example"
					class="nci-header-mobilenav__list-node">
						<button class="nci-header-mobilenav__list-label">Third Section</button>
					</li>
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a aria-current="page"
						class="nci-header-mobilenav__list-link"
						href="/about">Example Page</a>
					</li>
					<li data-options="0"
					class="nci-header-mobilenav__list-item">
						<a aria-current="page"
						class="nci-header-mobilenav__list-link"
						href="/about">Example Long Page Title Here To Wrap On Two lines</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</div>`;
