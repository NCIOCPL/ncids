import { closeButton } from './nci-header-close';

// Default Mobile Navigation
export const mobile = `
	<nav class="nci-header-mobilenav active">
	  ${closeButton}
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
</nav>`;

// Default Mobile Navigation - First Level
export const mobileFirstLevel = `
<nav class="nci-header-mobilenav active">
	${closeButton}
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
</nav>`;

// Default Mobile Navigation - Hover
export const mobileHover = `
<nav class="nci-header-mobilenav active">
	${closeButton}
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
</nav>`;

// Default Mobile Navigation - Second Level
export const mobileSecondLevel = `
<nav class="nci-header-mobilenav active">
	${closeButton}
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
</nav>`;

// Default Mobile Navigation - Active Section
export const mobileActiveSection = `
<nav class="nci-header-mobilenav active">
	${closeButton}
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
</nav>`;

// Default Mobile Navigation - Active Section-Root
export const mobileActiveSectionRoot = `
<nav class="nci-header-mobilenav active">
	${closeButton}
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
</nav>`;
