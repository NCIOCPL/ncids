import {
	RootMenu,
	SectionOne,
	SectionTwo,
	SubSection,
} from './data/mobile-menu';

export class MockMobileMenuAdapter {
	constructor(useUrlForNavigationId) {
		this.useUrlForNavigationId = useUrlForNavigationId;
	}

	async getInitialMenuId() {
		return this.useUrlForNavigationId ? '/root-menu' : 999;
	}

	async getNavigationLevel(id) {
		if (!id) {
			throw new Error(`ID not found`);
		}

		const origin = window.location.origin;
		const rootPath =
			origin === 'http://localhost:6006' ? origin : `${window.location.href}`;

		if (this.useUrlForNavigationId) {
			const path = id === '/' ? '/root-menu' : id;

			return this.fetchData(`${rootPath}/data/mobile-menu${path}.json`);
		} else {
			/*
			 * Workaround for regression images
			 * Set mobileMenuSource: new MockMobileMenuAdapter(false), to trigger
			 * Rather than fetch data we just pull from folder
			 */
			if (id === '1') {
				return SectionOne;
			} else if (id === '2') {
				return SectionTwo;
			} else if (id === '3') {
				return SubSection;
			} else {
				return RootMenu;
			}
		}
	}

	async fetchData(path) {
		return await fetch(path).then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			return response.json();
		});
	}
}
